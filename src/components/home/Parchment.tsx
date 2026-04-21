import { ChevronDown } from "lucide-react";

/**
 * Hero parchment. Carved-tablet typography, wax-seal cap line.
 */
export const Parchment = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-16">
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
        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 shadow-[0_4px_16px_hsl(var(--secondary)/0.45)]" />

        <div
          className="relative px-8 md:px-16 py-16 md:py-24 border-x border-secondary/20"
          style={{
            background:
              "linear-gradient(180deg, hsl(40 40% 96%) 0%, hsl(40 33% 91%) 60%, hsl(40 30% 86%) 100%)",
            boxShadow:
              "inset 0 0 100px hsl(40 30% 70% / 0.4), 0 30px 80px -20px hsl(215 28% 17% / 0.3)",
          }}
        >
          {/* Paper noise */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.2] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
            }}
          />

          {/* Content with bottom mask fade */}
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            {/* Wax-seal cap */}
            <div className="reveal flex items-center justify-center gap-4 mb-10">
              <span className="flex-1 h-px bg-secondary/40" />
              <span className="mono text-[14px] tracking-[0.5em] text-secondary uppercase">
                Reflecter Labs
              </span>
              <span className="flex-1 h-px bg-secondary/40" />
            </div>

            <h1 className="reveal font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] tracking-tight text-center text-foreground">
              Bounded autonomy
              <br />
              your DAO can{" "}
              <span className="italic text-gradient-gold">trust</span>.
            </h1>

            {/* Drop-cap subhead */}
            <p className="reveal mt-10 text-base md:text-lg leading-[1.75] text-foreground/85 text-center max-w-2xl mx-auto">
              <span className="float-left font-serif text-6xl leading-[0.85] mr-3 mt-1 text-secondary">
                D
              </span>
              AOs lose millions to governance latency. Horos Protocol lets
              autonomous agents adjust critical parameters in block-time —
              within sacred limits the community sets on-chain. Audited
              contracts, model-agnostic, live on Starknet.
            </p>

            {/* Lapidary attributes — chiseled inscription style */}
            <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mono text-[14px] tracking-[0.35em] uppercase text-foreground/70">
              <span>On-chain</span>
              <span className="text-secondary/60">·</span>
              <span>Model-agnostic</span>
              <span className="text-secondary/60">·</span>
              <span>ERC-8004 · X402</span>
              <span className="text-secondary/60">·</span>
              <span>Audited</span>
            </div>

            {/* Wax seal ornament */}
            <div className="mt-14 flex justify-center">
              <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 shadow-[0_6px_16px_hsl(var(--secondary)/0.45),inset_0_-3px_8px_hsl(0_0%_0%/0.18)] flex items-center justify-center">
                <span className="font-serif italic text-secondary-foreground text-xl">
                  ὅ
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 shadow-[0_4px_16px_hsl(var(--secondary)/0.45)]" />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="mono text-[14px] tracking-[0.3em] uppercase">
          Continue
        </span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};
