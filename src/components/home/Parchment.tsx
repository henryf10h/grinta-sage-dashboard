/**
 * Hero parchment — translucent, ancient, wrinkled but legible.
 * Designed to live inside a hero column (left half of the split).
 */
export const Parchment = () => {
  return (
    <div className="reveal-scale relative w-full max-w-xl mx-auto">
      {/* Top gold rod */}
      <div className="mx-auto h-2.5 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary/40 shadow-[0_4px_16px_hsl(var(--secondary)/0.35)]" />

      <div
        className="relative px-7 md:px-10 py-8 md:py-10 border-x border-secondary/15"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 40% 96% / 0.55) 0%, hsl(40 33% 91% / 0.55) 60%, hsl(40 30% 86% / 0.55) 100%)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          boxShadow:
            "inset 0 0 120px hsl(40 30% 60% / 0.35), inset 0 0 0 1px hsl(40 25% 80% / 0.4), 0 30px 80px -20px hsl(215 28% 17% / 0.25)",
        }}
      >
        {/* Aged-paper wrinkle texture */}
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
          <div className="reveal flex items-center justify-center gap-4 mb-7">
            <span className="flex-1 h-px bg-gold-soft/60" />
            <span className="w-2 h-2 rotate-45 bg-secondary/60" />
            <span className="flex-1 h-px bg-gold-soft/60" />
          </div>

          <p className="reveal font-serif text-[1.75rem] md:text-[2.25rem] lg:text-[2.6rem] leading-[1.15] tracking-tight text-center text-foreground">
            <span className="font-serif text-gold-soft text-[1.4em] leading-none align-baseline mr-1">
              D
            </span>
            AOs lose millions to governance latency. Grinta Governance lets
            autonomous agents adjust critical parameters in block-time —
            within sacred limits the community sets{" "}
            <span className="italic text-gradient-gold">on-chain</span>.
          </p>

          <div className="mt-7 flex justify-center">
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 shadow-[0_6px_16px_hsl(var(--secondary)/0.4),inset_0_-3px_8px_hsl(0_0%_0%/0.18)] flex items-center justify-center">
              <span className="font-serif italic text-secondary-foreground text-lg">
                ὅ
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto h-2.5 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/40 via-secondary/80 to-secondary/40 shadow-[0_4px_16px_hsl(var(--secondary)/0.35)]" />
    </div>
  );
};
