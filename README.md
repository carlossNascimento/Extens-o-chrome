<<<<<<< HEAD
# Hello World PWA (converted from Chrome Extension)

This repository contains a small Progressive Web App (PWA) derived from a simple Chrome extension, plus a minimal backend API. It is wired to run with Docker Compose and has basic tests and a CI workflow.

Structure

- apps/web/public: static PWA site (index.html, manifest and service worker)
- apps/api: Node/Express API
- docker-compose.yml: runs web (nginx) + api (node)
- tests/e2e: Playwright E2E tests

Quick start (PowerShell)

1. Build and run with Docker Compose:

```powershell
docker-compose up -d --build
```

# Hello World PWA (converted from Chrome Extension)

This repository contains a small Progressive Web App (PWA) derived from a simple Chrome extension, plus a minimal backend API. It is wired to run with Docker Compose and has basic tests and a CI workflow.

Structure

- apps/web/public: static PWA site (index.html, manifest and service worker)
- apps/api: Node/Express API
- docker-compose.yml: runs web (nginx) + api (node)
- tests/e2e: Playwright E2E tests

Quick start (PowerShell)

1. Build and run with Docker Compose:

```powershell
docker-compose up -d --build
```

2. Open the PWA in your browser:

http://localhost:8080

The web server proxies `/api` to the API service, so the PWA can call `/api/hello`.

Run tests

- API unit tests:

```powershell
cd apps/api
npm ci
npm test
```

- E2E (Playwright):

```powershell
npm ci
npx playwright install --with-deps
npx playwright test tests/e2e --config=tests/e2e/playwright.config.js
```

CI

There is a GitHub Actions workflow in `.github/workflows/ci.yml` that builds the services, runs API unit tests and runs Playwright E2E tests (best-effort).

Notes

- Icons from the original extension (icon16.png, icon32.png, icon48.png, icon128.png) are referenced by the PWA manifest and copied into the web image during build.
- For publishing the PWA to GitHub Pages you can copy the contents of `apps/web/public` into `gh-pages` branch or configure your build to produce a `dist/` folder that GitHub Pages serves.

---

Extensão do Chrome (origem)

Instalação: Baixe o arquivo e abra o Chrome, após isso digite `chrome://extensions`, ative o modo desenvolvedor e carregue a extensão sem compactação.

Funções: Uma mensagem e um botão, que ao ser pressionado exibe um popup confirmando que o botão funciona.

License

MIT License

Copyright (c) 2025 carlossNascimento

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
