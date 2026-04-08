# Daris Chen

(562) 386-3975 | daris.chen@gmail.com | [linkedin.com/in/darischen](https://linkedin.com/in/darischen) | [github.com/darischen](https://github.com/darischen) | [darischen.com](https://darischen.com) | US Citizen

## Education

**University of California San Diego**  
Bachelor of Science (B.S.) in Computer Engineering  
San Diego, CA

---

## Work Experience

**Lead Full-Stack Engineer — PatentIQ**  
Product Manager Accelerator | Jan 2026 – Apr 2026 | Remote

- Orchestrated Agile development workflows via ClickUp for a 14-member cross-functional team while serving as lead architect and primary contributor to deliver the foundational PatentIQ AI technical MVP.
- Constructed an AI-powered patent search and drafting assistant hosted on Vercel, EC2, and Supabase using Next.js, Auth0, and FastAPI to simplify intellectual property research for early-stage founders.
- Programmed a hybrid semantic search engine combining OpenAI text-embeddings and PostgreSQL pgvector to perform high-dimensional similarity ranking and recommendation system over global USPTO patent datasets.
- Built recursive SQL query builder with Zod-validated JSON filters and implemented an LRU cache to reduce DB latency.

**Lead Full-Stack Engineer — Groundwork Books**  
San Diego, CA | Aug 2025 – Mar 2026

- Led architectural migration of production e-commerce to Next.js and Square for live inventory synchronization.
- Engineered a semantic search layer using Pinecone with integrated text embeddings, enabling topic and concept-based discovery across 4,000+ SKUs without requiring exact title matches.
- Architected a two-tier caching system: a look-aside Redis reducing Square API latency by 90% (sub-200ms p99), and a client-side request coalescing hook batching 50+ concurrent inventory lookups into an API call with 2-minute TTL cache.

**FishSense Artificial Intelligence Researcher**  
UCSD Engineers for Exploration (E4E) | Feb 2025 – Mar 2026 | San Diego, CA

- Engineered a custom R-CNN training pipeline (ResNet-50 backbone) for underwater laser-profiling, standardizing the Detectron2 codebase to reduce inference setup time by 40% for new researchers and increasing reproducibility.
- Developed a dual-laser photogrammetry algorithm to extract biological metrics (fish length/mass) from 2D video feeds, achieving sub-5% error rates in pixel-to-centimeter conversion.

**Software Engineering Intern — PersonifyApp.ai**  
Remote | Jan 2025 – Sep 2025

- Refactored feature leaderboard user interface using Next.js, Tailwind CSS, and Firebase, increasing user traffic by 15%; designed duplicate-detection logic in Firebase to clean the data pipeline.
- Built admin controls for approvals, rejections, and closures, and added vote-based ranking, category sorting, and search, cutting resolution time by 50% and reducing user interaction time by 20%.
- Engineered a data ingestion pipeline for unstructured text, implementing deduplication logic and NLP-based feature extraction to structure dataset inputs for the recommendation engine.

---

## Projects

### AI/ML & Research
**FlipperZillow** | Next.js, Python, PyTorch, AMD ROCm, Three.js, WebSpatial | Feb 2026 – Mar 2026

- Constructed an AI house tour platform using Next.js and Claude for semantic search, piping DFormerV2 spatial analysis into Claude Sonnet 4.6 to generate property scripts and ElevenLabs audio narration.
- Integrated an AMD ROCm SSH pipeline to process Realtor.com property images cascading DepthAnythingV2 into DFormerV2 and extracting WebSpatial compatible 3D objects using META's SAM3D Object.
- Assembled a 3D experience combining Google Maps and WebSpatial for Vision Pro with a Three.js fallback.

**RedShift LLM Jailbreak** | Python, PyTorch, CUDA, Prompt Engineering | Jan 2025 – Mar 2025

- Engineered an automated adversarial attack framework ("Red Teaming") for LLMs, implementing Chain-of-Thought injection techniques to bypass safety filters on models (ChatGPT, Llama, Vicuna, DeBERTa, DeepSeek, Grok).
- Built a scalable evaluation pipeline using PyTorch DataLoaders to batch-process adversarial prompts, increasing attack coverage by 67% across 7 major model architectures.

**Mini-Stockfish Chess Engine** | Pygame GUI, Torchscript, NumPy, Syzygy/Gaviota | Mar 2025 – Mar 2026

- Architected a hybrid chess engine combining HalfKP NNUE neural network with advanced alpha-beta search featuring killer moves, counter-move heuristics, history heuristics, quiescence search, NMP, and LMR.
- Optimized critical path using Cython, C++ legal move generation, and Zobrist hashing, reducing leaf node evaluation latency by 77.2%, cutting eval time from 1.1 ms to 0.25 ms on single-threaded commodity hardware.

### Full-Stack Web & SaaS
**Simplerfy** | Next.js, Claude API, Chrome Extension API, LaTeX | Jan 2025 – Feb 2025

- Constructed a job application management platform with a browser extension using the Chrome Extension API to automate form-filling across 15+ job boards.
- Programmed an AI optimization engine using the Claude API to evaluate job descriptions, extracting unstructured data from PDF resumes to automate profile population and generate tailored LaTeX versions with scoring systems.

**Personal Portfolio Site** | React, TypeScript, Node.js, Express.js, Tailwind CSS, Vercel | Oct 2024 – Present

- Developed a custom SSG pipeline transforming raw Markdown/LaTeX into statically optimized HTML at build time, achieving perfect Lighthouse performance scores (100/100).
- Implemented dynamic open-graph image generation and edge-cached asset delivery, reducing First Contentful Paint (FCP) to under 0.8s globally.

**WeatherApp** | Next.js, React, TypeScript, Prisma, PostgreSQL, Tailwind CSS | (Full-stack weather platform)

- Real-time weather display with 5-day forecasts, intelligent location search via Google Places, interactive Leaflet maps, and YouTube location-based content.
- Database-backed records system allowing users to save weather data over time periods with multi-format export (CSV, PDF, XML).

### Hardware & Digital Design
**Phased Array Microwave Sensor (HB100)** | ESP32-S3-DevkitC-1, Raspberry Pi 4, Analog Design | Feb 2026 – Apr 2026

- Constructed an analog front-end for a 4×1 array of HB100 microwave transceivers implementing a dual-stage op-amp cascade (MCP6002) to achieve a 1092× gain for microvolt intermediate frequency signals and 1.65V virtual ground biasing to process bipolar IF signals on a unipolar ADC.
- Programmed a processing pipeline combining 4th-Order Butterworth filters and FFTs with MUSIC algorithms and an Extended Kalman Filter for precise direction estimation and 2D spatial tracking.
- Coded an amplitude monopulse zone classifier to calculate spatial bias and target velocity substituting phase-coherent direction finding to overcome the inherent local oscillator drift of the hardware.

**TriCore9 (Custom 8-bit RISC CPU)** | SystemVerilog, Assembly, Python, ModelSim, Quartus Prime | Sep 2025 – Dec 2025

- Architected a custom 8-bit RISC soft-core processor with a 4-stage pipeline (Fetch, Decode, Execute, Writeback), optimizing data paths to minimize hazard stalls.
- Engineered a custom Assembler in Python to translate mnemonics to machine code, enabling rapid validation of the ISA through complex Hamming Code algorithms.

**16-bit Carry Look-Ahead Adder** | Verilog, Digital Logic Design | Sep 2024 – Dec 2024

- Constructed a hierarchical 16-bit adder using cascaded 4-bit PG blocks to reduce critical path delay to O(log N), implementing 2421 BCD variants validated through corner-case simulations.

---

## Technical Skills

**Programming Languages:** Python, Java, C/C++, JavaScript/TypeScript, HTML/CSS, ARM Assembly, SQL, Verilog/SystemVerilog, Go, Cython

**Libraries & Frameworks:** PyTorch, TensorFlow, CUDA, ROCm, cuDNN, Transformers, NumPy, pandas, Matplotlib, Scikit-learn, Detectron2, tqdm, React, Next.js, Node.js, Express.js, Three.js, Svelte, Tailwind CSS, Zod, DepthAnythingV2, DFormerV2, SAM3D Object, OpenAI, Claude, Signal Processing, FFT

**Tools & Technologies:** Git, GitHub Actions, Docker, Kubernetes, Linux, Clickup, Jira, Jest, Puppeteer, GCP, gRPC, EC2, GCC, OpenCL, Figma, VS Code, CodeMirror, Wandb, Jupyter, Hugging Face, Vercel, ESLint, Turbopack, OSM Nominatim, Open-Meteo, OpenStreetMap, Intel FPGA ModelSim, WebSpatial (Vision Pro), Auth0, SSH, HB100, RF Engineering, ESP32

**Databases:** PostgreSQL, MongoDB, Upstash Redis, Firebase, Pinecone, pgvector, Supabase
