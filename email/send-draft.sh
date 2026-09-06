#!/bin/bash
# Opens invitation.html as a Mail.app draft. Does NOT send — review, then hit send.
#
#   ./email/send-draft.sh someone@example.com "Rythmn"
#
set -euo pipefail

TO="${1:?usage: send-draft.sh <to-address> [recipient-name]}"
NAME="${2:-}"
HTML_FILE="$(cd "$(dirname "$0")" && pwd)/invitation.html"
SUBJECT="You're invited to judge & mentor at EVENAFTER MUMBAI"

[ -f "$HTML_FILE" ] || { echo "missing $HTML_FILE" >&2; exit 1; }

osascript \
  -e 'on run {toAddr, toName, subj, htmlPath}' \
  -e '  set htmlBody to (read (POSIX file htmlPath as alias) as «class utf8»)' \
  -e '  tell application "Mail"' \
  -e '    set msg to make new outgoing message with properties {subject:subj, html content:htmlBody, visible:true}' \
  -e '    tell msg to make new to recipient with properties {address:toAddr, name:toName}' \
  -e '    activate' \
  -e '  end tell' \
  -e 'end run' \
  "$TO" "$NAME" "$SUBJECT" "$HTML_FILE"

echo "Draft opened in Mail.app for $TO — review it, then send."
