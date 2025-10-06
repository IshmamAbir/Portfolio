[![build & deployment](https://github.com/IshmamAbir/Portfolio/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/IshmamAbir/Portfolio/actions/workflows/pages/pages-build-deployment)

# Portfolio

This is a personal portfolio website built with Vue 3 and Vite, designed to showcase projects, skills, and professional experience.

---

## Description

This portfolio is a single-page application built using modern web technologies. It is designed to be a comprehensive showcase of my work, including a list of projects I have worked on, my educational background, job experience, and skills. The portfolio is also internationalized, with support for both English and Japanese.

---

## Features

### Internationalization

The portfolio supports multiple languages to cater to a wider audience. The language can be switched between **English** and **Japanese**. This is implemented using the `vue-i18n` library, a popular internationalization plugin for Vue.js. All the text content is stored in separate locale files (`en.json` and `ja.json`), making it easy to add more languages in the future.

### Bilingual Content

The portfolio's data is structured to support both English and Japanese languages seamlessly. In the `src/data/portfolio.data.js` file, you will find that the data for sections like education, certifications, projects, and user information is provided in both English and Japanese, using `_en` and `_ja` suffixes for the respective properties. For example, a project's description is available as `description_en` for English and `description_ja` for Japanese. This approach allows for easy maintenance and scalability of the multilingual content.

### Database Integration

The portfolio data is currently managed in `src/data/portfolio.data.js`. This modular structure is designed for a seamless transition to a database backend. To switch to a database, you would replace the local data fetching in `portfolio.service.js` with API calls to your database endpoints. The existing data models are structured to be easily adaptable to any database schema.

## ![Portfolio UI](/files/screenshot.png)

> **⚠ Note ⚠** : Currently it supports both English & Japanese!

## Project Structure

```
├── public/
│ ├── favicon.ico
│ └── js/
├── src/
│ ├── assets/
│ │ ├── css/
│ │ ├── fonts/
│ │ ├── images/
│ │ └── scss/
│ ├── components/
│ │ ├── AppBlog.vue
│ │ ├── AppContact.vue
│ │ ├── AppEducation.vue
│ │ ├── AppFooter.vue
│ │ ├── AppHeader.vue
│ │ ├── AppJobExperience.vue
│ │ ├── AppPortfolio.vue
│ │ ├── AppProjects.vue
│ │ ├── AppSkillsCertificationAchievements.vue
│ │ ├── AppSlider.vue
│ │ ├── JobDescriptionPopup.vue
│ │ └── ProjectPopup.vue
│ ├── data/
│ │ └── portfolio.data.js
│ ├── enums/
│ │ └── project-type.js
│ ├── includes/
│ │ └── i18n.js
│ ├── locales/
│ │ ├── en.json
│ │ └── ja.json
│ ├── model/
│ │ ├── Achievement.model.js
│ │ ├── BaseModel.js
│ │ ├── Certification.model.js
│ │ ├── DatedModel.js
│ │ ├── Education.model.js
│ │ ├── Experience.model.js
│ │ ├── Project.model.js
│ │ └── User.model.js
│ ├── plugins/
│ │ ├── vuetify.js
│ │ └── webfontloader.js
│ ├── router/
│ │ └── index.js
│ ├── services/
│ │ └── portfolio.service.js
│ ├── stores/
│ │ └── user.store.js
│ ├── views/
│ │ └── HomeView.vue
│ ├── App.vue
│ └── main.js
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## Project Setup

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/ishmamabir/portfolio.git](https://github.com/ishmamabir/portfolio.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd portfolio
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in the development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles Vue in production mode and optimizes the build for the best performance.

### `npm run serve` or `npm run preview`

Serves the production build locally. This is a good way to check if the production build is working correctly before deploying.

### `npm run lint`

Lints and fixes files.

### `npm run deploy`

Deploys the application to GitHub Pages. This script runs `npm run build` first and then deploys the `dist` directory.

---

## Key Dependencies

This project uses the following key libraries:

- **Vue.js:** A progressive framework for building user interfaces.
- **Vite:** A fast build tool that provides a quicker and leaner development experience for modern web projects.
- **Vue Router:** The official router for Vue.js.
- **Pinia:** The official state management library for Vue.js.
- **Vuetify:** A Vue UI Library with beautifully handcrafted Material Components.
- **Axios:** A promise-based HTTP client for the browser and node.js.
- **vue-i18n:** Internationalization plugin for Vue.js.
- **ESLint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

For a full list of dependencies, see the `package.json` file.

---

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

---

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
