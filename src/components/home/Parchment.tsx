/**
 * Hero parchment — translucent, ancient, wrinkled but legible.
 * Fills the hero (h-screen). No "Continue" button.
 */
export const Parchment = () => {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Vertical Greek-key meander, decorative only */}
      <div
        aria-hidden
        className="hidden lg:block absolute left-0 top-0 bottom-0 w-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 18px, hsl(var(--secondary)) 18px 20px, transparent 20px 24px, hsl(var(--secondary)) 24px 26px, transparent 26px 44px)",
        }}
      />
      <div
        aria-hidden
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 18px, hsl(var(--secondary)) 18px 20px, transparent 20px 24px, hsl(var(--secondary)) 24px 26px, transparent 26px 44px)",
        }}
      />

      <div className="reveal-scale relative w-full max-w-3xl mx-auto">
        {/* Top gold rod */}
        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary/40 shadow-[0_4px_16px_hsl(var(--secondary)/0.35)]" />

        <div
          className="relative px-8 md:px-16 py-14 md:py-20 border-x border-secondary/15"
          style={{
            background:
              "linear-gradient(180deg, hsl(40 40% 96% / 0.55) 0%, hsl(40 33% 91% / 0.55) 60%, hsl(40 30% 86% / 0.55) 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            boxShadow:
              "inset 0 0 120px hsl(40 30% 60% / 0.35), inset 0 0 0 1px hsl(40 25% 80% / 0.4), 0 30px 80px -20px hsl(215 28% 17% / 0.25)",
          }}
        >
          {/* Aged-paper wrinkle texture (multi-layer noise + creases) */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.35] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch' seed='4'/><feColorMatrix values='0 0 0 0 0.55  0 0 0 0 0.42  0 0 0 0 0.25  0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* Diagonal crease */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(105deg, transparent 0%, transparent 28%, hsl(35 35% 35% / 0.35) 29%, transparent 30%, transparent 64%, hsl(35 35% 35% / 0.25) 65%, transparent 66%, transparent 100%), linear-gradient(75deg, transparent 0%, transparent 45%, hsl(35 35% 35% / 0.25) 46%, transparent 47%, transparent 100%)",
            }}
          />
          {/* Edge burn */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 50%, transparent 55%, hsl(30 40% 30% / 0.35) 100%)",
              mixBlendMode: "multiply",
            }}
          />
          {/* Stains */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80px 40px at 18% 22%, hsl(30 40% 35% / 0.18), transparent 70%), radial-gradient(ellipse 60px 30px at 82% 78%, hsl(30 40% 35% / 0.15), transparent 70%), radial-gradient(circle 24px at 62% 12%, hsl(30 40% 30% / 0.2), transparent 70%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Content */}
          <div className="relative">
            {/* Wax-seal cap */}
            <div className="reveal flex items-center justify-center gap-4 mb-8">
              <span className="flex-1 h-px bg-secondary/40" />
              <span className="mono text-[14px] tracking-[0.5em] text-secondary uppercase">
                Reflecter Labs
              </span>
              <span className="flex-1 h-px bg-secondary/40" />
            </div>

            <h1 className="reveal font-serif text-[2.75rem] md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-center text-foreground">
              Bounded autonomy
              <br />
              your DAO can{" "}
              <span className="italic text-gradient-gold">trust</span>.
            </h1>

            {/* Subhead — first letter styled inline (no float) so 'D' stays attached to 'AOs') */}
            <p className="reveal mt-8 md:mt-10 text-[15px] md:text-base leading-[1.8] text-foreground/85 text-center max-w-2xl mx-auto">
              <span className="font-serif text-secondary text-[1.4em] leading-none align-baseline">
                D
              </span>
              AOs lose millions to governance latency. Grinta Governance lets
              autonomous agents adjust critical parameters in block-time —
              within sacred limits the community sets on-chain. Audited
              contracts, model-agnostic, live on Starknet.
            </p>

            {/* Lapidary attributes — single line on desktop, evenly spaced */}
            <div className="reveal mt-8 mono text-[13px] md:text-[14px] tracking-[0.3em] uppercase text-foreground/65 text-center">
              <span className="inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                <span>On-chain</span>
                <span className="text-secondary/50">·</span>
                <span>Model-agnostic</span>
                <span className="text-secondary/50">·</span>
                <span>ERC-8004</span>
                <span className="text-secondary/50">·</span>
                <span>X402</span>
                <span className="text-secondary/50">·</span>
                <span>Audited</span>
              </span>
            </div>

            {/* Wax seal ornament */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 shadow-[0_6px_16px_hsl(var(--secondary)/0.4),inset_0_-3px_8px_hsl(0_0%_0%/0.18)] flex items-center justify-center">
                <span className="font-serif italic text-secondary-foreground text-lg">
                  ὅ
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary/40 shadow-[0_4px_16px_hsl(var(--secondary)/0.35)]" />
      </div>
    </section>
  );
};
