import os
import re

public_dir = "d:/Project/childspring/public"
src_dir = "d:/Project/childspring/src"

img_pattern = re.compile(r'src=["\'](/[^"\']+)["\']')

missing_files = []

for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            matches = img_pattern.findall(content)
            for match in matches:
                # Some are external or data URIs, ignore them
                if match.startswith('http') or match.startswith('data:'):
                    continue
                
                # Check if it exists in public
                full_path = os.path.join(public_dir, match.lstrip('/'))
                if not os.path.exists(full_path):
                    missing_files.append((filepath, match))

if missing_files:
    print("Found missing images:")
    for fp, img in missing_files:
        print(f"File: {fp} -> Missing: {img}")
else:
    print("All image references seem valid.")
