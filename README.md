# Manish Kumar — AI Engineer

A personal, editorial portfolio built with React and Vite. Warm paper tones, oversized typography, a real portrait, and four original project illustrations introduce verified work from the `Mani1454` account.

Live: https://mani1454.github.io/portfolio/

## Run locally

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite builds the static site into `dist/`. The existing Vercel and Docker deployment configurations remain available.

For GitHub Pages, run `npm run build:pages`. This selects `/portfolio/` as the asset base and the GitHub Pages URL in the page metadata. Publish the contents of `dist/`, together with a `.nojekyll` file, to the `gh-pages` branch. Source changes on `main` require a fresh build and deployment. Preview this build with `npm run preview -- --mode pages` and open the printed `/portfolio/` URL.

## Update content

Edit `src/data/portfolio.js` for projects, case studies, experience, contact details, and skills. The display order is defined in `src/App.jsx`. All project links lead to the actual source repositories; three projects also link to their separately hosted demos.

The introduction links to the downloadable résumé in `public/assets/Manish_Kumar_Resume.pdf`.

## Design and interactions

The layout takes inspiration from [Dennis Snellenberg](https://dennissnellenberg.com/) and [Rauno Freiberg](https://rauno.me/): generous spacing, clear typography, individual project presentation, and restrained motion. The implementation and project illustrations are original. The illustrations represent each project's subject; they are not live telemetry or application screenshots.

Lenis smooths desktop wheel scrolling and anchor navigation while preserving native touch scrolling. Reduced-motion preferences disable smoothing and reveal animations. Project hover effects use CSS transforms; there is no WebGL renderer or continuously animating decorative scene.

The interface includes native modal case studies, focus containment and restoration, expandable capabilities, mobile navigation, and email copying. Font files are self-hosted with their OFL licenses to avoid external font requests.

## Verification

Production builds are checked in Chromium for responsive layouts, project case studies, modal scrolling, focus behavior, navigation, accordions, contact links and clipboard copying, reduced motion, and application errors. Desktop, mobile, and open-dialog views are scanned with axe for WCAG 2 A/AA and WCAG 2.1 AA violations. These automated checks supplement visual inspection; they are not a full accessibility audit.
