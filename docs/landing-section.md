# Landing section — plan

Working doc for the landing section of the portfolio site. Branch: `landing-section`.

## Locked decisions

- **Aesthetic:** minimalist, type-driven, generous whitespace, monochromatic. Reference: [murielvega.net](https://www.murielvega.net/).
- **Layout:** single column, centered. Vertical stack: name → tagline → nav actions.
- **Tagline:** `Backend developer — APIs, databases, secure systems.`
- **Wink:** monospace tagline. Name in serif/sans display face; tagline in mono (JetBrains Mono or IBM Plex Mono — TBD at impl).
- **Primary CTA:** Projects.
- **Secondary actions:** _Read about me_ (→ `/about`), _Get in touch_ (→ `mailto:`).
- **Language:** English only.
- **Out of scope for landing:** non-traditional background story (security supervisor, IDF) — that lives on the About page.

## Pull requests

### PR 1 — Typography foundation

Load fonts via `next/font`. Wire into Tailwind theme tokens. No visible page changes — pure foundation for later PRs.

- [x] Pick + load display face (Instrument Serif) via `next/font`
- [x] Pick + load mono face (JetBrains Mono) via `next/font`
- [x] Expose both as Tailwind font-family tokens (`font-display`, `font-mono`)
- [x] Verify FOUT/FOIT behavior in dev (next/font self-hosts with `font-display: swap` by default; build compiles cleanly)

### PR 2 — Landing skeleton: name + tagline

First visible page. Vertical stack core: name in display type, tagline below in mono. No nav yet.

- [ ] Replace default `page.tsx` content with name + tagline
- [ ] Apply display face to name, mono face to tagline
- [ ] Center single column, set max-width, set vertical rhythm
- [ ] Confirm copy: `Sagi Dahari` + `Backend developer — APIs, databases, secure systems.`

### PR 3 — Nav stack + routing stubs

Three actions below the tagline. Primary CTA gets visual weight. Stub the linked pages so dev links don't 404.

- [ ] Add nav stack: Projects (primary), Read about me, Get in touch
- [ ] Visual hierarchy: Projects emphasized vs. the other two
- [ ] Wire `Get in touch` as `mailto:sagidahari7@gmail.com`
- [ ] Stub `/projects` page (placeholder heading only)
- [ ] Stub `/about` page (placeholder heading only)

### PR 4 — Responsive + a11y polish

Make it look right at every width and pass accessibility basics.

- [ ] Mobile / tablet / desktop spacing + type scale
- [ ] Focus styles on all interactive elements
- [ ] Semantic landmarks (`<main>`, `<nav>`, heading levels)
- [ ] Color-contrast pass
- [ ] Respect `prefers-reduced-motion` (if any motion is added)

### PR 5 — Tests

RTL/Jest coverage for the landing page.

- [ ] Name renders
- [ ] Tagline renders with mono font class applied
- [ ] All three nav actions present with correct `href`s
- [ ] `Get in touch` is a `mailto:` link

## Notes

- This Next.js version has breaking changes from training-data Next.js. Per `AGENTS.md`, read `node_modules/next/dist/docs/` before writing code in each PR.
- Run `npm run check` (lint + typecheck + format + test) before opening any PR.
