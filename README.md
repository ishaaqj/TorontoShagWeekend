# Toronto Shag Weekend

A single-scroll event site for a collegiate shag weekend in Toronto — schedule,
teachers, pricing, and a "what is shag" explainer for the wider scene, built to
run for free and be edited by non-technical organizers once the CMS is wired in.

## Stack

- **Next.js 16 (App Router) + TypeScript** — pages/components
- **Tailwind CSS v4** — styling, theme tokens in `src/app/globals.css`
- **Fraunces / Work Sans / Space Mono** — self-hosted via `@fontsource*` packages
  (no runtime dependency on Google Fonts)
- Deploys for free on **Vercel**

No database. Registration/payment is handled by **Eventbrite** (linked from the
Tickets section) — see `src/lib/content.ts` for the link. Content (workshops,
teachers, pricing copy) currently lives as typed placeholder data in that same
file, shaped to match what a CMS (Sanity or Contentful) will eventually provide.

## Getting started

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Scripts

| Command              | What it does               |
| --------------------- | --------------------------- |
| `npm run dev`          | Local dev server             |
| `npm run build`         | Production build              |
| `npm run start`          | Serve the production build     |
| `npm run lint`            | ESLint                          |

## Project structure

```
src/
  app/
    layout.tsx       # fonts, metadata, root shell
    page.tsx          # assembles all sections in scroll order
    globals.css        # design tokens: colors, fonts, focus styles
  components/
    Nav.tsx             # sticky anchor nav
    Hero.tsx            # opening section
    Essentials.tsx      # what/who/where/when/how much
    WhatIsShag.tsx       # scene explainer
    Workshops.tsx        # schedule, driven by content.ts
    Teachers.tsx          # teacher bios
    Tickets.tsx            # pricing + Eventbrite CTA
    Location.tsx            # venue block
    Footer.tsx                # Facebook event / Instagram / contact
    BeatDivider.tsx            # signature section divider — a 6-count
                                 # beat marker referencing shag's actual
                                 # rhythmic structure
  lib/
    content.ts                   # all copy + data, typed for a future CMS swap
```

## Design notes

- **Palette**: ink-teal (`--ink`) and warm parchment (`--paper`) alternate as
  full-bleed section backgrounds, so scrolling the page has a visual rhythm —
  a nod to the back-and-forth of the dance itself. Brass gold and oxblood wine
  are used sparingly for accents and calls to action.
- **Type**: Fraunces (display) pairs a vintage, jazz-age character with Work
  Sans (body) for legibility, and Space Mono (data) for anything numeric —
  times, prices, counts — to read like a ticket stub.
- **BeatDivider**: shag is counted in 6s, with the kicks landing on beats 2
  and 4. The divider between sections is literally that count, rather than a
  decorative rule or numbered marker.

## Next steps

1. **Real content** — replace everything in `src/lib/content.ts` with the
   actual event name, dates, workshop schedule, teacher bios, pricing, and
   links (Eventbrite, Facebook event, Instagram).
2. **CMS** — connect Sanity or Contentful, move `workshops`, `teachers`,
   `essentials`, and `pricing` from static data to CMS queries so
   non-technical organizers can edit them without a deploy. Everything in
   `content.ts` is already typed to make this swap mechanical.
3. **Domain + deploy** — push to GitHub, import into Vercel, point your domain
   at it.
4. **"About the Scene" page** — a standalone page (outside the single-scroll
   event page) once this is live, per the plan to make this the long-term
   landing page for Toronto's shag scene.
5. **Images** — hero imagery, teacher photos, and a Switchfest-style video
   embed once assets are available.
