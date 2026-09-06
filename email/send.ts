/**
 * Send the invitation via Resend.
 *
 *   bun email/send.ts <to> [--from "Name <addr@domain>"] [--subject "..."]
 *
 * Reads RESEND_API_KEY from .env.local (gitignored).
 */

const args = Bun.argv.slice(2);
const to = args.find((a) => !a.startsWith("--"));
const flag = (name: string) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};

if (!to) {
  console.error('usage: bun email/send.ts <to> [--from "Name <a@b>"] [--subject "..."]');
  process.exit(1);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("RESEND_API_KEY missing — add it to .env.local");
  process.exit(1);
}

const from = flag("from") ?? "EVENAFTER MUMBAI <invites@evenafter.io>";
const subject =
  flag("subject") ?? "You're invited to judge & mentor at EVENAFTER MUMBAI";

const html = await Bun.file(new URL("./invitation.html", import.meta.url)).text();

const res = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    from,
    to: [to],
    subject,
    html,
    text:
      "You're invited to EVENAFTER MUMBAI (8-9 September 2026) as a Judge & Mentor.\n\n" +
      "On arrival, head to General Jagannath Bhosle Road, Nariman Point, Mumbai - 400021. " +
      "Meet the team, collect your badge, and your hotel room gets assigned there — " +
      "accommodation is covered, so don't book anything.\n\n" +
      "Reply to confirm. — EVENAFTER MUMBAI",
  }),
});

const body = await res.json();

if (!res.ok) {
  console.error(`✗ ${res.status} ${res.statusText}`);
  console.error(JSON.stringify(body, null, 2));
  process.exit(1);
}

console.log(`✓ sent to ${to}`);
console.log(`  from: ${from}`);
console.log(`  id:   ${body.id}`);
