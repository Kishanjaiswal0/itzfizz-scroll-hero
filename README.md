# Welcome ITZFIZZ: Scroll-Driven Hero

Recreation of the [car scroll animation](https://paraschaturvedi.github.io/car-scroll-animation) hero.

**Stack:** HTML, CSS, JavaScript, Next.js (static export), React, Tailwind CSS, GSAP + ScrollTrigger.

## How it works
- **Intro (time-based, once):** letters stagger in, car fades down into place, stat cards reveal one by one and count up.
- **Scroll (progress-based):** the hero is pinned for 250% of the viewport height. A single GSAP timeline bound to scroll (`scrub: 1`) drives the car down and scales it up, spreads the headline letters, and fades the stats out. `scrub: 1` adds 1s of smoothing so the motion eases toward the scroll position.
- **Performance:** only `transform` and `opacity` are animated, no layout reads per scroll event (ScrollTrigger batches them), `will-change` hints, and `prefers-reduced-motion` disables the scroll animation.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploy (GitHub Pages)
1. Push to a GitHub repo on the `main` branch.
2. Repo Settings > Pages > Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes `out/`.
Live URL: `https://<username>.github.io/<repo-name>/`
