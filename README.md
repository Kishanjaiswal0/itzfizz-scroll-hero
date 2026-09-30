# ITZ FIZZ — Scroll-driven hero

A responsive React + Vite landing page with GSAP intro reveals and scroll-scrubbed hero motion. The car is an original inline SVG illustration, so no external image asset is required.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Production build: `npm run build`.

## Deploy

For GitHub Pages, push this repository and enable Pages with GitHub Actions (Vite build) or deploy the `dist/` directory. For Vercel/Netlify, import the repository; build command `npm run build`, output directory `dist`.

## Notes
- GSAP ScrollTrigger ties car position, scale, rotation, sun and road movement to scroll progress.
- Responsive navigation toggle and anchor links are functional.
- Honors reduced-motion preference for native smooth scrolling; GSAP motion remains scroll-controlled.
