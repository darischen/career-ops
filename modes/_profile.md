# Your Custom Profile: Narrative & Archetypes

This file defines your personal narrative, role archetypes, and proof points for job evaluation. Edit this when your career goals or expertise changes.

---

## Professional Narrative

**Headline:** New grad engineer with full-stack abstraction mastery (physics → pseudocode). Willing to relocate anywhere in the US.

**Location:** San Diego-based, but willing to relocate anywhere in the US with or without relocation assistance.

**Superpower:** I've worked across every level of abstraction in tech:
- **Bottom:** Physics, electrical engineering, analog circuits, op-amps, microwave modules (HB100 radar)
- **Middle:** Digital logic, FPGA (SystemVerilog, Quartus), CPU architecture (TriCore9), embedded (ESP32, Raspberry Pi)
- **High:** Programming languages (Python, C, JavaScript, Assembly, Verilog), databases, full-stack systems
- **Top:** Distributed systems, LLMs, neural networks, semantic search, AI products

This breadth means:
1. **Rapid domain switching:** I can learn new tech stacks (ROCm, DepthAnythingV2, DFormerV2) in 24 hours under pressure
2. **Subtle bug catching:** I understand how high-level choices (data structures, caching strategies) affect low-level performance
3. **System thinking:** I can architect end-to-end solutions and manage trade-offs across layers

**Best Achievement:** PatentIQ (Patent Search MVP)
- End-to-end ownership: architect, primary contributor, team lead
- 14-member team (PMs, designers, developers)
- Shipped AI-powered patent search + drafting assistant in 4 months
- Hybrid semantic search (OpenAI embeddings + PostgreSQL pgvector)
- Auth (Auth0), hosting (Vercel/EC2), database (Supabase)

**Learning Story:** FlipperZillow (24-hour hackathon)
- Learned ROCm, DepthAnythingV2, DFormerV2, SAM3D from scratch
- Set up unfamiliar cloud environments, debugged GPU compatibility, integrated 5+ pre-trained models
- Shipped working 3D house tours with AI narration under extreme time pressure
- Key insight: Pragmatism wins. We cut SAM3D when it broke on ROCm, shipped a working product instead of debugging forever.

**Known Weakness:** I overcommit. I get interested in problems and want to solve them immediately. Right now: PatentIQ + coursework + side project (stock predictor) + job search. Learning to time-box more strictly and pick what actually matters.

---

## Role Archetypes

You have **no strong preference** — all roles equally interesting. The system will evaluate fit across these four archetypes and pick the best match per application.

### 1. Full-Stack Software Engineer

**Level:** Junior/Mid  
**Why you fit:**
- PatentIQ: End-to-end ownership (FastAPI backend + Next.js frontend + Supabase + Auth0)
- Groundwork Books: Architectural migration, semantic search, caching strategy
- Simplerfy: Chrome extension API + Claude API + LaTeX resume management
- WeatherApp: Multi-API coordination, database design, responsive UI

**Skills this emphasizes:**
- Backend: FastAPI, Node.js/Express, database design (PostgreSQL, Prisma), API integration
- Frontend: Next.js, React, TypeScript, Tailwind CSS
- DevOps: Vercel, Docker, serverless, CI/CD
- Performance: caching (Redis, in-memory), query optimization, Lighthouse 100/100

**Projects for this archetype:**
- PatentIQ (semantic search MVP)
- Groundwork Books (real-time inventory, two-tier caching)
- Simplerfy (full-stack SaaS)
- WeatherApp (full-stack with database)
- Personal Portfolio Site (SSG, performance optimization)

---

### 2. AI/ML Engineer

**Level:** Junior/Mid  
**Why you fit:**
- FlipperZillow: GPU-accelerated inference (DepthAnythingV2, DFormerV2, SAM3D), multi-stage pipeline
- RedShift: Adversarial red teaming, batch evaluation, 7+ model architectures
- Mini-Stockfish: NNUE neural network (trained on 316M positions), search algorithms
- FishSense: R-CNN training pipeline, photogrammetry, sub-5% error metrics

**Skills this emphasizes:**
- Deep Learning: PyTorch, TensorFlow, CUDA/ROCm, Transformers, inference optimization
- Computer Vision: Detectron2, depth estimation, semantic segmentation, 3D reconstruction
- LLMs: Prompt engineering, adversarial testing, safety evaluation, Claude/OpenAI APIs
- Data Pipeline: PyTorch DataLoaders, batch processing, large-scale training (316M examples)

**Projects for this archetype:**
- FlipperZillow (GPU pipelines, depth + segmentation + 3D)
- RedShift (adversarial LLM evaluation, multi-agent setup)
- Mini-Stockfish (NNUE + search, neural network inference)
- PatentIQ (semantic embeddings, hybrid ranking)

---

### 3. Hardware / Embedded / FPGA Engineer

**Level:** Junior/Mid  
**Why you fit:**
- HB100 Radar: Analog circuit design, signal conditioning, op-amp cascades, embedded firmware, DSP
- TriCore9: Custom CPU ISA, SystemVerilog, pipeline design, assembler, FPGA synthesis
- 16-bit Adder: Digital logic, hierarchical design, corner-case validation
- FishSense: Embedded Python/C, sensor integration, real-time data collection

**Skills this emphasizes:**
- Analog & RF: Op-amp design, impedance matching, virtual ground biasing, EMI filtering
- Digital Logic: Verilog/SystemVerilog, timing analysis, hazard detection, pipelining
- FPGA Tools: Quartus Prime, ModelSim, synthesis, place-and-route
- Embedded: ESP32-S3, Raspberry Pi, firmware, interrupt handling, DMA
- DSP: FFT, filtering (Butterworth, Chebyshev), MUSIC algorithms, Kalman filtering

**Projects for this archetype:**
- HB100 Phased Array Radar (full stack: analog + firmware + DSP)
- TriCore9 (ISA, pipeline, assembler)
- 16-bit Carry Look-Ahead Adder (digital logic optimization)

---

### 4. Full-Stack Web Developer

**Level:** Junior/Mid  
**Why you fit:**
- Personal Portfolio Site: React, TypeScript, responsive design, Lighthouse 100/100, dynamic OG generation
- Simplerfy: Chrome Extension API, form auto-detection, LaTeX rendering
- Groundwork Books: React, Tailwind CSS, real-time search, cart system
- WeatherApp: Map integration (Leaflet), geolocation, multi-format export

**Skills this emphasizes:**
- Frontend: React 19, Next.js 16, TypeScript, Tailwind CSS, responsive design
- UI/UX: Dark mode, glass morphism, drag-and-drop, modal components, visual feedback
- Performance: Lighthouse 100/100, FCP <0.8s, edge caching, lazy loading
- APIs: Google Places, Open-Meteo, Instagram, YouTube, RapidAPI integration
- Data Visualization: Charts, maps (Leaflet), interactive components

**Projects for this archetype:**
- Personal Portfolio Site (performance, design, Markdown rendering)
- WeatherApp (maps, multi-API coordination, responsive)
- Simplerfy (Chrome extension UX, LaTeX rendering)
- Groundwork Books (product UX, real-time updates)

---

## Proof Points (Hero Metrics)

These proof points appear in evaluations and help score fit:

### Technical Depth
- **Abstraction mastery:** Worked across physics → pseudocode stack
- **Learning velocity:** ROCm + DepthAnythingV2 + DFormerV2 + SAM3D in 24 hours
- **Performance optimization:** 77.2% latency reduction (chess), 90% API latency reduction (Groundwork), 100/100 Lighthouse
- **Large-scale data:** 316M-example neural network training (Mini-Stockfish), USPTO patent dataset

### Leadership & Impact
- **End-to-end ownership:** PatentIQ MVP (architect + primary contributor + team lead)
- **Team coordination:** 14-member team across 4-month accelerator
- **Technical decision-making:** Advocated for PostgreSQL + pgvector over MongoDB/Pinecone (lower cost, faster iteration)
- **Pragmatism under pressure:** Cut SAM3D when it broke on ROCm, shipped working product instead of debugging

### Production Skills
- **Full-stack shipping:** PatentIQ, Groundwork, Simplerfy all shipped to real users
- **Performance at scale:** Real-time inventory (Square API), 4,000+ SKUs, global FCP <0.8s
- **Data pipelines:** Dual parallel GPU pipelines (FlipperZillow), batch processing (RedShift, Mini-Stockfish)
- **Security & auth:** Auth0, Firebase, JWT, encrypted data storage

---

## Deal-Breakers (What to Avoid)

You want roles where the skills are modern and transferable. Avoid:
- **Legacy GUI frameworks:** Swing/AWT, WPF
- **Mainframe tech:** COBOL, JCL, DB2, VSAM
- **Dying ecosystems:** Flash, Internet Explorer quirks mode, etc.

**Why:** These are career dead-ends. You want to build skills that compound across roles.

---

## Ideal Role Description

**Title:** (Any of Software Engineer, ML Engineer, Hardware Engineer, Web Developer)

**Company:** Early-stage (Series A-C) or established tech company with real products

**Tech Stack (ideal, not required):**
- Modern languages: Python, JavaScript/TypeScript, C, Rust
- Frameworks: Next.js, FastAPI, Django, or equivalent
- Databases: PostgreSQL, MongoDB, or similar
- Cloud: Vercel, AWS, GCP, or similar
- Tools: Git, Docker, CI/CD

**Environment (ideal):**
- Fast iteration cycles (weekly or bi-weekly releases)
- Learning culture (you can pick up new tech on the job)
- Pragmatism valued over perfection (ship something working, iterate)
- Small-to-mid sized teams (can see impact, wear multiple hats)

**Compensation:**
- $80K+ USD (flexible based on location/role; as new grad, may negotiate to $70-90K)
- Remote or willing to relocate anywhere in US

---

## Interview Prep: Behavioral Stories

### 1. Learned Quickly Under Deadline
**Situation:** FlipperZillow hackathon (24-hour deadline)  
**Task:** Build an AI-powered house tour platform with 3D visualization  
**Action:**
- Learned ROCm, DepthAnythingV2, DFormerV2, SAM3D from scratch in 24 hours
- Navigated unfamiliar AMD cloud environment, debugged GPU compatibility issues
- Integrated 5+ pre-trained models into a coherent pipeline
- Pivoted when SAM3D broke on ROCm: switched to Nvidia cloud with CUDA
- Cut scope (dropped SAM3D, kept 3D reconstruction) to ship a working product

**Result:** Working end-to-end platform with professional AI narration, 3D tours for Vision Pro  
**Why it matters:** Shows learning velocity, pragmatism, ability to ship under pressure

---

### 2. Advocated for Technical Approach and Won
**Situation:** PatentIQ architecture decision  
**Task:** Choose database + embedding storage for semantic patent search  
**Action:**
- PMs proposed MongoDB, Pinecone, or Weaviate
- I argued for PostgreSQL + pgvector:
  - Postgres already running (no new vendor/cost)
  - pgvector is open-source and free
  - MVP doesn't need hosted vector DB yet
  - Easier to iterate on schema
- Asked data scientist and backend engineer to research independently
- They came back agreeing within days (after checking benchmarks)

**Result:** Got technical buy-in without overriding anyone; lower cost, faster iteration  
**Why it matters:** Shows technical judgment, ability to persuade with data, not dictatorship

---

### 3. Production Performance Issue
**Situation:** FlipperZillow GPU pipeline bottleneck  
**Task:** Process Realtor.com images through DepthAnythingV2 + DFormerV2 + SAM3D  
**Action:**
- SAM3D was incompatible with AMD's ROCm (breaking dependency)
- Only had one GPU VM at a time (expensive context switching)
- Instead of debugging forever: migrated to Nvidia cloud with CUDA
- Dealt with two cloud environments (complexity trade-off)
- Unblocked the pipeline and shipped

**Result:** Working 3D reconstruction pipeline, shipped on time  
**Why it matters:** Shows pragmatism, ability to make trade-off decisions under time pressure

---

### 4. Architectural Regret
**Situation:** FlipperZillow data sourcing  
**Task:** Get interior property photos for 3D processing  
**Action:**
- Planned to scrape Zillow, Redfin, Craigslist, Realtor.com
- Discovered: Zillow requires 10+ days API approval, others actively block scraping
- Pivoted to RapidAPI for Realtor.com (quick, legal)
- Trade-off: image quality was lower, degraded downstream model performance

**Result:** Shipped product, but image quality was limiting factor  
**Why it matters:** Shows learning — always validate data source availability and quality BEFORE committing pipeline architecture to it

---

### 5. Cut Scope to Ship
**Situation:** FlipperZillow SAM3D dependency conflict  
**Task:** Ship working 3D house tours within 24-hour hackathon  
**Action:**
- SAM3D (3D object extraction) had ROCm dependency conflicts
- Under time pressure, conflicts looked hard to resolve
- Decision: Cut SAM3D, revert to standard browser image display
- Kept depth estimation + semantic analysis, lost fancy 3D object extraction

**Result:** Shipped working product with core features, instead of debugging forever  
**Why it matters:** Shows maturity — perfectionism is the enemy of shipping

---

### 6. Scaling & Data Pipeline
**Situation:** Mini-Stockfish neural network training  
**Task:** Train NNUE on large chess dataset (316M examples)  
**Action:**
- Dataset grew from 13M → 316M entries (24x growth)
- Original pipeline loaded entire dataset into RAM (broke on larger sizes)
- Rebuilt pipeline: chunk data, stream from disk, async batch loading
- Used PyTorch DataLoaders with memory-mapped files

**Result:** Trained 316M-example NNUE, competitive play strength  
**Why it matters:** Shows ability to redesign systems when they hit scaling limits

---

### 7. Technical Leadership & Delegation
**Situation:** PatentIQ team structure  
**Task:** Lead 14-member team (data scientist, backend engineer, frontend developer, multiple PMs)  
**Action:**
- Assigned work based on skill + scope: data scientist owns ML pipeline end-to-end, backend engineer owns server integration, frontend owns UI
- Tracked progress weekly, coordinated dependencies with PMs
- Matched scope to skill instead of offloading randomly
- Served as lead architect + primary contributor (code, not just management)

**Result:** Shipped MVP with clear ownership and minimal rework  
**Why it matters:** Shows technical leadership that's grounded in doing the work yourself

---

### 8. Mentoring (In Progress)
**Situation:** PatentIQ frontend skill gap  
**Task:** New frontend developer joined, only knew plain HTML/CSS, stack is Next.js + Node  
**Action:**
- Flagged skill gap mismatch to PMs and the developer
- Waiting for resolution, but this is a leadership moment: identifying gaps and bridging communication

**Result:** In progress — shows willingness to invest in team  
**Why it matters:** Shows you care about team capability, not just shipping

---

### 9. Known Weakness: Overcommitment
**Question:** What's your biggest weakness?

**Answer:** I overcommit. I get interested in problems and want to solve them immediately. Right now I'm juggling: PatentIQ (lead engineer), finishing coursework, building a transformer-based stock predictor on the side, and job searching. It's a lot.

I'm learning to be more intentional about what I commit to and time-box projects. PatentIQ gets X hours per week, coursework gets Y. It's forcing me to pick what actually matters instead of trying to do everything.

**Why this works:** It's honest, self-aware, shows growth mindset. Many new grads don't realize they're overcommitting until someone else points it out.
