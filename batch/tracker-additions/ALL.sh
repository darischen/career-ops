#!/bin/bash
cd "C:\Users\daris\Desktop\Job\career-ops\batch\tracker-additions"

# Create all TSV files
cat > 428-benchling.tsv << 'EOF'
428	2026-05-17	Benchling	Software Engineer, New Grad (2026)	Evaluated	4.1/5	✅	[428](reports/428-benchling-newgrad-2026-05-17.md)	Bioscience platform; strong comp; new grad program; modern stack (Python/TypeScript); strong fit for full-stack archetype
EOF

cat > 429-apex-tech.tsv << 'EOF'
429	2026-05-17	Apex Technology	Software Engineer Internship (Spring 2026)	Evaluated	2.8/5	❌	[429](reports/429-apex-tech-internship-2026-05-17.md)	Spring internship (future timing, not immediate); startup early stage; unclear tech stack; niche enterprise software
EOF

cat > 430-sentry.tsv << 'EOF'
430	2026-05-17	Sentry	Software Engineer, Intern (Fall 2026)	Evaluated	3.2/5	❌	[430](reports/430-sentry-intern-2026-05-17.md)	Error monitoring platform; strong company; but internship scope (Fall 2026 timing); new grad full-time roles are higher priority
EOF

cat > 431-zip-intern.tsv << 'EOF'
431	2026-05-17	Zip	Software Engineer Intern (Fall 2026)	Evaluated	3.4/5	❌	[431](reports/431-zip-intern-fall-2026-05-17.md)	Fintech; Fall 2026 internship; stronger new grad offering exists (sibling role); modern stack (Python/JavaScript)
EOF

cat > 432-zip-newgrad.tsv << 'EOF'
432	2026-05-17	Zip	Software Engineer, New Grad (2026 Start)	Evaluated	4.0/5	✅	[432](reports/432-zip-newgrad-2026-05-17.md)	Fintech platform; explicit new grad 2026 start; strong comp ($140-180K equity); modern tech (Python, JavaScript, Kafka); remote-flexible; apply
EOF

cat > 433-openai-intern.tsv << 'EOF'
433	2026-05-17	OpenAI	Software Engineer Internship / Co-op, Applied Emerging Talent (Fall 2026)	Evaluated	3.8/5	~	[433](reports/433-openai-intern-2026-05-17.md)	Tier-1 company; Applied Emerging Talent pathway; Fall 2026 start; LLM infrastructure fit; internship scope vs new grad full-time trade-off
EOF

cat > 434-athletic-intern.tsv << 'EOF'
434	2026-05-17	The Athletic	Engineering Student Intern, Summer 2026	Evaluated	2.5/5	❌	[434](reports/434-theatrical-intern-summer-2026-05-17.md)	Sports/media platform; summer 2026 internship (past timing); new grad full-time preferred; smaller company scale
EOF

cat > 435-zen-educate.tsv << 'EOF'
435	2026-05-17	Zen Educate	Product Engineer (Remote - US CT/ET)	Evaluated	3.3/5	❌	[435](reports/435-zen-educate-2026-05-17.md)	EdTech; remote; US timezone (Connecticut); title is "Product Engineer" (vague); unclear product complexity; smaller company
EOF

cat > 436-sws-llm.tsv << 'EOF'
436	2026-05-17	Smart Working Solutions	LLM Engineer (Remote, Full-Time)	Evaluated	3.7/5	~	[436](reports/436-sws-llm-2026-05-17.md)	LLM applications; remote full-time; title matches AI archetype; company stage unclear; competitive with tier-1 tech firms less certain
EOF

cat > 437-reveal-qa.tsv << 'EOF'
437	2026-05-17	Reveal Technology	Quality Assurance Engineer	Evaluated	2.2/5	❌	[437](reports/437-reveal-qa-2026-05-17.md)	QA focus; not SWE role; mismatch with builder archetype; testing tools (Selenium, test automation); lower learning opportunity
EOF

cat > 438-decile-frontend.tsv << 'EOF'
438	2026-05-17	Decile Group	Front End Engineer (Remote)	Evaluated	3.5/5	❌	[438](reports/438-decile-frontend-2026-05-17.md)	Frontend-heavy (React, TypeScript); remote; modern web dev stack; missing backend + distributed systems depth interest; lower strategic fit
EOF

cat > 439-luxury-staff.tsv << 'EOF'
439	2026-05-17	Luxury Presence	Staff Frontend Engineer - LATAM (Remote)	Evaluated	1.8/5	SKIP	[439](reports/439-luxury-staff-2026-05-17.md)	Staff-level role (5+ YOE) vs new grad (0 YOE); LATAM timezone; blocker on seniority gate; do not apply
EOF

cat > 440-owner-staff.tsv << 'EOF'
440	2026-05-17	Owner	Staff Software Engineer, Full-Stack	Evaluated	1.9/5	SKIP	[440](reports/440-owner-staff-2026-05-17.md)	Staff-level full-stack; requires 5+ YOE leadership; new grad resume-screen rejection; blocker on credential gate
EOF

cat > 441-jobgether-devops.tsv << 'EOF'
441	2026-05-17	Jobgether	Sr. DevOps Engineer (Remote)	Evaluated	2.0/5	SKIP	[441](reports/441-jobgether-devops-2026-05-17.md)	Senior DevOps role (5+ YOE); infrastructure-heavy; new grad credential blocker; not aligned with SWE builder archetype
EOF

echo "All TSV files created"
