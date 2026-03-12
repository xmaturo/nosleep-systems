# CLAUDE.md — Full Repository Context for AI Agents

## Project Identity

**Name:** NoSleep Systems Landing Page
**Package name:** `nosleep-systems-landing`
**Version:** 1.0.0
**Purpose:** Marketing / lead-generation website for "NoSleep Systems", a business that sells done-for-you automation systems (scheduling, follow-up sequences, lead qualification, dashboards) to service businesses, consultants, and closers.
**Contact email:** team@nosleepsystems.com

---

## Tech Stack

| Layer        | Technology                     | Version   |
| ------------ | ------------------------------ | --------- |
| Framework    | Next.js (Pages Router)         | 13.4.12   |
| UI Library   | React                          | 18.2.0    |
| Styling      | Tailwind CSS                   | ^3.3.2    |
| PostCSS      | postcss + autoprefixer         | ^8.4.24   |
| Icons        | @heroicons/react (solid)       | ^2.2.0    |
| Deployment   | Vercel (`npx vercel`)          | —         |

**No TypeScript. No testing framework. No state management library. No API routes. No database.**

---

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start Next.js dev server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npx vercel         # Deploy to Vercel
```

---

## File Structure (complete)

```
.
├── CLAUDE.md                  # This file — repo context for AI
├── README.md                  # Minimal README (install + deploy)
├── package.json               # Dependencies & scripts
├── package-lock.json          # Lockfile
├── .gitignore                 # Ignores: node_modules, .next, .env, *.log
├── tailwind.config.js         # Tailwind theme config (custom colors, fonts)
├── postcss.config.js          # PostCSS plugins (tailwindcss, autoprefixer)
├── styles/
│   └── globals.css            # Tailwind directives + body base styles
├── pages/
│   ├── _app.js                # Next.js App wrapper (imports globals.css)
│   ├── index.js               # Homepage — assembles all landing page sections
│   ├── about.js               # About page — standalone marketing page
│   ├── install.js             # Lead capture form page (posts to Zapier)
│   └── myproject.js           # Duplicate of index.js (identical content)
└── components/
    ├── Navbar.jsx             # Fixed top navbar with mobile hamburger menu
    ├── Hero.jsx               # Hero section with headline + CTA + social proof
    ├── HowItWorks.jsx         # 3-step process section
    ├── OfferStack.jsx         # Feature grid with 5 service descriptions
    ├── VisualMockup.jsx       # Fake dashboard UI mockup ("NoSleep OS")
    ├── Results.jsx            # Stats + testimonials section
    ├── cta.jsx                # Bottom call-to-action section (note: lowercase filename)
    └── Footer.jsx             # Footer with logo, tagline, and links
```

---

## Pages — Detailed Breakdown

### `pages/_app.js`
- Standard Next.js custom App component
- Imports `styles/globals.css` (only global stylesheet)
- No providers, no layout wrappers, no context

### `pages/index.js` (Homepage `/`)
- Composes all 7 landing page sections in order:
  1. `Navbar` — fixed top nav
  2. `Hero` — headline, CTA button, social proof
  3. `HowItWorks` — 3-step process
  4. `OfferStack` — 5 feature cards
  5. `VisualMockup` — dashboard mockup
  6. `Results` — stats + testimonials
  7. `CTA` — final call-to-action
  8. `Footer` — footer
- No `<Head>` tag (no custom meta/title on homepage)

### `pages/about.js` (`/about`)
- Standalone page with its own `<Head>` (title: "About | NoSleep Systems")
- Uses `Navbar` component at top
- Contains: header block, 2 feature cards ("What We Deploy" / "Why We're Different"), quote block, CTA link to `/install`
- No footer component included

### `pages/install.js` (`/install`)
- Lead capture / intake form page
- Has `<Head>` (title: "Install | NoSleep Systems")
- Uses `Navbar` at top
- **Form submission:** `POST` to `https://hooks.zapier.com/hooks/catch/23501833/ub5wicj/`
- Form fields:
  - `name` (text, required)
  - `email` (email, required)
  - `website` (url, required)
  - `companySizeText` (hidden — derived from range slider, labels: "1–5 employees" to "50+ employees")
  - `revenueText` (hidden — derived from range slider, labels: "Less than $100k" to "Over $1M")
  - `budgetText` (hidden — derived from range slider, labels: "Less than $1,000" to "$10,000+")
- Uses floating label pattern with Tailwind peer classes
- Range sliders use React state (useState) with values 1–4 mapped to label arrays
- No client-side validation beyond HTML `required` attributes
- No footer component included

### `pages/myproject.js` (`/myproject`)
- **Exact duplicate of `pages/index.js`** — same imports, same component composition, same export
- Likely a leftover/test page; could be removed without impact

---

## Components — Detailed Breakdown

### `Navbar.jsx`
- **Position:** Fixed top (`fixed top-0 left-0 w-full z-50`)
- **Styling:** Backdrop blur, semi-transparent black bg, bottom border
- **Logo:** "NoSleep" (accent color) + "Systems" (white) with animated pulse dot
- **Desktop nav links:** Get Started (`#top`), Offer Stack (`#offer-stack`), Live Demo (`#visual-mockup`), About (`/about`)
- **Mobile:** Hamburger menu (`☰` character) toggles dropdown
- **Navigation logic:** `handleNav(hash)` function:
  - If on homepage (`/`): smooth-scrolls to hash anchor
  - If on another page: navigates to `/{hash}` via `router.push`
- Uses `next/link` for About link, `next/router` for programmatic navigation
- State: `isOpen` (boolean) for mobile menu toggle

### `Hero.jsx`
- Full-viewport hero section (`min-h-screen`)
- Background: references `/images/grid-overlay.png` (not present in repo — would 404)
- Decorative: cyan glow orb (absolute positioned, blurred)
- Headline: "Transform Your Business Into a 24/7 Growth Machine."
- CTA button links to `/install` with `target="_blank"`
- Social proof box: "Trusted by elite closers..." with bullet list
- Hardcoded stat: "Current Systems Deployed: 49"

### `HowItWorks.jsx`
- Section id: `how-it-works`
- 3-step card grid:
  1. "Lock In Your Offer" — audit funnel, extract bottlenecks
  2. "Deploy Your System" — install automation engine
  3. "Own the Market" — system runs in background
- Cards use hover scale + shadow transitions

### `OfferStack.jsx`
- Section id: `offer-stack`
- Uses `CheckCircleIcon` from `@heroicons/react/24/solid`
- 5 feature cards in 2-column grid:
  1. 24/7 Scheduler System
  2. Lead Qualification Engine
  3. Smart Follow-Up Sequences
  4. Custom Sales Intelligence
  5. Re-Engagement Protocols
- Footer note: "Estimated internal value: $20,000+"

### `VisualMockup.jsx`
- Section id: `visual-mockup`
- Simulated dashboard UI ("NoSleep OS") — all hardcoded/static, no real data
- Layout: sidebar (5 nav items) + main panel (4 KPI cards + automation flow) + live log feed
- KPI values: Leads 87, Calls Booked 39, AI Response Time 2m 13s, Agent Uptime 99.9%
- Automation flow: Lead Captured → AI Qualifies → Follow-Up Sent → Call Booked
- Log entries are hardcoded static text

### `Results.jsx`
- 3 stat cards: 49+ Systems Deployed, 3,200+ Hours Saved, 92% User Satisfaction
- 3 testimonial cards with names, roles, and cities (Carlos T. Miami, Anya D. Toronto, Marcus W. Dallas)

### `cta.jsx` (lowercase filename)
- Bottom call-to-action section
- Imports `next/link`, links to `/install`
- Button text: "Install My System →"
- **Note:** Filename is lowercase `cta.jsx` but imported as `CTA` in pages — this works on case-insensitive filesystems (macOS/Windows) but could break on case-sensitive Linux deployments

### `Footer.jsx`
- Logo + tagline: "AI-powered automation stacks. Built for growth. Running 24/7."
- Links: Privacy (`#`), Terms (`#`), Contact (`mailto:team@nosleepsystems.com`)
- Privacy and Terms links are placeholder `#` — not implemented

---

## Design System / Theme

### Colors (defined in `tailwind.config.js`)
| Token        | Hex       | Usage                                    |
| ------------ | --------- | ---------------------------------------- |
| `background` | `#0a0a0a` | Page background (near-black)             |
| `slate`      | `#1e1e2f` | Card backgrounds, dashboard panels       |
| `accent`     | `#00f9ff` | Primary brand color (cyan), CTAs, highlights |
| `white`      | `#f9f9f9` | Text color (off-white)                   |

Additional hardcoded colors used throughout components:
- `#0b1321` — dark blue-black gradient endpoint
- `#0F0F0F` — slightly lighter black for sections
- `#121212` — dashboard main bg
- `#181818` — testimonial card bg, log feed bg
- `#1a1a1a` — stat card bg
- `#1c1c1c` — dashboard header bg

### Typography
- Font family: `"Segoe UI", sans-serif` (set in both Tailwind config and globals.css)
- Heavy use of `font-extrabold` for headings
- Body text typically `text-sm` or `text-base` in gray shades

### Visual Effects
- `backdrop-blur-md` / `backdrop-blur-lg` on cards and nav
- `bg-white/5`, `bg-white/10` for glassmorphism
- `border border-white/10` on most cards
- `drop-shadow-[0_0_10px_#00f7bf99]` on accent text
- `hover:scale-[1.02]` and `hover:scale-105` transitions on interactive elements
- `animate-pulse` on logo dot and glow orb

---

## External Integrations

| Service | URL | Purpose |
| ------- | --- | ------- |
| Zapier  | `https://hooks.zapier.com/hooks/catch/23501833/ub5wicj/` | Form submissions from `/install` page |

- The install form POSTs directly to Zapier via native HTML form action (no JavaScript fetch)
- Fields sent: `name`, `email`, `website`, `companySizeText`, `revenueText`, `budgetText`

---

## Known Issues & Technical Debt

1. **Missing image asset:** `Hero.jsx` and `about.js` reference `/images/grid-overlay.png` which does not exist in the repo. This would cause a 404 in the browser (visible as missing background texture, non-breaking).

2. **Duplicate page:** `pages/myproject.js` is an exact duplicate of `pages/index.js`. It serves the same content at `/myproject`. Likely a leftover from development.

3. **Case-sensitive filename risk:** `components/cta.jsx` is lowercase but imported as `import CTA from "../components/cta"`. This works because the import path matches the filename, but the convention is inconsistent with other components (all PascalCase filenames). No actual bug, but worth noting for consistency.

4. **No `<Head>` on homepage:** `pages/index.js` has no `<Head>` component, so the page title defaults to the Next.js default. The about and install pages do have custom titles.

5. **Placeholder footer links:** Privacy and Terms links in `Footer.jsx` point to `#` (no actual pages).

6. **Hero CTA opens in new tab:** The "Install My System" button in `Hero.jsx` uses `target="_blank"` to open `/install` in a new tab, while the same CTA in `cta.jsx` and `about.js` navigates in the same tab. This is inconsistent.

7. **No error pages:** No custom `404.js` or `500.js` pages.

8. **No SEO metadata:** No Open Graph tags, no meta descriptions, no favicon configuration.

9. **No analytics:** No tracking scripts (Google Analytics, etc.) are installed.

10. **Tailwind `slate` override:** The Tailwind config overrides the built-in `slate` color palette with a single hex value `#1e1e2f`. This means the standard `slate-100` through `slate-900` utility classes are unavailable. Components using `text-slate-400` or `slate-900` fall back to hardcoded behavior rather than the theme token.

---

## Architecture Notes

- **Routing:** Next.js Pages Router (not App Router). Each file in `pages/` is a route.
- **Styling:** 100% Tailwind CSS utility classes — no CSS modules, no styled-components, no external stylesheets beyond `globals.css`.
- **State management:** Minimal — only `useState` in `Navbar.jsx` (menu toggle) and `install.js` (form sliders). No global state, no context, no Redux.
- **Data fetching:** None. All content is hardcoded. No `getServerSideProps`, `getStaticProps`, or API calls.
- **API routes:** None. The `pages/api/` directory does not exist.
- **Images:** No images are committed to the repo. The `/images/grid-overlay.png` reference would need a `public/images/` directory.
- **Environment variables:** None used. `.env` is gitignored but no env vars are referenced in code.
- **Authentication:** None.
- **Testing:** None. No test files, no test dependencies, no test scripts.

---

## Dependency Graph (component usage)

```
pages/index.js ─────┬── Navbar
                     ├── Hero
                     ├── HowItWorks
                     ├── OfferStack (uses @heroicons/react)
                     ├── VisualMockup
                     ├── Results
                     ├── CTA (from cta.jsx)
                     └── Footer

pages/myproject.js ─ (identical to index.js)

pages/about.js ─────┬── Navbar
                     └── (inline content)

pages/install.js ───┬── Navbar
                     └── (inline form → Zapier webhook)
```

---

## Git History Summary

The repo has 8 commits on `master`, all with generic "Update" messages. The initial commit was "Clean init". The project appears to have been built incrementally with rapid iterations.

---

## How to Work on This Repo

1. **Adding a new page:** Create a file in `pages/` (e.g., `pages/pricing.js`). Import `Navbar` and optionally `Footer`. Add a `<Head>` for the page title.
2. **Adding a new section to the homepage:** Create a component in `components/`, then import and place it in `pages/index.js` in the desired order.
3. **Changing the brand color:** Update `accent` in `tailwind.config.js`. The cyan `#00f9ff` is used extensively via the `text-accent`, `bg-accent`, `border-accent` utilities. Some places also hardcode `#00f7bf` in drop-shadow values — these would need manual updating.
4. **Adding images:** Create a `public/images/` directory and place files there. Reference as `/images/filename.ext`.
5. **Form destination:** The install form posts to Zapier. To change the webhook URL, edit the `action` attribute in `pages/install.js` line 33.
