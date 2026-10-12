# Han Solo — Galaxy Ops (fictional Cloud TAM portfolio)

Unofficial, alternate-universe fan demo. All employment, customer engagements, technology outcomes, and application projects are invented; they are not film canon, real endorsements, or live cloud services.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`). Build with `npm run build`; preview with `npm run preview`.

## Content

- `src/data/portfolio.js`: fictional profile, four employers, linked customer engagements, four engineering projects, technology mappings, and leadership statements.
- `src/App.jsx`: hero, career timeline, linked customer cards, interactive project selector, mapping, architecture, leadership.
- `src/App.css`: application styles.

Customer engagements use `employerId` to associate each account/incident to an employer. Projects are independent personal learning and architecture prototypes, with future service integrations called out as planned.

## Architecture

React + Vite is a static application with no backend/database. All project-selection behavior runs locally in the browser. Cloud Run, Gemini, FastAPI, and Firestore appear in *fictional future architecture examples*, not as integrations implemented in this repository.

## Copyright / public use

This is an unofficial fan concept using characters and trademarks owned by their respective rights holders. A commercial or broadly distributed template should replace protected characters, brands, and universes with original equivalents.
