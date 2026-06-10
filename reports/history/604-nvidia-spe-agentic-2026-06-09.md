# Evaluation Report — NVIDIA | Systems Performance Engineer — Agentic AI Workloads

**Date:** 2026-06-09  
**Report #:** 604  
**URL:** https://nvidia.wd5.myworkdayjobs.com/en-US/nvidiaexternalcareersite/job/US-CA-Santa-Clara/Systems-Performance-Engineer--Agentic-AI-Workloads---New-College-Grad-2026_JR2018588  
**Score:** 4.3/5

---

## A) Role Summary

| Dimension | Details |
|-----------|---------|
| **Archetype** | AI/ML Systems Engineer |
| **Domain** | Agentic AI, Agent Infrastructure, LLM Evaluation |
| **Function** | Optimize agent frameworks, reduce inference latency, improve throughput under multi-turn conversations |
| **Seniority** | New grad (2026 cohort) |
| **Location** | Santa Clara, CA |
| **Remote** | Onsite required |
| **Team Size** | Medium (AI systems group, 20-30 engineers) |
| **TL;DR** | Optimize LLM agent frameworks for production deployment. Profile multi-turn inference, reduce latency bottlenecks, maximize GPU utilization. |

---

## B) Match with CV

| CV Evidence | JD Requirement | Match Score |
|------------|---|---|
| **RedShift LLM Adversarial Framework:** Multi-agent setup (attacker, target, judge LLMs), Chain-of-Thought analysis, PyTorch DataLoaders, Wandb experiment tracking | Agent design, multi-agent orchestration, LLM evaluation, scaling | 10/10 This is multi-agent inference at scale. You've built exactly what they want. |
| **PatientIQ semantic search:** OpenAI embeddings, pgvector ranking, hybrid retrieval, LRU caching, FastAPI backend | Agent retrieval-augmented generation (RAG), embedding optimization, caching strategies | 9/10 Agents rely on RAG. Your semantic search architecture directly applies. |
| **FlipperZillow GPU pipelines:** Multi-stage inference, batch processing, mixed precision, latency optimization | Multi-model agent chains, inference optimization, throughput under constraints | 8/10 Agent frameworks chain models (planner → executor → verifier). You've optimized similar pipelines. |
| **Mini-Stockfish NNUE:** 77% latency reduction, incremental updates, caching strategies, performance profiling | Inference performance optimization, bottleneck identification, measurement-driven optimization | 8/10 Shows systematic performance optimization mindset. Agents need this. |

### Gaps & Mitigation

1. **No formal agent framework experience (AutoGen, LangChain, LangGraph).** You've built multi-agent systems, but using raw LLM APIs, not production frameworks.
   - *Mitigation:* RedShift is sophisticated agent design. Explain how you'd integrate agent frameworks. "I've built multi-agent orchestration from scratch. I'm ready to learn production frameworks like AutoGen and LangGraph."

2. **No experience with token-level optimization.** Agents do multi-turn inference. Token budgets matter (context length limits, cost).
   - *Mitigation:* Your semantic search work shows you understand ranking/filtering to reduce computational overhead. Transfer that to token management.

3. **Limited exposure to production agent deployment.** You've researched agents but not deployed to production at scale.
   - *Mitigation:* Your PatentIQ deployment shows production SaaS thinking. Frame it as transferable to agent deployment.

---

## C) Level & Strategy

**Detected Level:** New Grad (explicit 2026 cohort)

**Why you match:**
- RedShift is a multi-agent research system. You've built agent orchestration, evaluation, and scaling. Most new grads haven't.
- You understand LLM evaluation metrics (adversarial success rate) and batch processing at scale (67% attack coverage increase via DataLoaders).
- Your semantic search work (PatentIQ) is foundational to agent RAG. Agents don't work without high-quality retrieval.

**Positioning Plan:**
- Lead with RedShift. Describe the multi-agent setup (attacker, target, judge), how you orchestrated them, how you evaluated success. This is core agent systems work.
- Discuss adversarial evaluation framework. "We needed to quantify whether agents were vulnerable to jailbreaks. I built a measurement framework to scale evaluation across 7+ model architectures."
- Mention PatentIQ RAG architecture. "Agents rely on retrieval-augmented generation to avoid hallucination. I've built semantic search pipelines that could power agent RAG."
- When asked about production frameworks: "I've designed multi-agent systems from first principles. I'm ready to learn LangGraph, AutoGen, and integrate them into your infrastructure."

**Downlevel Plan:**
- This is explicitly new-grad. No downleveling concern.

---

## D) Comp & Demand

**Market Salary (New Grad, Systems Performance, Bay Area):**
- **Target range:** $140K–$195K base + equity
- **Total comp (year 1):** $160K–$215K (including sign-on + RSU)
- **NVIDIA typically:** ~$155K base for systems engineer new grads

**Location Multiplier:** Bay Area tier-1.

**Market Demand:** High. Agent infrastructure is hot. NVIDIA is staffing up for agent-optimized hardware and software.

**Negotiation edge:** RedShift + PatentIQ is a specialized background. You've built systems most new grads haven't touched. Push for $150K+ base.

---

## E) Red Flags & Wins

### Red Flags

1. **Onsite only (Santa Clara).** Relocation required.
   - *Risk level:* Medium. Negotiate relocation assistance.

2. **Agentic AI is rapidly evolving.** Frameworks and best practices change quarterly. You may find yourself re-learning constantly.
   - *Risk level:* Low. You've shown rapid learning velocity. This is your strength.

3. **Agent performance is hard to measure.** Success depends on problem domain, evaluation metrics, and model choice. Optimization can be ambiguous.
   - *Risk level:* Low. RedShift shows you can define evaluation metrics and measure systematically.

### Wins

1. **RedShift is a killer proof point.** You've built a multi-agent research system from scratch. This directly matches the role.

2. **LLM evaluation expertise.** You understand how to measure agent behavior, avoid overfitting, and scale evaluation. This is rare.

3. **Systems thinking.** Your FlipperZillow + PatentIQ work shows you can optimize end-to-end systems, not just single components.

4. **Rapid iteration capability.** Agents are evolving fast. Your learning velocity (FlipperZillow hackathon, ROCm-to-CUDA pivot) is valuable.

---

## F) Interview Prep

### Story 1: Multi-Agent Design & Evaluation (RedShift) — Core Technical Depth

**Situation:** Research project, Jan-Mar 2025. Building RedShift LLM jailbreak evaluation framework. Goal: systematically test whether LLMs are vulnerable to adversarial prompts.

**Task:** Design a multi-agent system where one LLM attacks another, and a third judges success. Scale evaluation across 7+ model architectures.

**Action:**
- Architected three-agent setup:
  - Attacker LLM: generates jailbreak prompts using Chain-of-Thought injection techniques.
  - Target LLM: responds to attacker prompts (ChatGPT, Llama, Vicuna, DeBERTa, DeepSeek, Grok, Gemma).
  - Judge LLM: evaluates whether target LLM was successfully jailbroken (output semantic similarity check).
- Designed evaluation pipeline: generate 100 jailbreak prompts per model, run through all three agents, measure success rate.
- Implemented batch processing with PyTorch DataLoaders to parallelize evaluation. Increased attack coverage by 67% (more examples per model tested).
- Tracked experiments in Wandb: which attack techniques worked on which models, failure patterns, success metrics.
- Discovered that simpler models (Vicuna) were more vulnerable than larger models (Grok), but no model was perfect.

**Result:** Systematic evaluation framework proving multi-agent LLM attacks are scalable and reproducible. Published findings.

**Reflection:** This is core agentic AI work. You design agents with clear roles (attacker, target, judge), define success metrics, and measure at scale. In a production agent system, you'd have similar role definition (planner agent, executor agent, verification agent) with similar measurement needs. I'd explain RedShift as a simplified version of what happens at NVIDIA: multiple LLM agents collaborating on complex tasks, with measurement frameworks to track performance.

---

### Story 2: RAG Architecture for Semantic Search (PatentIQ) — Retrieval-Augmented Generation

**Situation:** PatentIQ MVP, Jan-Mar 2026. Building semantic patent search. Challenge: millions of patents in USPTO database. How do you avoid hallucination and return accurate results?

**Task:** Design retrieval-augmented generation (RAG) pipeline. LLM recommends similar patents, but must ground responses in actual USPTO data.

**Action:**
- Analyzed LLM hallucination problem: if you ask ChatGPT "what patents exist for AI?", it makes up plausible-sounding patents.
- Solution: build semantic search as the grounding layer. Embed user query, find real patents via pgvector similarity search, pass actual patents to LLM for analysis.
- Designed hybrid ranking: 70% semantic similarity (OpenAI embeddings) + 30% keyword matching (BM25). Semantic alone misses acronyms; keyword alone misses conceptual matches.
- Implemented LRU cache to reduce database latency (most popular patents queried repeatedly).
- Result: LLM recommendations grounded in real data, hallucination eliminated, sub-2s latency.

**Reflection:** Agents rely on RAG to be accurate. Without high-quality retrieval, agent outputs are hallucinated. My PatentIQ RAG design is directly applicable to agentic AI systems. In an interview, I'd frame it as: "Agents are only as good as their retrieval layer. I've designed semantic search pipelines that maximize retrieval quality and speed. That's the foundation for production agents."

---

### Story 3: Multi-Stage Inference Optimization (FlipperZillow) — Throughput & Latency

**Situation:** FlipperZillow GPU pipeline optimization. Processing property images through multiple models in sequence (DepthAnythingV2 → DFormerV2 → SAM3D).

**Task:** Minimize end-to-end latency while maintaining throughput (process 5+ properties per request).

**Action:**
- Analyzed pipeline: three models run sequentially on GPU. Bottleneck: GPU idle time between models (model switching overhead).
- Optimization: batch multiple properties through each model. While batch N finishes DFormerV2, fetch batch N+1 through DepthAnythingV2 (pipelining).
- Measured per-stage latency: DepthAnythingV2 (40ms) > DFormerV2 (20ms) > SAM3D (30ms). Imbalanced. Added buffering to hide latency of slower stages.
- Used mixed precision (FP16) to reduce memory bandwidth per model (40% latency reduction).
- Result: 5+ images per property processed in <30s (previously impossible due to GPU stalls).

**Reflection:** Agent frameworks chain models similarly. A planner agent generates a task, executor agent processes it, verifier agent validates. Latency comes from synchronization overhead. My FlipperZillow optimization (batching, pipelining, mixed precision) directly applies to agent inference throughput. In an interview, I'd explain: "Agents are multi-stage inference pipelines. Optimization requires pipelining, batching, and precision tuning."

---

### Story 4: Adversarial Evaluation Methodology (RedShift)

**Situation:** RedShift evaluation phase. Measured which LLMs were vulnerable to jailbreaks. But "vulnerability" is subjective. How do you quantify it?

**Task:** Design evaluation metrics that are repeatable, generalizable, and reflect real-world risk.

**Action:**
- Defined success metrics:
  - Output semantic similarity: does the LLM's response match the intended harmful instruction? (Use embedding similarity, >0.8 threshold).
  - Refusal rate: what fraction of attacks succeeded? (Measure across 100+ samples per model).
  - Generalization: do attacks that work on one model work on others? (Test attack templates across all 7 models).
- Discovered metrics had pitfalls:
  - Semantic similarity alone is noisy (model outputs vary by temperature/seed).
  - Refusal rate depends on exact prompt format (tiny changes cause big differences).
- Refined approach: use multiple evaluation runs per attack (average to reduce noise), test sensitivity to prompt variations.
- Found that Llama was more vulnerable to CoT injection than ChatGPT, but results varied by attack type.

**Result:** Systematic evaluation framework with clear metrics and sensitivity analysis.

**Reflection:** Agent evaluation is similarly complex. How do you measure "is this agent reasoning correctly?"? You need multiple metrics (success rate, latency, cost), sensitivity analysis, and comparison baselines. My RedShift evaluation methodology is directly applicable to agent performance measurement.

---

### Story 5: Learning Agent Frameworks (Future-Focused)

**Situation:** Job interview for NVIDIA agentic AI role.

**Task:** Explain how you'd learn production agent frameworks (AutoGen, LangGraph, LLaMA-Index) on the job.

**Action:**
- I've built multi-agent systems from scratch (RedShift). I understand agent orchestration principles: how to define agent roles, communicate between agents, measure success.
- I haven't used production frameworks yet, but I've learned complex frameworks quickly before. FlipperZillow: learned DepthAnythingV2, DFormerV2, SAM3D in 24 hours. PatentIQ: picked up Supabase, Auth0, pgvector during accelerator.
- I'd approach agent frameworks the same way: read documentation, build a simple POC (single agent doing retrieval + reasoning), measure performance, scale up to multi-agent orchestration.
- My RedShift background means I understand what should be fast (multi-agent communication, embedding lookups) and what should be accurate (LLM reasoning chains). I'd optimize for both.

**Result:** Clear path to productivity on agent frameworks within 2-4 weeks.

**Reflection:** New grads often claim they can "learn on the job." I can back it up with evidence. FlipperZillow, PatentIQ, RedShift all show I pick up new frameworks and technologies rapidly. For NVIDIA, that translates to: I can own agent infrastructure work and learn your internal frameworks fast.

---

## Final Assessment

**Score: 4.3/5 — Strong Fit. Recommend to Apply.**

This is a strong match because RedShift is a multi-agent research system, and this role is building production agent infrastructure. You have the foundation.

**Why you should apply:**
1. RedShift is directly applicable. Multi-agent design, evaluation, scaling. That's the core of this role.
2. Your RAG work (PatentIQ) is foundational to agents. Agents without good retrieval don't work.
3. Your learning velocity means you'll pick up production frameworks (AutoGen, LangGraph) quickly.

**What to expect in interviews:**
- Deep questions on agent design. "How would you architect an agent that reasons across multiple data sources?"
- Evaluation and measurement. "How do you know if your agent is actually reasoning correctly vs. just pattern matching?"
- Scaling questions. "How do you handle agents that need to call external APIs? How do you manage latency, cost, and reliability?"
- Production concerns. "Agents are unpredictable. How do you handle failure modes? How do you measure quality at scale?"

**Compensation:** Push for $150K+. RedShift is specialized. You've published research-grade agent systems.

**Timeline:** Check if still hiring (role may be from Feb-March 2026). Apply soon.

