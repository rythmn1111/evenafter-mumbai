/**
 * Send the invitation via Resend.
 *
 *   bun email/send.ts <to> --name "Full Name" [--org "Company"]
 *                          [--from "Name <addr@domain>"] [--subject "..."]
 *
 * invitation.html is a template; {{FIRST_NAME}}, {{BADGE}} and {{WORK_BLURB}}
 * are filled in per recipient. Reads RESEND_API_KEY from .env.local (gitignored).
 */

const argv = Bun.argv.slice(2);
const FLAGS = ["name", "org", "from", "subject"];

const flag = (n: string) => {
  const i = argv.indexOf(`--${n}`);
  return i !== -1 ? argv[i + 1] : undefined;
};

// a bare arg is the recipient only if it isn't a flag or a flag's value
const to = argv.find(
  (a, i) => !a.startsWith("--") && !FLAGS.includes(argv[i - 1]?.replace(/^--/, "") ?? ""),
);

const name = flag("name");

if (!to || !name) {
  console.error(
    'usage: bun email/send.ts <to> --name "Full Name" [--org "Company"]\n' +
      '                          [--from "Name <addr@domain>"] [--subject "..."]',
  );
  process.exit(1);
}

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error("RESEND_API_KEY missing — add it to .env.local");
  process.exit(1);
}

const org = flag("org");
const from = flag("from") ?? "EVENAFTER MUMBAI <invites@evenafter.io>";
const subject =
  flag("subject") ?? "You're invited to judge & mentor at EVENAFTER MUMBAI";

const firstName = name.trim().split(/\s+/)[0];
const badge = org
  ? `${name.toUpperCase()} &nbsp;&middot;&nbsp; ${org.toUpperCase()}`
  : name.toUpperCase();
const workBlurb = org
  ? `share what you're building at ${org}`
  : "share what you're working on";

const template = await Bun.file(
  new URL("./invitation.html", import.meta.url),
).text();

const html = template
  .replaceAll("{{FIRST_NAME}}", firstName)
  .replaceAll("{{BADGE}}", badge)
  .replaceAll("{{WORK_BLURB}}", workBlurb);

const unfilled = html.match(/\{\{[A-Z_]+\}\}/g);
if (unfilled) {
  console.error(`✗ unfilled template tokens: ${[...new Set(unfilled)].join(", ")}`);
  process.exit(1);
}

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
      `Hi ${firstName},\n\n` +
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
console.log(`  name:  ${name}${org ? ` (${org})` : ""}`);
console.log(`  from:  ${from}`);
console.log(`  id:    ${body.id}`);
