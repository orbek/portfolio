# Blog / Writing Feature — Design

**Date:** 2026-07-26
**Status:** Approved (pending spec review)

## Goal

Add a blog ("Writing") capability to the single-page portfolio. Ship the first
post — *The Beauty of Learning Begins With "Why"* — and structure the code so
adding future posts is low-friction (one new file + one import line).

## Context

- Stack: React 19 + Vite + Tailwind 3 + framer-motion, deployed to GitHub Pages
  at the custom domain `www.databarbosa.com` (`base: '/'`).
- Current app is a single page: `main.jsx` renders `<App>` directly (no router).
  Sections use hash-anchor nav (`#about`, `#projects`, ...).
- `react-router-dom` v7 is already a dependency but unused.
- Design tokens: gold `accent` (#b8860b), serif body font (Source Serif 4),
  Space Grotesk display, JetBrains Mono for labels. Sections follow
  `py-24 md:py-32 border-t border-neutral-200`, `max-w-6xl mx-auto px-6`, and
  framer-motion `whileInView` reveals.

## Architecture

Introduce client-side routing:

- `main.jsx` — wrap the app in `<BrowserRouter>`.
- `App.jsx` — becomes the router:
  - `/` → `<Home>`
  - `/blog/:slug` → `<BlogPost>`
  - `*` → redirect to `/`
  - Include a `ScrollToTop` effect that scrolls to top on route change (so
    navigating into a post starts at the top, not the scroll position of the
    homepage).
- `pages/Home.jsx` — holds the existing homepage layout (Navbar, Hero, About,
  Projects, **Writing** [new], Certifications, Contact, footer) plus the
  `useSectionTracking()` call. This is the current `App.jsx` body, moved.

### GitHub Pages SPA fallback

GitHub Pages is a static host, so a direct visit or refresh on `/blog/:slug`
returns a 404. Apply the standard SPA redirect technique:

- `public/404.html` — script that rewrites the 404'd path into a query string
  and redirects to the app root.
- `index.html` — a small inline snippet (before the app script) that restores
  the original path from that query string via `history.replaceState`.

This makes deep links, refreshes, and shared post URLs resolve correctly on the
custom domain.

## Content model (built for more posts)

- `src/posts/<slug>.jsx` — **one file per post**. Each exports:
  - metadata: `slug`, `title`, `subtitle`, `excerpt`, `date` (ISO string),
    `readTime` (e.g. `"5 min read"`)
  - `Content` — the essay as semantic JSX (`<p>`, `<h2>`, `<ul>`, `<em>`,
    `<a>`), no per-element Tailwind (styling handled by scoped CSS, below).
- `src/data/posts.js` — imports every post module, exports:
  - `posts` — array sorted by `date` descending
  - `getPostBySlug(slug)` — lookup helper

Adding a future post = create one `src/posts/*.jsx` file and add one import to
`posts.js`.

### First post

- **File:** `src/posts/beauty-of-learning-begins-with-why.jsx`
- **slug:** `beauty-of-learning-begins-with-why`
- **title:** The Beauty of Learning Begins With "Why"
- **date:** `2026-07-26`
- **readTime:** `5 min read`
- **excerpt:** short pull line, e.g. *"Creativity must be cultivated — and it
  begins with the courage to ask why."*
- The opening reference "a LinkedIn post about creativity" links to:
  `https://www.linkedin.com/posts/09barbosacarlos_i-never-considered-myself-a-creative-person-activity-7420501230986117120-zb-A`
  (external, `target="_blank" rel="noopener noreferrer"`).
- Emphasized standalone lines (e.g. *"Creativity must be cultivated."*,
  *"I wanted that life for myself."*) rendered as accented/italic lines; the
  closing "Think. / Try. / Experiment. / ..." sequence rendered as a styled list.

## Components & pages

### `components/Writing.jsx` (homepage section)

- `<section id="writing">`, same rhythm/border/animation as other sections.
- Placed between Projects (Work) and Certifications (Credentials).
- Mono eyebrow label ("Writing"), heading, then a list of post cards driven by
  `posts` from `data/posts.js`. Each card: title, `date · readTime` meta,
  excerpt, and a "Read →" link to `/blog/:slug` (react-router `<Link>`).

### `pages/BlogPost.jsx`

- Reads `:slug`, resolves via `getPostBySlug`; unknown slug → redirect to `/`.
- Centered single-column reading layout (`max-w-2xl`/`max-w-3xl`):
  "← Back" link (to `/#writing`), title, `date · readTime` meta line, then
  `<Content/>` wrapped in `.post-body`.
- Sets `document.title` to the post title on mount (SEO/sharing); restores the
  default on unmount.
- Reuse the site footer styling for consistency.

### Typography — scoped `.post-body` CSS

Add a `.post-body` block in `src/index.css` styling descendant `p`, `h2`, `ul`,
`li`, `a`, `em`, `blockquote` with the existing design tokens (serif body,
readable measure and line-height, gold accent links/emphasis). Keeps post JSX
clean semantic HTML and gives every future post consistent typography for free.

## Navigation & analytics

- **Navbar:** add `{ name: 'Writing', href: '#writing' }` to `navLinks`
  (between Work and Credentials). On the post page the hash links still resolve
  because "← Back" points to `/#writing` and the homepage handles the anchor.
- **Section tracking:** add `'writing'` to the `SECTIONS` array in
  `useSectionTracking.js`. Fire a `blog_post_view` GA4 event (with `slug`) from
  `BlogPost.jsx` so post reads are measurable.

## Non-goals (YAGNI)

- No markdown/MDX pipeline or new dependencies — posts are JSX modules.
- No tags, categories, pagination, RSS, or comments for now.
- No CMS; posts are authored in-repo.

## Testing / verification

- `npm run build` succeeds and `npm run lint` is clean.
- Manual: homepage shows the Writing section and card; clicking opens the post
  page; "← Back" returns to `/#writing`; direct-load and refresh of
  `/blog/beauty-of-learning-begins-with-why` resolve (via 404 fallback in a
  build/preview); the LinkedIn link opens in a new tab.

## Files touched

**New**
- `src/pages/Home.jsx`
- `src/pages/BlogPost.jsx`
- `src/components/Writing.jsx`
- `src/posts/beauty-of-learning-begins-with-why.jsx`
- `src/data/posts.js`
- `public/404.html`

**Modified**
- `src/main.jsx` (BrowserRouter)
- `src/App.jsx` (Routes + ScrollToTop)
- `src/components/Navbar.jsx` (Writing link)
- `src/hooks/useSectionTracking.js` (track `writing`)
- `src/index.css` (`.post-body` styles)
- `index.html` (SPA redirect restore snippet)
