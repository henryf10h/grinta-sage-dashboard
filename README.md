# Grinta Governance

> Decentralization promised trust. We deliver it, governed by specialized autonomous agents.

Grinta Governance is a neoclassical, agent-native framework for DeFi parameter governance. Specialized autonomous agents adjust critical protocol parameters in block-time — within sacred bounds the community sets on-chain. Audited contracts, model-agnostic, deployed on Starknet.

By **Reflecter Labs**.

---

## What's in this site

This is the marketing and narrative surface for the protocol. It has two routes:

- **`/` — Home.** Editorial commercial landing: the manifesto, the open standards we build on (x402, ERC-8004, TEE, Cairo), a translucent parchment hero with the trust pitch, a live wire of historical governance failures (USDC/SVB depeg, MakerDAO emergency vote, Curve exploit, Terra/UST collapse, FTX contagion, etc.), the Grinta product introduction, and a competitor scorecard.
- **`/paper` — The Paper.** A 10-slide, GSAP-driven storytelling experience adapting *The Dilemma of the Agora* — Cálicles' allegory for why on-chain governance must let humans set the law and let agents act within it.

## Core ideas

- **Bounded autonomy.** Humans define the bounds (the *horoi*). Agents compete and act inside them.
- **On-chain enforcement.** The marble contract is the final word. No off-chain governance theatre.
- **Block-time response.** Markets do not wait days for forum threads. Neither should governance.
- **Open standards.** ERC-8004 agent registry, x402 per-call agent payments, TEE-backed execution, Cairo-enforced bounds.
- **Auditable to the byte.** Every parameter change is a Public Decision Record on-chain.

## Tech stack

- React 18 + Vite 5 + TypeScript 5
- Tailwind CSS v3 with a neoclassical design system (marble, gold, teal — all HSL semantic tokens in `src/index.css`)
- shadcn/ui primitives
- GSAP for editorial reveals (`useGsapReveal`)
- React Router for `/` and `/paper`
- Lovable Cloud (when backend features land)

## Project structure

```
src/
  pages/
    Index.tsx          — Commercial homepage
    Paper.tsx          — 10-slide narrative
  components/
    Navbar.tsx         — Fixed header, "See Paper" CTA
    home/
      Parchment.tsx    — Translucent aged parchment hero
      GovernanceFailures.tsx — Live news-wire of historical failures
      GrintaIntro.tsx  — Product spread + CTAs
      CompareTable.tsx — Editorial scorecard vs traditional DAOs
      SectionDivider.tsx
    story/             — The Paper slides, frame, progress rail
  assets/              — Generated illustrations + the Reflecter Labs mark
```

## Development

```sh
bun install
bun run dev
```

The preview runs on Vite's default port. All edits hot-reload.

## Design system

All colors are HSL semantic tokens defined in `src/index.css` and mapped in `tailwind.config.ts`. Never hardcode color classes (`text-white`, `bg-black`) in components — always use tokens (`text-foreground`, `bg-background`, `text-secondary`, `text-primary`, etc.).

- **Background.** Warm marble (`--background: 40 30% 97%`).
- **Primary.** Teal (`--primary: 170 100% 36%`) — Grinta accent.
- **Secondary.** Warm gold (`--secondary: 43 52% 54%`) — wisdom / governance.
- **Typography.** Cormorant Garamond (display), Inter (body), JetBrains Mono (lapidary labels). Minimum 14px throughout.

## License

© Reflecter Labs. All rights reserved.
