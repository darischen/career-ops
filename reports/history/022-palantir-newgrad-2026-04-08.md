# Palantir — Software Engineer, New Grad

**URL:** https://jobs.lever.co/palantir/94984771-0704-446c-88c6-91ce748f6d92  
**Date Evaluated:** 2026-04-08  
**Score:** 4.2/5

---

## Block A: Role Summary

**Archetype:** Full-Stack / Systems Engineer  
**Domain:** Enterprise data/analytics platform  
**Function:** Core infrastructure, data pipelines, distributed systems  
**Seniority:** New grad (2026 cohort)  
**Location:** Palo Alto, CA (possible on-site requirement)  
**Remote:** Likely on-site or hybrid (Palantir culture emphasizes in-office)

---

## Block B: CV Match

### Strengths

1. **Distributed systems thinking:** Mini-Stockfish parallelization, FlipperZillow GPU pipeline coordination, PatentIQ microservices architecture
   - Evidence: "Custom 8-bit RISC soft-core processor with 4-stage pipeline", "Optimized critical path using Cython, C++ legal move generation"

2. **Data pipelines at scale:** PatentIQ PostgreSQL + pgvector semantic search, Mini-Stockfish 316M-example neural network training
   - Evidence: "Built recursive SQL query builder with Zod-validated JSON filters", "Trained 316M-example NNUE"

3. **Performance optimization culture:** Palantir values engineers who understand every layer. Daris does.
   - Evidence: Multiple projects with latency metrics (90% reduction at Groundwork, 77.2% at Mini-Stockfish)

4. **Python/C++/SQL:** Palantir stack likely includes Python (data science), Java/C++ (backend), SQL (analytics)
   - Evidence: cv.md lists "Python, C/C++, SQL, JavaScript"

### Gaps

1. **No Java experience listed** — Palantir heavily uses Java for backend
   - Mitigation: New grad role; learning Java on the job is expected

2. **No distributed systems courses explicitly mentioned** — Palantir wants scalability thinking
   - Mitigation: You have the fundamentals (TriCore9 pipeline, ParallelMiniStockfish)

3. **No mention of data governance, security, or compliance** — Palantir is defense/intelligence focused
   - Mitigation: New grad role; security can be learned on the job

---

## Block C: Level & Strategy

**Seniority:** Perfect fit. New grad, Palantir targets new grads.

**Positioning:** Emphasize low-level systems thinking. Palantir hires engineers who understand memory, CPU, caching, and distributed tradeoffs.

**Cover letter angle:**
- Lead with TriCore9 (you architected a CPU from scratch)
- Follow with Mini-Stockfish optimization (you know how to squeeze every nanosecond)
- Finish with PatentIQ (you shipped a distributed system: backend + frontend + database)
- Tone: "I understand systems from the metal up. I'm not afraid to go deep."

---

## Block D: Comp & Demand

**Typical Palantir new grad:** $160K-$200K+ (base + bonus + equity)  
**Daris target:** $80K+ (undervalued for what Palantir pays)  
**Market:** Extreme demand. Top-tier company, selective hiring.

**Notes:**
- Palantir pays significantly above market for new grads
- Strong equity component (company is profitable, stock appreciating)
- Negotiation: You're undershooting. Ask for market rate if you get the offer.

---

## Block E: Red Flags & Wins

### Green flags
- **Selective hiring** = credentials matter; Daris qualifies
- **Systems-focused culture** = perfect for someone with physics-to-pseudocode background
- **Growth opportunity** = strong role, clear technical mentorship
- **Comp** = well above target

### Yellow flags
- **On-site requirement** (Palantir is headquarters-focused) — Daris willing to relocate, so OK
- **Defense/intelligence domain** — not everyone's cup of tea, but Daris hasn't ruled out
- **Intensive new grad program** — high bar, high pressure; make sure you're ready

### Red flags
- None structural. This is a strong opportunity.

---

## Block F: Interview Prep

**Key stories:**

1. **Systems architecture (TriCore9):**
   - **Situation:** Course project: design a CPU from scratch
   - **Task:** Build a functional 8-bit RISC with 4-stage pipeline
   - **Action:** Architected pipeline (Fetch → Decode → Execute → Writeback), optimized hazard detection, wrote Python assembler for validation
   - **Result:** Working soft-core that runs Hamming Code algorithms
   - **Why it matters:** Shows you understand tradeoffs (latency vs throughput, hazard stalls, instruction encoding). Palantir cares about this.

2. **Performance optimization (Mini-Stockfish):**
   - **Situation:** Chess engine was too slow (1.1ms per evaluation)
   - **Task:** Reduce latency to real-time performance
   - **Action:** Cython critical path, C++ legal move generation (bitboards), Zobrist hashing, NMP + LMR pruning
   - **Result:** 77.2% latency reduction (1.1ms → 0.25ms on commodity hardware)
   - **Why it matters:** Palantir processes terabytes of data. Showing you can shave 77% off a hot path is exactly what they want.

3. **Distributed data pipelines (PatentIQ):**
   - **Situation:** MVP semantic search needed to scale to millions of patents
   - **Task:** Design database + embeddings storage
   - **Action:** Chose PostgreSQL + pgvector (not Pinecone). Justified with cost analysis and faster iteration. Team agreed.
   - **Result:** Shipped hybrid semantic ranking without external vendor dependency
   - **Why it matters:** Palantir values engineers who think about architecture and can defend decisions. You did that.

---

## Summary & Recommendation

**Fit:** Excellent. You have the systems thinking Palantir hires for.

**Positioning:** Emphasize depth. You understand every layer from CPU design to distributed systems. That's what Palantir looks for in new grads.

**Recommendation:** **APPLY (strong).**
- Generate ATS PDF focused on systems/performance work
- In cover letter, lead with TriCore9 → Mini-Stockfish → PatentIQ (breadth of abstraction layers)
- Expect systems design interviews (they will ask about tradeoffs, scaling, optimization)
- If you get the offer, negotiate. Palantir will likely offer $160K+; don't settle for $80K

**Palantir new grad program is one of the best in the industry.** Taking it would be a massive win for your career trajectory.
