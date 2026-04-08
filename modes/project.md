# Mode: project — Evaluate Portfolio Project Idea

Assess whether a portfolio project idea is worth building for your job search.

## Evaluation Criteria (6 dimensions)

| Dimension | Weight | 5 = ... | 1 = ... |
|-----------|--------|---------|---------|
| **Signal for target roles** | 25% | Directly proves JD skill | Unrelated |
| **Uniqueness** | 20% | Nobody's done this | Everyone has it |
| **Demo-ability** | 20% | Live demo in 2 min | Code only, no visual |
| **Metrics potential** | 15% | Clear metrics (latency, cost, accuracy) | No metrics possible |
| **Time to MVP** | 10% | 1 week | 3+ months |
| **STAR story potential** | 10% | Rich story with trade-offs | Just implementation |

## Interview Pack Requirements

For each approved project:
1. **One-pager**: product + architecture + metrics + evaluation plan
2. **Demo**: live URL or 2-min walkthrough video
3. **Postmortem**: what worked, what didn't, mitigations

## 80/20 Plan

- Week 1 → MVP with core metric
- Week 2 → polish + interview pack

## Verdicts

- **BUILD** → plan with weekly milestones
- **SKIP** → why and what to do instead
- **PIVOT TO [alternative]** → more impactful variant

---

## Example Score

```
PROJECT: AI Chess Engine with NNUE

Fit for your archetypes: ⭐⭐⭐⭐⭐ (AI/ML primary)
- Demonstrates: Neural networks, search algorithms, optimization (Cython), performance
- Gap it fills: Deep learning training on large datasets (316M examples in your version)
- Hiring signal: STRONG — shows NNUE training, Cython optimization, shipped software
- Differentiation: Your version has Syzygy/Gaviota endgame tables + PyGame GUI = complete product
- Time to demo: 2-3 weeks (can land alpha in 1 week)
- Interview value: Immediate — story of NNUE training, Cython optimization, alpha-beta search

SCORE: 4.8/5.0 → BUILD THIS
```

---

## When to Skip a Project

- **Time cost > return**: Takes 6+ weeks but adds minimal signal
- **Solved problem**: Done by 100 people already (basic TODO apps, Twitter clones)
- **Wrong archetype**: If targeting AI roles, a CSS grid demo doesn't help
- **Portfolio already strong**: If your CV is solid, building more projects has diminishing returns

## When to Build

- **Fills a gap**: Your CV is weak in [specific skill], project proves it
- **Differentiates you**: Unique angle or depth (not just "another [thing]")
- **Interview gold**: You can tell a compelling STAR story about building it
- **Fast turnaround**: Can ship v1 in <2 weeks
