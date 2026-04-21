

# Restructure: Commercial Homepage + Paper Route

## Goal

Split the experience into two routes:
- `/` — **new commercial homepage** with a scroll/parchment hero, Grinta intro, and a competitor comparison table.
- `/paper` — the existing 10-slide "El Dilema del Ágora" narrative (moved as-is).

Add a top navbar with a **"See Paper"** link. Audit and translate any remaining Spanish text to English. Enforce a **minimum 14px font size** site-wide.

---

## 1. Routing & Navigation

- `src/App.tsx`: register a new `/paper` route alongside `/`.
- New page `src/pages/Paper.tsx`: renders the existing `ProgressRail` + `StorySlides` (the current `Index.tsx` content moves here verbatim).
- New page `src/pages/Index.tsx` (rewritten): the new commercial homepage.
- New component `src/components/Navbar.tsx`: fixed top bar with "Horos Protocol" wordmark on the left and a **"See Paper →"** link on the right pointing to `/paper`. Uses the existing teal/gold tokens, marble translucent background, mounted on both pages.

---

## 2. New Homepage `/` — Layout

Three stacked sections, full-bleed, marble background.

### Section A — The Parchment (hero)

A vertical parchment scroll centered on the viewport (cream paper texture, soft shadow, gold trim, Cormorant Garamond serif). It opens with a **commercial trust message** rather than the philosophical narrative:

- Eyebrow (mono, gold): `REFLECTER LABS · HOROS PROTOCOL`
- Headline: **"Bounded autonomy your DAO can trust."**
- Subhead (3–4 lines): A commercial trust pitch — DAOs lose millions to governance latency; Horos Protocol lets autonomous agents govern critical parameters within on-chain limits the community sets. Audited contracts, model-agnostic, live on Starknet.
- Trust row: small badges — `On-chain enforced` · `Model-agnostic` · `Open standards (ERC-8004 · X402)` · `Audited`.

The **bottom of the parchment fades to transparent** via a CSS mask-image gradient (`mask-image: linear-gradient(to bottom, black 70%, transparent 100%)`) so the text visually dissolves, hinting "scroll to continue." A subtle bouncing chevron sits below.

### Section B — Grinta intro

Appears on scroll. Center-aligned:

- Large serif title: **Grinta**
- Slogan directly under it (gold gradient, italic serif): the existing slogan — *"The first stablecoin CDP governed by Horos."*
- Short paragraph: one sentence on what Grinta is (autonomous-agent-governed CDP, sub-cent ops, responds in blocks not days).
- Two CTAs: `Witness the live demo` (→ external `grinta-loop-shanghai.onrender.com`) and `Read the Paper` (→ `/paper`).

GSAP reveal on entry; a subtle parallax marble column accent on each side.

### Section C — Competitor table

Title: **"How Grinta compares."**

A clean 4-column comparison table (responsive: stacks to cards on mobile). Suggested rows — open to user override:

| Capability | Traditional DAO (Maker, Aave) | AI Advisor (off-chain only) | **Grinta + Horos** |
|---|---|---|---|
| Response latency | Days | Hours | **Block-time** |
| On-chain enforced bounds | No | No | **Yes** |
| Model-agnostic agents | — | Single model | **Any ERC-8004 agent** |
| Per-call agent payments | — | Manual | **X402 native** |
| Auditable decisions (PDR) | Forum posts | Off-chain logs | **On-chain records** |
| Emergency stop | Multi-sig vote | Manual | **Bounded + circuit breaker** |

Grinta column highlighted with teal border + soft glow; checkmark/x icons from `lucide-react`.

---

## 3. Language & Typography Audit

- Translate the only remaining Spanish line in `StorySlides.tsx` slide 4 — `"Lo llamamos: Horos Protocol."` → `"We call it: Horos Protocol."`.
- Sweep `StorySlides.tsx`, `StoryFrame.tsx`, and any new components to confirm 100% English copy.
- **Minimum font size 14px**: in `src/index.css`, add a base rule ensuring `html { font-size: 16px }` and a utility safeguard so no `text-xs` (12px) or `text-[10px]/[11px]` strings render below 14px. Concretely: replace existing `text-xs` (12px), `text-[10px]`, `text-[11px]` occurrences in StorySlides, StoryFrame, ProgressRail, and new components with `text-sm` (14px) or `text-[14px]`. Mono eyebrows keep their wide tracking but bump to 14px.

---

## 4. Technical details

- **Files created**: `src/pages/Paper.tsx`, `src/components/Navbar.tsx`, `src/components/home/Parchment.tsx`, `src/components/home/GrintaIntro.tsx`, `src/components/home/CompareTable.tsx`.
- **Files edited**: `src/App.tsx` (add `/paper` route), `src/pages/Index.tsx` (rewrite as commercial home), `src/components/story/StorySlides.tsx` (English fix + font-size sweep), `src/components/story/StoryFrame.tsx` (font-size sweep), `src/components/story/ProgressRail.tsx` (font-size sweep — only show on `/paper`), `src/index.css` (parchment texture utility + base size), `index.html` (title/description tweak so `/` reads as commercial landing).
- **Parchment look**: layered CSS — cream gradient (`hsl(40 35% 94%) → hsl(40 30% 88%)`), inset gold border, drop shadow, optional subtle noise via SVG `feTurbulence` data-URI, bottom mask-image fade.
- **Animations**: reuse `useGsapReveal` on the new home; parchment unfurls with `clipPath` from top, GrintaIntro fades + scales in, table rows stagger.
- **Navbar visibility**: shown on both routes; on `/paper` it sits above the `ProgressRail` (rail offset by navbar height).

## Out of scope

- Generating new images (existing slide assets stay on `/paper`; the new home is type-driven with subtle marble/column accents already in the project).
- Backend, auth, analytics.

