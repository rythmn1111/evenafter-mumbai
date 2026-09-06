# EVENAFTER MUMBAI

Event site for EVENAFTER MUMBAI — BEST Conference and Mini Hackathon,
8 – 9 September 2026.

Built by cloning the [ethmumbai.in](https://www.ethmumbai.in/) homepage
line-for-line and then rebranding and reworking it from there.

## Stack

| | |
|---|---|
| Runtime / package manager | Bun 1.3 |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + React Compiler |
| Styling | Tailwind CSS v4 |
| Animation | `motion` (Framer Motion 13) |
| Icons | `lucide-react` |
| Types | TypeScript |

## Running

```bash
bun install
bun run dev     # http://localhost:3000
bun run build
bun run start
```

> Next.js shells out to `node`, so you need a working `node` on `PATH` even
> though the package manager is Bun. If `node` aborts on launch with a
> `libsimdjson` dyld error, your Homebrew `node@22` is linked against a stale
> simdjson — `brew uninstall node@22` and let the plain `node` formula take over,
> or prefix commands with `PATH=/opt/homebrew/opt/node/bin:$PATH`.

## Layout

```
src/
  app/
    layout.tsx        root layout, Inter Tight, metadata / OG tags
    page.tsx          homepage section order
    globals.css       Tailwind v4 theme, MPlusRounded1c @font-face
  components/         one file per homepage section
  data/               speakers, sponsors, partners, team, volunteers, venues, FAQs
  assets/             images imported through next/image
public/
  assets/             speakers, team, volunteers, sponsors, partners, hero art
  fonts/              MPlusRounded1c .ttf (7 weights)
```

Homepage sections, in render order:

`Hero` → `EventCards` → `People` → `Sponsors` → `Partners` → `Venue` →
`Team` → `Volunteers` → `FAQ` → `Footer`

## Notes for editing

**Hero art.** The skyline, road and bus are three stacked transparent PNGs in
`src/assets`. Only the bus animates: a `motion.div` interpolates it from
off-screen right at 10% scale to centre at full scale over 3.5s. Two scale
systems compound — `scale` in the `animate` prop drives the arrival, while
`lg:scale-[0.6]` on the `<img>` sets its resting size per breakpoint.

**Hero props.** `public/assets/hero/*.svg` (balloon, plane, clouds) are *not*
vector — each is a base64 PNG inside an `<svg>` wrapper, so they can only be
resized or faded, not recoloured.

**Adding a person.** Speaker/team cards pin the image with `absolute bottom-0`,
so a cutout must have its subject **flush against the bottom edge of the frame**
with no transparent padding below it. Pad above so the subject is ~70–78% of
frame height, then set `imageScale` between `h-[120%]` and `h-[155%]`. A gap at
the bottom of the source PNG will shove the subject up out of the card.

**Swapping an image.** Next caches optimised images. If a replaced photo doesn't
change on screen, `rm -rf .next/dev/cache/images`.

**Logo wordmark.** Both logo SVGs are outlined paths, not `<text>` — there is no
string to edit. The wordmark is M PLUS Rounded 1c ExtraBold at `-0.071em`
tracking if you need to regenerate it.

## Not included

`/conference` and `/hackathon` are real pages on the site this was cloned from,
each with its own layout. Only the homepage was built, so those two nav links
currently 404. The data they'd need (`conferenceSpeakers`, `conferenceSponsors`,
`hackathonSponsors`, `conferenceFaqs`, `hackathonFaqs`) is already in
`src/data`, and `Navbar`, `Footer`, `FAQ`, `Sponsors` and `Venue` all take props
for reuse.

## Third-party content

This repository vendors material that originated with ETHMumbai and others, and
none of it is covered by this project's own code:

- ~55 photographs of real people (speakers, organisers, volunteers)
- original ETHMumbai illustration artwork — the crystal/bus mark, cityscape,
  road, interior and laptop scenes, and the stats graphics
- ~30 sponsor and partner logos, which are their respective owners' trademarks
- M PLUS Rounded 1c (SIL Open Font License)

If you fork or reuse this, strip `public/assets` and `src/assets` and supply
your own. The code is mine; the pictures are not.
