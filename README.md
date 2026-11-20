[![build & deployment](https://github.com/IshmamAbir/Portfolio/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/IshmamAbir/Portfolio/actions/workflows/pages/pages-build-deployment)

# Portfolio

Ishmam Abir Chowdhury's bilingual engineering portfolio, built with Vue 3, Vuetify, and Vite. The Engineering Blueprint design combines paper-and-ink surfaces, code typography, and architecture sketches to highlight backend work and professional experience.

## Features

- A responsive top navigation with a mobile drawer and links to Work, Experience, About, Blog, and Contact.
- English and Japanese content, with language and light/dark theme preferences saved when browser storage is available. The default theme is light; the initial language follows the browser.
- A static Go profile panel, three diagram-led Go case studies, an expandable full project list, and accessible project and role dialogs.
- An engineering changelog, a portrait in About, specification-style skills, a full-profile expansion, education summaries, certifications, and achievements.
- The latest three DEV articles, including loading, empty, error, and retry states.
- A responsive CV preview with a direct PDF link, plus email and LinkedIn contact actions.

The application uses Vue's Options API, Pinia Option Stores, and Vue I18n. Vuetify provides flat themed controls, dialogs, expansion panels, and icons. Layout and presentation styles live in `src/assets/css/site.css` and scoped component styles. DM Sans and JetBrains Mono are loaded through Google Fonts with system and Japanese fallbacks. Architecture sketches are lightweight responsive HTML/CSS, with no diagram library.

## Content and configuration

Portfolio content lives in `src/data/portfolio.data.js`. Services in `src/services/portfolio.service.js` create model instances before returning content to components. Localized model fields use `getLocalizedProperty()`, while interface labels live in `src/locales/en.json` and `src/locales/ja.json`.

`src/data/site.data.js` contains the DEV username and optional blog URL. Leave `blogUrl` empty to keep navigation linked to the on-page article section. Set it to the real blog subdomain when that site is ready. This repository does not create or deploy a separate blog.

Images and the CV are kept in `files/`, which is copied into the production build. `src/includes/assets.js` resolves local asset URLs against the configured deployment base.

The contact section uses email and LinkedIn links. It does not require a contact-form backend. Search indexing remains disabled by the existing `noindex` metadata until a separate release decision.

## Main components

| Area | Components |
| --- | --- |
| Layout and navigation | `App.vue`, `AppHeader.vue`, `AppFooter.vue`, `HomeView.vue` |
| Introduction and CV | `AppSlider.vue`, `PdfViewer.vue` |
| Work and experience | `AppProjects.vue`, `ProjectPopup.vue`, `AppJobExperience.vue`, `JobDescriptionPopup.vue` |
| About and education | `AppSkillsCertificationAchievements.vue`, `AppEducation.vue` |
| Writing and contact | `AppBlog.vue`, `AppContact.vue` |

## Local development

Use Node.js 22 and npm. Install the locked dependencies, then start Vite:

```sh
npm ci
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173/Portfolio/`. The deployment base is `/Portfolio/`, configured in `vite.config.js`.

## Scripts and verification

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Build into `dist/` and copy `files/`, including the CV. |
| `npm run preview` or `npm run serve` | Preview the production build locally. |
| `npm test` | Run Node tests for article modeling, preferences, mobile navigation focus, and failure handling. |
| `npm run lint` | Run ESLint and automatically fix supported issues. |
| `npx eslint . --ext .vue,.js,.jsx,.cjs,.mjs --ignore-path .gitignore` | Check lint without changing files. |
| `npm run deploy` | Build and publish `dist/` using the existing GitHub Pages configuration. |

For visual verification, check desktop and mobile layouts in both themes and languages, including keyboard navigation, expansion panels, dialogs, CV access, and article failure states. Respect reduced-motion preferences and verify that no horizontal scrolling appears on narrow screens.

The GitHub Actions workflow in `.github/workflows/deploy.yml` retains the existing build-and-deploy behavior on pushes to `main`. Local redesign work does not publish a deployment automatically.
