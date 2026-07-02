import os
import re

# Patterns to remove
patterns = [
    r'animate-[a-z-]+',
    r'fade-in',
    r'slide-in-from-[a-z0-9-]+',
    r'zoom-in-[a-z0-9-]+',
    r'duration-[0-9]+',
    r'transition-[a-z-]+',
    r'transition',
    r'ease-[a-z-]+',
    r'delay-[0-9]+',
    r'hover:scale-[0-9\.]+',
    r'active:scale-[0-9\.]+',
    r'fill-mode-[a-z-]+',
    r'animate-\[[^\]]+\]',
    r'hover:-translate-y-[0-9]+',
    r'hover:tracking-wide',
    r'group-hover:tracking-wide',
    r'group-hover:scale-[0-9\.]+',
    r'active:scale-\[[^\]]+\]',
    r'transition-colors',
    r'transition-all',
    r'transition-transform',
    r'transition-opacity',
    r'hover:opacity-[0-9]+',
    r'group-hover:opacity-[0-9]+',
    r'hover:shadow-xl',
    r'hover:shadow-lg',
    r'hover:shadow-2xl',
    r'hover:shadow-md',
    r'group-hover:shadow-sm',
]

# We want to match these as whole "words"
combined_pattern = r'\b(' + '|'.join(patterns) + r')\b'
regex = re.compile(combined_pattern)

def process_className(match):
    full_attr = match.group(0)
    # Inside the className value, remove the patterns
    cleaned = regex.sub("", full_attr)
    # Clean up multiple spaces, including across newlines
    cleaned = re.sub(r'[ \t\n]+', ' ', cleaned)
    # Clean up space after quote/backtick/curly
    cleaned = re.sub(r'((?:className|class)\s*=\s*[\{"\'`]) ', r'\1', cleaned)
    # Clean up space before quote/backtick/curly
    cleaned = re.sub(r' (["\'`\}])', r'\1', cleaned)
    return cleaned

def clean_content(content, file_path):
    # Match className="..." or className={`...`} or class="..."
    content = re.sub(r'(?:className|class)\s*=\s*(?:\{`.*?`\}|"[^"]*"|\'[^\']*\')', process_className, content, flags=re.DOTALL)
    
    # Remove animation-related style properties
    def process_style(match):
        style_content = match.group(0)
        # Remove animationDelay, animationDuration, transitionDuration, transitionDelay
        style_content = re.sub(r'\b(animation|transition)(Delay|Duration|TimingFunction|FillMode)\s*:\s*[^,\}]+', '', style_content)
        # Clean up empty style objects or trailing commas
        style_content = re.sub(r',\s*\}', ' }', style_content)
        style_content = re.sub(r'\{\s*,', '{', style_content)
        style_content = re.sub(r',\s*,', ',', style_content)
        
        # If it's just style={{ }} remove the whole thing
        # Check if the content between {{ and }} is empty or just spaces/newlines
        inner_match = re.search(r'\{\{(.*?)\}\}', style_content, flags=re.DOTALL)
        if inner_match:
            inner_content = inner_match.group(1).strip()
            if not inner_content or inner_content == "":
                return ""
        return style_content

    content = re.sub(r'style\s*=\s*\{\{.*?\}\}', process_style, content, flags=re.DOTALL)

    if file_path.endswith('.css'):
        # Remove @keyframes blocks
        content = re.sub(r'@keyframes\s+[a-zA-Z0-9_-]+\s*\{[^\}]+\}', '', content, flags=re.DOTALL)
        # Remove animation and transition properties
        content = re.sub(r'\banimation\s*:[^;]+;', '', content)
        content = re.sub(r'\btransition\s*:[^;]+;', '', content)
    
    return content

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        new_content = clean_content(content, file_path)
        
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
    return False

root_dir = r'src\pages\doctor'
files_processed = 0
files_changed = 0

for root, dirs, files in os.walk(root_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts', '.css')):
            file_path = os.path.join(root, file)
            files_processed += 1
            if process_file(file_path):
                files_changed += 1

print(f"Processed {files_processed} files, changed {files_changed} files.")
