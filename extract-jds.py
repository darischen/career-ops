#!/usr/bin/env python3
import re
import html
from pathlib import Path

jds = [
    (1, 'unum', 'Unum'),
    (2, 'cai', 'Computer Aided Inc'),
    (3, 'caci', 'CACI International'),
    (4, 'pae', 'PAE (Amentum)'),
    (5, 'axon', 'Axon'),
    (6, 'leidos', 'Leidos'),
    (7, 'kbr', 'KBR'),
    (8, 'cvs', 'CVS Health'),
    (9, 'boeing', 'Boeing'),
]

for num, name, company in jds:
    file = Path(f'./batch/jd-{num}-{name}.html')
    if not file.exists():
        print(f'{num}. {company}: FILE NOT FOUND')
        continue
    
    content = file.read_text(errors='ignore')
    
    # Remove script/style tags
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    
    # Convert HTML entities
    content = html.unescape(content)
    
    # Extract text
    content = re.sub(r'<[^>]+>', ' ', content)
    content = re.sub(r'\s+', ' ', content)
    
    length = len(content)
    print(f'{num}. {company}: {length} chars')
    
    # Save extracted text
    Path(f'./batch/jd-{num}-{name}.txt').write_text(content)

print('Text extraction complete')
