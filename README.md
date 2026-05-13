# European Era — static website

Modern, lightweight marketing site built with **HTML5**, **CSS3**, and **vanilla JavaScript**.  
**Vite** is used only as a dev server and production bundler (optional tooling — not a UI framework).

## Run locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173/pages/home.html** (or use the root `index.html` redirect).

Styles are loaded via `js/main.js` (CSS `import`s) so Vite always injects them — you don’t need separate `<link>` tags in each page.

## Build static files

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Project layout

- `assets/` — images, icons, fonts  
- `css/` — global, components, pages, responsive  
- `js/` — main entry, router (active nav), animations, optional modules  
- `pages/` — HTML pages  
- `public/components/` — HTML partials served as static files (`navbar.html`, `footer.html`, `cards.html`) so `fetch()` works in dev and production builds

## Notes

- Navbar/footer are fetched via `fetch()`. Use `npm run dev` / `npm run preview` or any static server; opening `file://` may block fetches.
- Contact form is **client-side demo** validation only — connect to your backend or form service when ready.
