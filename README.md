# Manish Kumar — AI Engineer

A cinematic portfolio built with React, Vite, and Three.js. The opening scene is an original, interactive copper sculpture. The project case studies describe verified work from the `Mani1454` account.

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

For GitHub Pages, run `npm run build:pages`. This selects `/portfolio/` as the asset base and the GitHub Pages URL in the page metadata. The published `gh-pages` branch contains this build with a `.nojekyll` file.

## Update content

Edit `src/data/portfolio.js` for projects, case studies, experience, contact details, and skills. Project links open the actual source repositories. Three projects also include links to their existing demos; demo availability depends on their hosting services.

The résumé links and public PDF have been removed. The original LaTeX source remains outside the public directory for a future update.

## Design and accessibility

The visual direction draws on [Lusion](https://lusion.co/) and [Bruno Simon](https://bruno-simon.com/), with original graphics and implementation. The interface includes responsive layouts, native accessible case-study dialogs, keyboard navigation, project filters, and email copying.

The 3D renderer loads separately from the main application, caps pixel density, and stops rendering while offscreen or the tab is hidden. Visitors can pause the animation. Reduced-motion preferences pause it by default, and a CSS illustration remains available if WebGL cannot initialize.

The portfolio is a static presentation. Its project diagrams are illustrations, and its demo links open the separate project applications.
