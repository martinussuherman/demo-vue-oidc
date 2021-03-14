# Demo Vue App with OIDC Authentication

[![CodeQL](https://github.com/martinussuherman/demo-vue-oidc/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/martinussuherman/demo-vue-oidc/actions/workflows/codeql-analysis.yml) [![Publish to Github Pages](https://github.com/martinussuherman/demo-vue-oidc/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/martinussuherman/demo-vue-oidc/actions/workflows/gh-pages.yml)

---

Vue 2 + Vuex + Typescript + Vuex-oidc

Feature:
- Runtime (asynchronous) OIDC configuration loading from json file.
- Vuex getter and action configuration with Typescript.
- Vuex-oidc route configuration for public path and callback path using route meta.
- Deployment using 404.html to make Vue Router work on Github Pages.
- Github pages manual deployment with workflow_dispatch trigger.
- (Since v.1.2.0) Use vuetify for UI.
- (Since v.1.2.0) Use vite for dev server.

## Project setup
```
pnpm install
```

### Compiles and hot-reloads for development
```
pnpm run serve
```

### Compiles and minifies for production
```
pnpm run build
```

### Lints and fixes files
```
pnpm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
