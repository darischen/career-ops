# Batch Apply — Prompt Caching

> Reflects `batch/batch-apply.mjs` (`primeCache`) and `modes/batch-apply.md`.
> The code is the source of truth.

The expensive, repeated part of every batch-apply worker is the shared resume
context: `modes/apply.md` (instructions) + `cv.md` + the 4 resume PDFs. Prompt
caching writes that prefix once and lets every worker read it at ~10% of input
price.

## What gets cached

`primeCache()` issues one tiny Haiku call (`max_tokens: 50`) whose prefix is:

```
system: [ "You are a cache-priming agent…",
          "# Apply instructions (modes/apply.md)\n…\n# CV (cv.md)\n…"  ← cache_control ]
user:   [ <PDF AI>, <PDF SWE>, <PDF EE>, <PDF WD>  ← cache_control on last,
          "Cache primed. Reply 'ok'." ]
```

Render order is `system → messages`, so one breakpoint on the last system block
plus one on the last PDF caches the whole `apply.md + cv.md + 4 PDFs` prefix.

## Why apply.md is in the cache

Every worker needs `apply.md` (CSV format, PDF-reading rules, tone, output
destinations). If it is not in the cached prefix, each worker reads it from disk
and pays full input price on ~3.6k tokens, every job. Caching it moves those
tokens to ~0.1× for workers 2..N.

## The 4096-token floor (Haiku 4.5)

Caching is a whole-prefix match, and the minimum cacheable prefix on Haiku 4.5 is
**4096 tokens**. The combined `apply.md + cv.md` system block is ~5.7k tokens, so
the system breakpoint caches. (cv.md alone, ~2.1k, is below the floor — but it is
still covered by the later PDF breakpoint, whose cumulative prefix is well over
4096.) A breakpoint whose prefix is below the floor silently writes nothing
(`cache_creation_input_tokens: 0`).

## Economics (Haiku 4.5, $/1M tokens)

| | rate |
|---|---|
| input (full) | $1.00 |
| cache write (5-min TTL) | $1.25 (1.25×) |
| cache read | $0.10 (0.1×) |

For a shared prefix of `T` tokens across a 1-prime + N-worker batch:

```
no cache:   T × N           (every worker pays full input)
cached:     T×1.25  +  T×0.1×N   (prime writes once, workers read)
```

Break-even is at **N = 2**. The savings grow with batch size and with prefix
size (the PDFs dominate `T`).

## Verify it actually caches

The prime logs `Cache write: N tokens`. If `N == 0`, nothing cached. The reads
happen in the workers, so to confirm the read side, run the harness — it asserts
`cache_read > 0` on every worker call and prints a real cost table:

```bash
ANTHROPIC_API_KEY=sk-... node batch/test-cache-savings.mjs [jd.txt] [N]
```

## Caveat — prefix must match

A cache entry is keyed to the exact `model + tools + system + messages` prefix
bytes. The prime warms a cache; a worker only reads it if the worker's request
reproduces that prefix byte-for-byte (same model, same `apply.md + cv.md + PDFs`,
same order, before its per-job JD). If workers are spawned with a different
system-prompt prefix, `cache_read` is 0 and none of the savings apply. The
harness is the way to confirm the prime and the workers actually share a prefix.

## Cache TTL

Ephemeral cache is **5 minutes**. The prime runs AFTER the conductor (Phase 1)
and IMMEDIATELY before workers spawn, so the full window is available for
parallel worker execution. Past ~5–7 jobs the window can expire mid-batch and
late workers re-pay full price.
