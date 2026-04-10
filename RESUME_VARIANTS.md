# Resume Variants

Keep these files updated in your Downloads folder:

- `C:/Users/daris/Downloads/DarisChenResumeAI.pdf` — AI/ML/LLM roles (code: AI)
- `C:/Users/daris/Downloads/DarisChenResumeEE.pdf` — Hardware/EE roles (code: EE)
- `C:/Users/daris/Downloads/DarisChenResumeWD.pdf` — Web dev/frontend roles (code: WD)
- `C:/Users/daris/Downloads/DarisChenResumeSWE.pdf` — General software engineering (code: SWE)

## Resume Type Detection

When running `/career-ops apply`, detect resume type from JD keywords:

- **AI**: "agent", "llm", "model", "ml", "ai", "neural", "deep learning", "multimodal", "reinforcement learning"
- **EE**: "hardware", "fpga", "circuit", "verilog", "systemverilog", "embedded", "iot"
- **WD**: "react", "frontend", "web", "next.js", "javascript", "typescript", "css", "ui/ux", "html"
- **SWE**: default/general case (no clear match above)

## CSV Output Format

When applying to one or multiple offers, output CSV to copy into Google Sheets:

```
Company,Title,Site Found,Date,Tag,Notes,Resume Used
Perplexity,AI Software Engineer - Agents,Career Ops,,,,AI
CoreStory,AI Engineer,Career Ops,,,,AI
Ramp,Software Engineer Frontend,Career Ops,,,,WD
```

Format: `Company | Title | Career Ops | (blank) | (blank) | (blank) | [AI|EE|WD|SWE]`
