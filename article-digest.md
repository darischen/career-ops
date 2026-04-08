# Daris Chen — Project Proof Points & Technical Depth

## PatentIQ: Semantic Patent Search & LLM-Powered Analysis

**Hero Metric:** Reduced patent search latency from 15s (keyword-based) to <2s (semantic); hybrid ranking (70% semantic / 30% keyword) improves precision across USPTO dataset

**What you built:** End-to-end AI platform combining semantic search, LLM recommendations, document upload analysis, CPC classification suggestions, and AI-assisted drafting for early-stage patent research.

**Why it matters:** Democratizes professional-level patent research for non-lawyers and founders who otherwise can't afford patent counsel. Combines OpenAI embeddings with PostgreSQL pgvector for real-time similarity ranking.

**Technical depth:**
- Vector embeddings + pgvector for semantic search over global USPTO dataset
- Hybrid ranking system balancing semantic similarity with keyword matching
- FastAPI backend, Next.js frontend, Supabase + Auth0 for persistence and auth
- Recursive SQL query builder with Zod-validated JSON filters
- LRU cache reducing database latency
- Structured LLM recommendations via Claude API

**Leadership:** Served as architect and primary technical contributor while orchestrating 14-member team (PMs, designers, developers) through Product Manager Accelerator. Built MVP foundation during intense 4-month accelerator.

**GitHub:** [PatentIQ on GitHub](https://github.com/darischen/PatentIQ)

---

## FlipperZillow: AI-Powered Immersive House Tours

**Hero Metric:** Real estate viewings transformed from 2D listings to interactive 3D spatial tours with professional AI narration in <30 seconds per property

**What you built:** End-to-end AI platform that accepts a property address, fetches Realtor.com photos via RapidAPI, processes them through dual parallel GPU pipelines (3D reconstruction + script generation), and delivers an immersive WebSpatial experience for Vision Pro or Three.js fallback.

**Why it matters:** Eliminates manual property tours for remote buyers. Combines depth analysis (DepthAnythingV2), semantic segmentation (DFormerV2), 3D reconstruction (SAM3D), and LLM narration (Claude + ElevenLabs) into a seamless product.

**Technical depth:**
- AMD ROCm GPU acceleration for deep learning inference (DepthAnythingV2, DFormerV2, SAM3D)
- Point cloud generation from depth maps + segmentation masks
- Open3D mesh optimization and .glb export for WebSpatial rendering
- Realtor.com API integration via RapidAPI (no web scraping)
- Claude API for semantic analysis → professional realtor scripts
- ElevenLabs TTS for natural voice narration
- Google Maps + WebSpatial integration for spatial computing

**GitHub:** [FlipperZillow on GitHub](https://github.com/NirvekPanda/FlipperZillow)

---

## Groundwork Books: Full-Stack E-Commerce with Semantic Search

**Hero Metric:** 90% reduction in Square API latency (sub-200ms p99); real-time inventory sync across 4,000+ SKUs without manual updates

**What you built:** Production Next.js e-commerce platform for a leftist bookstore collective. Integrated Square POS API for live inventory, Pinecone for semantic book search, Instagram + Google Sheets for community events, Upstash Redis for caching.

**Why it matters:** Transforms a community bookstore into a high-performance online platform. Semantic search allows patrons to find books by content/theme, not just title matching.

**Technical depth:**
- Square POS API integration for real-time inventory synchronization
- Pinecone vector database for semantic search (finds books by themes, not just keywords)
- Two-tier caching: look-aside Redis (reduce API latency by 90%) + client-side request coalescing hooks
- Firebase authentication for user accounts
- Instagram Basic Display API + Google Sheets API for community events
- Serverless deployment on Vercel with CI/CD pipeline
- Responsive design (Tailwind CSS)

**Live Site:** [groundworkbooks.org](https://groundworkbooks.org/)  
**GitHub:** [Groundwork Books on GitHub](https://github.com/Groundwork-Books/gw-website-react)

---

## Simplerfy: Job Application Management & Resume Optimization

**Hero Metric:** Automates form-filling across 15+ job boards; AI-powered resume tailoring maintains one-page constraint while improving keyword match

**What you built:** SaaS platform combining a web dashboard, browser extension, and Claude AI to streamline job applications. Analyzes job descriptions, auto-fills forms, generates tailored resumes, and produces interview prep answers.

**Why it matters:** Eliminates repetitive form-filling and ensures resume relevance without falsifying experience. Uses Claude API for structured analysis.

**Technical depth:**
- Chrome Extension API for form auto-detection and intelligent field mapping
- Claude API for job description analysis and resume optimization
- LaTeX-based resume management with real-time PDF compilation
- Resume scoring system comparing candidate skills to job requirements
- Interview answer generation based on job context
- User profile management (experience, education, projects, skills, application preferences)

**GitHub:** [Simplerfy on GitHub](https://github.com/darischen/Simplerfy)

---

## Mini-Stockfish Chess Engine: NNUE + Advanced Search

**Hero Metric:** 77.2% reduction in leaf node evaluation latency (1.1ms → 0.25ms) via Cython + C++ optimization; competitive play strength trained on 316M Stockfish positions

**What you built:** Full chess engine combining HalfKP NNUE neural network evaluation with advanced alpha-beta search, opening books, endgame tablebases, and PyGame GUI.

**Why it matters:** Demonstrates mastery across multiple abstraction levels: neural networks, game trees, bitboards, move generation, and UI. Performance optimization is critical.

**Technical depth:**
- HalfKP NNUE neural network trained on 316M Stockfish-evaluated positions
- Minimax + alpha-beta pruning with iterative deepening and transposition tables
- Quiescence search for tactical position handling
- Move ordering (MVV-LVA heuristic, killer moves)
- Incremental neural network updates with O(1) accumulator rollback
- Syzygy + Gaviota endgame tablebases for perfect play in endgames
- Bitboard representation for efficient move encoding
- Cython compilation + C++ move generation backend for performance
- PyGame GUI with sound effects, move history navigation, theme support

**GitHub:** [Mini-Stockfish on GitHub](https://github.com/darischen/Mini-Stockfish)

---

## HB100 Phased Array Radar: Analog Signal Conditioning + DSP

**Hero Metric:** 1092× amplification across two op-amp stages; dual parallel processing pipelines (MUSIC-based + amplitude-based) enable robust multi-target tracking with <5% heading error

**What you built:** 4-element Doppler radar system using HB100 microwave modules, custom op-amp signal conditioning, ESP32-S3 firmware, and Raspberry Pi 4 host processor running dual processing algorithms.

**Why it matters:** Demonstrates deep hardware understanding across the stack: antenna arrays, RF engineering, analog circuits, embedded firmware, and advanced DSP. Overcoming oscillator drift via amplitude-based classification shows pragmatic trade-offs.

**Technical depth:**
- 4-channel 10.525 GHz Doppler radar array (HB100 modules, free-running Gunn oscillators)
- Custom MCP6002 dual op-amp: 52× non-inverting + 21× inverting = 1092× total gain
- Virtual ground biasing (1.65V rail reference) to map bipolar IF to unipolar ADC
- Multi-stage EMI filtering (5V bypass + pre-amp + bandwidth limiting)
- ESP32-S3 firmware: 12-bit ADC @ 10 kHz per channel, DMA streaming, USB-CDC
- Dual DSP pipelines:
  - **MUSIC-based:** DC removal → 4th-order Butterworth → 1024-pt FFT → MUSIC pseudospectrum → EKF tracking
  - **Zone classifier:** Monopulse-based angle estimation (robust to LO drift) → 5-zone classification
- Extended Kalman Filter for continuous target state tracking [x, y, vx, vy]

**GitHub:** [HB100 Phased Array Radar](https://github.com/darischen/HB100-Phased-Array-Radar)

---

## TriCore9: Custom 8-bit RISC CPU

**Hero Metric:** Custom ISA, 4-stage pipeline, assembler in Python; demonstrates understanding of CPU architecture from instruction encoding through hardware synthesis

**What you built:** 8-bit RISC processor with 9-bit ISA (inspired by MIPS), implemented in SystemVerilog, simulated on ModelSim, synthesized on Quartus Prime. Includes custom Python assembler for rapid ISA validation.

**Why it matters:** Full-stack understanding of computer architecture: ISA design, pipeline optimization, hazard mitigation, and executable generation.

**Technical depth:**
- Custom 9-bit ISA: R-type (arithmetic/logic), J-type (jumps), I-type (memory/branches)
- 4-stage pipeline: Fetch → Decode → Execute → Writeback with hazard detection
- Components: instruction fetch, control decoder, register file (4 regs), ALU, data memory (256 instructions, 64-instruction pages)
- Support for Two's Complement multiplication (2-3 terms, range [-128, 127])
- Hamming distance calculation for error detection
- Custom Python assembler translating assembly mnemonics to machine code
- SystemVerilog structural design with separate ROM, pipeline stages, control logic

**GitHub:** [TriCore9 / 8-bit CPU](https://github.com/darischen/8bitCPU)

---

## WeatherApp: Full-Stack Weather Platform with Database

**Hero Metric:** Global weather coverage with <0.8s First Contentful Paint (FCP); real-time data from Open-Meteo; persistent user records with multi-format export

**What you built:** Next.js weather application combining Google Places autocomplete, Open-Meteo weather data, Leaflet maps, YouTube content, and PostgreSQL + Prisma for persistent weather records.

**Why it matters:** Demonstrates full-stack competency: API integration, real-time data handling, database design, and responsive UI.

**Technical depth:**
- Google Places API for intelligent location search + fallback geocoding (OpenStreetMap)
- Open-Meteo API for accurate weather data (no API keys required)
- PostgreSQL + Prisma ORM for weather record persistence
- CRUD operations for saving weather snapshots over date ranges
- Leaflet + React-Leaflet for interactive maps
- YouTube Data API for location-based video recommendations
- CSV/PDF/XML export for data analysis
- Responsive design with dark/light mode (Tailwind CSS)
- Geolocation support with fallback handling

**GitHub:** [WeatherApp](https://github.com/darischen/weatherapp)

---

## RedShift LLM: Adversarial Red Teaming Framework

**Hero Metric:** 67% increase in attack coverage across 7 major model architectures via batch processing; demonstrates prompt engineering and adversarial techniques

**What you built:** Multi-agent reinforcement learning system using adversarial jailbreaking to identify weaknesses in target LLMs. Attacker LLM generates jailbreaks, target LLM responds, judge LLM quantifies success.

**Why it matters:** Demonstrates deep understanding of LLM safety, prompt engineering, and evaluation. Critical for building robust AI systems.

**Technical depth:**
- Multi-agent setup: attacker, target, and judge LLMs (rotation across 9 models)
- Chain-of-Thought injection techniques for bypassing safety filters
- Scalable evaluation pipeline (PyTorch DataLoaders, batch processing)
- Support for multiple architectures: ChatGPT, Llama, Vicuna, DeBERTa, DeepSeek, Grok, Gemma, Phi, Zephyr
- Wandb integration for experiment tracking

**GitHub:** [RedShift](https://github.com/NirvekPandey/RedShift)

---

## 16-bit Carry Look-Ahead Adder: Digital Logic Design

**Hero Metric:** O(log N) critical path delay; 2421 BCD variants with comprehensive corner-case validation

**What you built:** Hierarchical 16-bit adder using cascaded 4-bit CLA blocks and two-level carry look-ahead for parallel carry computation.

**Why it matters:** Demonstrates understanding of digital logic trade-offs: latency vs. power vs. complexity. CLA is faster than ripple carry but more complex.

**Technical depth:**
- Single-level CLA (4-bit blocks with ripple carry between blocks)
- Two-level CLA (carry look-ahead applied to the ripple carry results)
- 2421 weighted BCD variants for error detection
- Corner-case simulation and validation
- Hierarchical block design

---

## Personal Portfolio Site: Markdown-to-HTML SSG

**Hero Metric:** Perfect Lighthouse scores (100/100); <0.8s First Contentful Paint globally; dynamic OG image generation

**What you built:** Custom static site generator transforming Markdown + LaTeX into optimized HTML at build time. Features multi-resume support, project filtering, and dynamic open-graph images.

**Why it matters:** Production-quality web performance and design. Shows attention to user experience and technical polish.

**Technical depth:**
- Custom SSG pipeline (Markdown/LaTeX → HTML)
- Lighthouse 100/100 performance
- Dynamic open-graph image generation
- Edge-cached asset delivery (Vercel)
- Multi-resume tabs (EE, SWE, AI/ML, Web Dev)
- React Router for client-side navigation

**Live Site:** [darischen.com](https://darischen.com)  
**GitHub:** [dchen Portfolio](https://github.com/darischen/dchen)
