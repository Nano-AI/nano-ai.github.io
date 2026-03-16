#!/usr/bin/env bash
# ================================================================
# new-post.sh — Blog post manager
# ================================================================
#
# USAGE
#   ./new-post.sh "Post Title"              Create a new post
#   ./new-post.sh --archive SLUG            Hide post from listing
#   ./new-post.sh --unarchive SLUG          Restore archived post
#   ./new-post.sh --remove SLUG             Delete post entirely
#   ./new-post.sh --list                    Show all posts
#
# SLUG is the directory name, e.g. 2026-03-16-my-post-title
# ================================================================

set -euo pipefail

POSTS_JS="blog/posts.js"
POSTS_DIR="blog/posts"
TEMPLATE="${POSTS_DIR}/_template/index.html"

# ── Colours ──────────────────────────────────────────────────────
GREEN='\033[0;32m'; CYAN='\033[0;36m'; RED='\033[0;31m'
YELLOW='\033[1;33m'; BOLD='\033[1m'; RESET='\033[0m'

# ── Require Python 3 ─────────────────────────────────────────────
if ! command -v python3 &>/dev/null; then
  echo -e "${RED}Error: python3 is required but not found.${RESET}" >&2
  exit 1
fi

# ── Guard: must run from repo root ───────────────────────────────
if [[ ! -f "$POSTS_JS" ]]; then
  echo -e "${RED}Error: run this script from the repository root.${RESET}" >&2
  exit 1
fi

# ================================================================
# LIST
# ================================================================
cmd_list() {
  echo -e "${BOLD}Blog posts${RESET}"
  python3 - <<'PYEOF'
import re, sys

with open("blog/posts.js") as f:
    content = f.read()

# Extract each object block between { ... },
blocks = re.findall(r'\{[^{}]+\}', content, re.DOTALL)
if not blocks:
    print("  (no posts found)")
    sys.exit(0)

for b in blocks:
    title    = (re.search(r'title:\s*"([^"]+)"', b) or ['',''])[1] if re.search(r'title:\s*"([^"]+)"', b) else '?'
    date     = (re.search(r'date:\s*"([^"]+)"', b) or ['',''])[1]  if re.search(r'date:\s*"([^"]+)"', b) else '?'
    slug     = (re.search(r'slug:\s*"([^"]+)"', b) or ['',''])[1]  if re.search(r'slug:\s*"([^"]+)"', b) else '?'
    archived = 'true' in (re.search(r'archived:\s*(true|false)', b) or type('',(),{'group':lambda s,i:'false'})()).group(1)
    status = ' \033[33m[archived]\033[0m' if archived else ''
    print(f"  {date}  {title}\033[2m  ({slug})\033[0m{status}")
PYEOF
}

# ================================================================
# CREATE
# ================================================================
cmd_create() {
  local TITLE="$1"
  local DATE
  DATE=$(date +%Y-%m-%d)

  # Slugify title: lowercase, replace non-alphanumeric with -, trim dashes
  local SLUG
  SLUG=$(echo "$TITLE" \
    | tr '[:upper:]' '[:lower:]' \
    | tr -cs 'a-z0-9' '-' \
    | sed 's/-$//')

  local DIR_NAME="${DATE}-${SLUG}"
  local POST_DIR="${POSTS_DIR}/${DIR_NAME}"

  if [[ -d "$POST_DIR" ]]; then
    echo -e "${RED}Error: directory already exists: $POST_DIR${RESET}" >&2
    exit 1
  fi

  # 1. Scaffold directory
  mkdir -p "$POST_DIR"
  cp "$TEMPLATE" "$POST_DIR/index.html"

  # 2. Fill in placeholders using Python (portable, no sed -i differences)
  TITLE="$TITLE" DATE="$DATE" DIR_NAME="$DIR_NAME" python3 << 'PYEOF'
import os, re
from datetime import datetime

title    = os.environ['TITLE']
date_str = os.environ['DATE']
dirname  = os.environ['DIR_NAME']

dt = datetime.strptime(date_str, '%Y-%m-%d')
formatted = dt.strftime('%B %-d, %Y') if hasattr(dt, 'strftime') else date_str

try:
    formatted = dt.strftime('%B %-d, %Y')
except ValueError:
    formatted = dt.strftime('%B %d, %Y')

with open(f'blog/posts/{dirname}/index.html', 'r') as f:
    html = f.read()

html = html.replace('Post Title — Aditya Bankoti', f'{title} — Aditya Bankoti')
html = html.replace('Post description for search engines.', f'{title}.')
html = html.replace('Your Post Title Here', title)
html = html.replace('Month DD, YYYY', formatted)

with open(f'blog/posts/{dirname}/index.html', 'w') as f:
    f.write(html)
PYEOF

  # 3. Prepend entry to posts.js
  TITLE="$TITLE" DATE="$DATE" SLUG="$DIR_NAME" python3 << 'PYEOF'
import os

title = os.environ['TITLE']
date  = os.environ['DATE']
slug  = os.environ['SLUG']

with open('blog/posts.js', 'r') as f:
    content = f.read()

entry = (
    '  {\n'
    f'    title:      "{title}",\n'
    f'    date:       "{date}",\n'
    f'    slug:       "{slug}",\n'
    '    tags:       [],\n'
    '    excerpt:    "Add an excerpt — edit blog/posts.js",\n'
    '    readTime:   "? min",\n'
    '    screenshot: null,\n'
    '    archived:   false,\n'
    '  },'
)

content = content.replace('const POSTS = [', 'const POSTS = [\n' + entry, 1)

with open('blog/posts.js', 'w') as f:
    f.write(content)
PYEOF

  echo ""
  echo -e "${GREEN}✅  Created: ${POST_DIR}/${RESET}"
  echo ""
  echo -e "  ${BOLD}Next steps:${RESET}"
  echo -e "  ${CYAN}1.${RESET}  Write your post:   ${BOLD}${POST_DIR}/index.html${RESET}"
  echo -e "  ${CYAN}2.${RESET}  Add a screenshot:  ${BOLD}${POST_DIR}/screenshot.png${RESET}  (optional)"
  echo -e "       Then set  ${BOLD}screenshot: \"screenshot.png\"${RESET}  in ${BOLD}blog/posts.js${RESET}"
  echo -e "  ${CYAN}3.${RESET}  Update excerpt, readTime, tags in  ${BOLD}blog/posts.js${RESET}"
  echo -e "  ${CYAN}4.${RESET}  Deploy:"
  echo -e "       ${BOLD}git add . && git commit -m 'blog: ${TITLE}' && git push${RESET}"
  echo ""
}

# ================================================================
# ARCHIVE / UNARCHIVE  (hides post from listing, keeps files)
# ================================================================
cmd_set_archived() {
  local SLUG="$1"
  local VALUE="$2"   # true | false
  local LABEL="$3"   # "Archived" | "Restored"

  SLUG="$SLUG" VALUE="$VALUE" python3 << 'PYEOF'
import os, re, sys

slug  = os.environ['SLUG']
value = os.environ['VALUE']

with open('blog/posts.js', 'r') as f:
    content = f.read()

# Find the block containing this slug and flip archived:
pattern = r'(\{[^{}]*slug:\s*"' + re.escape(slug) + r'"[^{}]*archived:\s*)(true|false)'
if not re.search(pattern, content, re.DOTALL):
    print(f"Error: slug '{slug}' not found in blog/posts.js", file=sys.stderr)
    sys.exit(1)

new_content = re.sub(pattern, lambda m: m.group(1) + value, content, flags=re.DOTALL)

with open('blog/posts.js', 'w') as f:
    f.write(new_content)
PYEOF

  echo -e "${GREEN}✅  ${LABEL}: ${SLUG}${RESET}"
  echo -e "   Post is $([ "$VALUE" = "true" ] && echo "hidden from" || echo "visible in") the blog listing."
  echo ""
}

# ================================================================
# REMOVE  (deletes directory + removes from posts.js entirely)
# ================================================================
cmd_remove() {
  local SLUG="$1"
  local POST_DIR="${POSTS_DIR}/${SLUG}"

  # Confirm
  echo -e "${YELLOW}⚠️   This will permanently delete:${RESET}"
  echo -e "    Directory:  ${BOLD}${POST_DIR}/${RESET}"
  echo -e "    Entry in:   ${BOLD}${POSTS_JS}${RESET}"
  echo ""
  read -r -p "Are you sure? [y/N] " CONFIRM
  if [[ ! "$CONFIRM" =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 0
  fi

  # Remove from posts.js
  SLUG="$SLUG" python3 << 'PYEOF'
import os, re, sys

slug = os.environ['SLUG']

with open('blog/posts.js', 'r') as f:
    content = f.read()

# Remove the entire object block whose slug matches
# Matches from the leading whitespace+{ to the closing },
pattern = r'\n?\s*\{[^{}]*slug:\s*"' + re.escape(slug) + r'"[^{}]*\},'

if not re.search(pattern, content, re.DOTALL):
    print(f"Warning: slug '{slug}' not found in blog/posts.js — skipping manifest update.", file=sys.stderr)
else:
    content = re.sub(pattern, '', content, flags=re.DOTALL)
    with open('blog/posts.js', 'w') as f:
        f.write(content)
PYEOF

  # Remove directory
  if [[ -d "$POST_DIR" ]]; then
    rm -rf "$POST_DIR"
    echo -e "${GREEN}✅  Removed: ${POST_DIR}${RESET}"
  else
    echo -e "${YELLOW}⚠️   Directory not found (already deleted?): ${POST_DIR}${RESET}"
  fi
  echo ""
}

# ================================================================
# USAGE
# ================================================================
usage() {
  echo ""
  echo -e "  ${BOLD}new-post.sh${RESET} — Blog post manager"
  echo ""
  echo -e "  ${CYAN}./new-post.sh \"Post Title\"${RESET}       Create a new post"
  echo -e "  ${CYAN}./new-post.sh --archive SLUG${RESET}     Hide from listing (keeps files)"
  echo -e "  ${CYAN}./new-post.sh --unarchive SLUG${RESET}   Restore to listing"
  echo -e "  ${CYAN}./new-post.sh --remove SLUG${RESET}      Delete post permanently"
  echo -e "  ${CYAN}./new-post.sh --list${RESET}             Show all posts"
  echo ""
  echo -e "  SLUG is the post directory name, e.g. ${BOLD}2026-03-16-my-post-title${RESET}"
  echo ""
}

# ================================================================
# DISPATCH
# ================================================================
case "${1:-}" in
  --list)
    cmd_list
    ;;
  --archive)
    [[ -z "${2:-}" ]] && { echo -e "${RED}Error: provide a slug.${RESET}"; usage; exit 1; }
    cmd_set_archived "$2" "true" "Archived"
    ;;
  --unarchive)
    [[ -z "${2:-}" ]] && { echo -e "${RED}Error: provide a slug.${RESET}"; usage; exit 1; }
    cmd_set_archived "$2" "false" "Restored"
    ;;
  --remove)
    [[ -z "${2:-}" ]] && { echo -e "${RED}Error: provide a slug.${RESET}"; usage; exit 1; }
    cmd_remove "$2"
    ;;
  --help|-h|"")
    usage
    ;;
  -*)
    echo -e "${RED}Unknown flag: $1${RESET}"; usage; exit 1
    ;;
  *)
    cmd_create "$1"
    ;;
esac
