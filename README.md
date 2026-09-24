# Cyber-Dev

> _Interactive single-page portfolio for **Siphosakhe Mathews Msimango** — Full-Stack Developer · Aspiring DevSecOps & Red Team Pentester · Peer Tutor_

A hybrid between a clean modern software portfolio and a terminal-inspired cybersecurity dashboard. Deep slate/black surfaces, terminal-green + neon-blue accents, **Font Awesome** icons across every skill, project, and contact link. Built with **Angular 20 (standalone components + signals) + SCSS + CSS Grid/Flexbox**.

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

# 3. Build for production (outputs to dist/cyber-dev/browser)
npm run build
# or: npx ng build
```

The dev server opens with live-reload at `http://localhost:4200`. Press `q` in the terminal to stop it.

### Hosting the production build

```bash
npm run build
npx serve -s dist/cyber-dev/browser   # or copy the folder to any static host / GitHub Pages / Netlify
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
    │   └── content.ts         # ALL portfolio data + FontAwesome icon classes (edit content here)
    ├── directives/
    │   ├── typewriter.directive.ts   # hero typing effect
    │   └── reveal.directive.ts       # intersection-observer scroll reveal
    ├── pages/
    │   └── home/home.component.ts    # lazy-loaded page shell
    └── components/
        ├── navbar/            # fixed nav, scroll-spy, mobile menu
        ├── hero/              # typing roles + glitch name + "Initialize Connection" CTA
        ├── about/             # bio + terminal-style panel
        ├── skills/            # categorized icon dashboard + INTERACTIVE terminal
        ├── projects/          # clickable cards (real URLs) + decrypt/glitch hover
        ├── certifications/    # verified badge cards
        ├── contact/           # "secure transmission" form + icon links (email/LinkedIn/GitHub)
        ├── footer/            # social icon links
        ├── section-header/    # reusable section heading
        └── terminal/          # interactive mock shell widget
```

---

## Editing content

All copy lives in **`src/app/core/content.ts`**:

- hero title → `HERO_ROLES`
- about copy → `ABOUT`
- skills → `SKILLS` (each item = `{ label, icon }` — icons are Font Awesome class strings, e.g. `fa-brands fa-angular`)
- projects → `PROJECTS` — set `url` (opened via the card link), `icon`, and `kind` (`'game'` gets the 8-bit aesthetic, `wip: true` shows a WIP badge)
- certifications → `CERTIFICATIONS`
- contact → `CONTACT` (email, LinkedIn, GitHub, message)

Colors, fonts and spacing tokens live at the top of **`src/styles.scss`** (`--green`, `--cyan`, `--purple`, ...). Font Awesome ships via `@fortawesome/fontawesome-free` (wired into `angular.json` styles).

---

## Interactive bits

1. **Typing effect** in the hero (custom `TypewriterDirective`).
2. **Interactive terminal** in the Skills section — type `help`, `skills`, `projects`, `matrix`, `sudo`, `clear`, ...
3. **Decrypt hover** on project cards — titles scramble then settle (JS-driven); cards link out to real project URLs.
4. **Scroll-spy navbar** + smooth scrolling + scroll-reveal animations.
5. **"Initialize Connection"** button glides to the contact form.
6. The contact form runs an animated "secure transmission" sequence before opening a pre-filled mail client; LinkedIn & GitHub open in a new tab.

---

## Stack

Angular 20 (standalone, signals, lazy routes) · TypeScript · SCSS · Font Awesome 7 · CSS Grid/Flexbox — responsive down to small phones.