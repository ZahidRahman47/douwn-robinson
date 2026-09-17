# Dawson Robinson — Campaign Website (Redesign)

A complete visual redesign of the campaign website, built with **Next.js 14 (App Router)**,
**TypeScript**, **Tailwind CSS**, and **Framer Motion**. Same information architecture as the
original site — new design system, typography, motion, and componentry.

## Getting started

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx       # Root layout, fonts (Fraunces + Inter), metadata
  page.tsx         # Assembles all sections
  globals.css      # Tailwind base + a couple of small utilities
components/
  layout/
    Header.tsx     # Sticky nav, utility bar, mobile drawer
    Footer.tsx     # Footer columns, newsletter, disclaimer
  sections/
    Hero.tsx       # Hero with staggered headline reveal + portrait
    About.tsx      # Bio, pull quote, video block, animated stat counters
    Issues.tsx     # Accordion-style issue list
    Donate.tsx     # Donation module (frequency toggle, amount pills)
    News.tsx       # News/update card grid
  ui/
    Button.tsx     # Primary/secondary/ghost button variants
    Eyebrow.tsx     # Small gold "eyebrow" label
    Reveal.tsx      # Scroll-reveal + staggered-children motion helpers
    CountUp.tsx     # Animated number count-up
lib/
  data.ts          # ALL copy + content lives here — edit this file to change text
public/images/     # Drop real photos here (see below)
```

## Editing copy

Everything user-facing (headline, bio, issues, donation copy, news items, footer links) lives in
**`lib/data.ts`** as typed objects. Change the strings there — no need to touch components.

## Swapping in real images

The design ships with SVG placeholder art so it builds and runs out of the box. To use real
photos:

1. Drop your files into `public/images/`, e.g.:
   - `hero-portrait.jpg` — large portrait used in the hero
   - `about-portrait.jpg` — (optional) secondary portrait
   - `about-video-poster.jpg` — poster frame for the bio video block
2. Update the corresponding path in `lib/data.ts` (`hero.portrait`, `about.video.poster`, etc.)
   to point at your new filename.
3. Recommended sizes: hero portrait ~1600×2000px (4:5), video poster ~1920×1080px (16:9).

To wire up a real video instead of the placeholder play button, edit
`components/sections/About.tsx` and replace the placeholder `<div>` with a `<video>` tag or an
embedded player (YouTube/Vimeo iframe).

## Design system

- **Colors** — defined in `tailwind.config.ts` under `theme.extend.colors` (`navy`, `gold`,
  `cream`, `maroon`). Change hex values there to retheme the whole site.
- **Fonts** — `Fraunces` (display/serif headlines) + `Inter` (body/UI), loaded via `next/font` in
  `app/layout.tsx`.
- **Motion** — Framer Motion powers the hero reveal, scroll-triggered fades (`Reveal`,
  `RevealGroup`), and the animated stat counters (`CountUp`). All respect
  `prefers-reduced-motion` via the global CSS override in `globals.css`.

## Notes

- No CMS — content is just TypeScript, easy to hand off to a non-developer with basic guidance.
- `node_modules` and `.next` are excluded from this deliverable; run `npm i` first.
- Fully responsive: mobile nav becomes a full-screen slide-in drawer under the `lg` breakpoint.
