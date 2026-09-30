# ITZ FIZZ — Scroll-Driven Hero Animation

A high-performance, scroll-driven interactive landing page built with **React 19**, **Vite 6**, **Tailwind CSS 3**, and **GSAP 3 (ScrollTrigger)**. The experience features an original inline SVG performance car illustration and scrubbed multi-phase scroll timelines.

🌐 **Live URL**: [https://kishanjaiswal0.github.io/itzfizz-scroll-hero/](https://kishanjaiswal0.github.io/itzfizz-scroll-hero/)<br />
📦 **Repository**: [https://github.com/Kishanjaiswal0/itzfizz-scroll-hero](https://github.com/Kishanjaiswal0/itzfizz-scroll-hero)

---

## Architecture & Code Structure

The project follows a modular React component structure designed for readability, maintainability, and clean separation of concerns:

```
src/
├── components/
│   ├── CarArt.jsx          # Self-contained vector SVG car artwork (reused in Hero and Journey)
│   ├── Header.jsx          # Topbar navigation with accessible mobile menu toggle
│   ├── HeroSection.jsx     # Pinned hero viewport with headline, metrics, sun orb, and car
│   ├── JourneySection.jsx  # Diagonal highway (-8deg), animated passing car, and road copy
│   └── StorySection.jsx    # 3-card impact grid and branded footer with back-to-top anchor
├── style.css               # Categorized stylesheet (resets, layout, animations, mobile, a11y)
├── App.jsx                 # Central coordinator managing GSAP context and ScrollTrigger timelines
└── main.jsx                # Application entry point mounting React root
```

---

## Animation & Scroll Mechanics (GSAP + ScrollTrigger)

All animations are scoped inside a `gsap.context()` in `App.jsx` for proper lifecycle cleanup:

1. **Page Load Stagger**:
   - Initial entrance animation reveals the eyebrow tag, headline lines, metrics cards, and subtitle note via staggered `power3.out` / `power2.out` tweens.
2. **Pinned Hero Timeline (`drive`)**:
   - Trigger: `.hero` (`start: 'top top', end: '+=260%', pin: true, scrub: 0.7`).
   - The hero viewport remains pinned while scroll progress drives:
     - The hero car accelerating toward the left across the screen (`x: -window.innerWidth * 1.32`, with responsive mobile scaling).
     - The radiant sun orb descending toward the horizon (`y: 260, scale: 0.58`).
     - Hero headline and metrics fading out gracefully.
3. **Journey Diagonal Highway Timeline (`roadDrive`)**:
   - Trigger: `.journey` (`start: 'top 82%', end: 'bottom 18%', scrub: 0.55`).
   - As the Journey section scrolls into view, a passing car transitions onto the diagonal highway (`rotate(-8deg)`):
     - Enters from offscreen left with an opacity fade (`0 -> 1`).
     - Speeds across the road to the right (`clientWidth + 40`).
     - Fades out cleanly before the section ends.
4. **Parallax Road Center Line**:
   - Continuous dashed line translation (`xPercent: -35`) scrubbed across the scroll length of the Journey section.
5. **Story Cards Stagger Reveal**:
   - Trigger: `.story` (`start: 'top 72%'`).
   - Cards slide up into place with staggered opacity.
6. **Bi-Directional Reverse Scrubbing**:
   - All timelines use numerical `scrub` values rather than one-way triggers, ensuring reverse scrolling reverses each timeline smoothly.

---

## Technology Stack

* **Build Tool**: [Vite 6](https://vite.dev/) (fast HMR, optimized production rollup bundle)
* **UI Framework**: [React 19](https://react.dev/)
* **Animation**: [GSAP 3](https://greensock.com/gsap/) with [ScrollTrigger](https://greensock.com/scrolltrigger/)
* **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) & custom CSS with clamp-based fluid typography
* **Fonts**: [DM Mono](https://fonts.google.com/specimen/DM+Mono) & [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts

---

## Getting Started Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deployment

Automated deployment is configured with GitHub Actions (`.github/workflows/deploy.yml`):
* Triggers automatically on push to the `main` branch.
* Runs `npm ci` and `npm run build`.
* Deploys the built `dist/` directory to GitHub Pages with relative base path `/itzfizz-scroll-hero/`.

---

## Accessibility & Responsiveness

* **Responsive Breakpoints**: Fluid clamp scaling (`clamp()`) for typography and metrics; mobile-optimized viewports (`<= 700px`) with hamburger navigation toggle.
* **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by setting native `scroll-behavior: auto`.
* **Zero External Graphic Dependencies**: The performance car is an inline SVG with embedded filters and gradients, eliminating image loading latency and layout shifts.
