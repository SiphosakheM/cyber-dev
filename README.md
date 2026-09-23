# Cyber-Dev

> _Interactive single-page portfolio for **Siphosakhe Mathews Msimango** — Software Developer · Cybersecurity Enthusiast · Peer Tutor_

A hybrid between a clean modern software portfolio and a terminal-inspired cybersecurity dashboard. Dark slate/black surfaces, terminal-green + neon-blue accents, built with **Angular (standalone components + signals)**.

---

## Requirements

| Tool  | Version                                   |
| ----- | ----------------------------------------- |
| Node  | `^20.19.0` or `^22.12.0` or `^24.0.0`      |
| npm   | 10+ (ships with Node)                     |
| Angular CLI | `@angular/cli` `^20` (installed via npm) |

Check your Node version:

```bash
node -v
```

---

## Quick start (Angular CLI)

```bash
# 1. Install dependencies (installs the Angular CLI + framework locally)
npm install

# 2. Start the dev server  ->  http://localhost:4200
npm start
# or: npx ng serve

# 3. Build for production (outputs to dist/cyber-dev)
npm run build
# or: npx ng build
```

The dev server opens with live-reload at `http://localhost:4200`. Press `q` in the terminal to stop it.

### Hosting the production build

```bash
npm run build
cd dist/cyber-dev/browser
npx serve -s .        # or copy the folder to any static host / Firebase / Netlify
```

---

## Project structure

```
src/
├── index.html                 # SPA shell, fonts, meta
├── main.ts                    # bootstrapApplication
├── styles.scss                # design tokens + global utilities
├── public/favicon.svg
└── app/
    ├── app.config.ts          # ApplicationConfig (router provider)
    ├── app.routes.ts          # lazy route -> HomeComponent
    ├── app.component.*        # root shell (router-outlet + bg grid)
    ├── core/
    │   └── content.ts         # all portfolio data (edit content here)
    ├── directives/
    │   ├── typewriter.directive.ts   # hero typing effect
    │   └── reveal.directive.ts       # intersection-observer scroll reveal
    ├── pages/
    │   └── home/home.component.ts    # lazy-loaded page shell
    └── components/
        ├── navbar/            # fixed nav, scroll-spy, mobile menu
        ├── hero/              # typing roles + glitch name + CTA
        ├── about/             # bio + terminal-style panel
        ├── skills/            # categorized dashboard + INTERACTIVE terminal
        ├── projects/          # cards with decrypt/glitch hover
        ├── certifications/    # verified badge cards
        ├── contact/           # "secure transmission" form
        ├── footer/
        ├── section-header/    # reusable section heading
        └── terminal/          # interactive mock shell widget
```

---

## Editing content

All copy lives in **`src/app/core/content.ts`**:

- name / roles → `HERO_ROLES`
- about copy → `ABOUT`
- skills → `SKILLS`
- projects → `PROJECTS` (set `kind: 'game'` on any card to get the 8-bit aesthetic)
- certifications → `CERTIFICATIONS`
- contact details → `CONTACT` (replace the GitHub placeholder)

Colors, fonts and spacing tokens live at the top of **`src/styles.scss`** (`--green`, `--cyan`, `--purple`, ...).

---

## Interactive bits

1. **Typing effect** in the hero (custom `TypewriterDirective`).
2. **Interactive terminal** in the Skills section — type `help`, `skills`, `projects`, `matrix`, `sudo`, `clear`, ...
3. **Decrypt hover** on project cards — the title scrambles then settles (JS-driven).
4. **Scroll-spy navbar** + smooth scrolling + scroll-reveal animations.
5. **"Initialize Connection"** button glides to the contact form.
6. The contact form runs an animated "secure transmission" sequence before opening a pre-filled mail client.

---

## Stack

Angular 20 (standalone, signals, lazy routes · TypeScript · SCSS · CSS Grid/Flexbox) — no external UI libraries.