import { ChevronDown } from "lucide-react";

export const Parchment = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      {/* Parchment scroll */}
      <div className="reveal-scale relative w-full max-w-3xl mx-auto">
        {/* Top + bottom gold rod ornaments */}
        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 shadow-[0_4px_16px_hsl(var(--secondary)/0.4)]" />

        <div
          className="relative px-8 md:px-16 py-16 md:py-20 border-x border-border/40"
          style={{
            background:
              "linear-gradient(180deg, hsl(40 38% 95%) 0%, hsl(40 32% 90%) 60%, hsl(40 30% 86%) 100%)",
            boxShadow:
              "inset 0 0 80px hsl(40 30% 70% / 0.35), 0 30px 80px -20px hsl(215 28% 17% / 0.25)",
          }}
        >
          {/* Subtle paper texture */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.18] mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
            }}
          />

          {/* Content with bottom fade */}
          <div
            className="relative"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          >
            <p className="reveal mono text-[14px] tracking-[0.4em] text-secondary uppercase mb-6 text-center">
              Reflecter Labs · Horos Protocol
            </p>

            <h1 className="reveal font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-center text-foreground">
              Bounded autonomy
              <br />
              your DAO can{" "}
              <span className="italic text-gradient-gold">trust</span>.
            </h1>

            <p className="reveal mt-8 text-base md:text-lg leading-relaxed text-foreground/85 text-center max-w-2xl mx-auto">
              DAOs lose millions to governance latency. Horos Protocol lets
              autonomous agents adjust critical parameters in block-time —
              within sacred limits the community sets on-chain. Audited
              contracts. Model-agnostic. Live on Starknet.
            </p>

            <div className="reveal-stagger mt-10 flex flex-wrap items-center justify-center gap-2">
              {[
                "On-chain enforced",
                "Model-agnostic",
                "ERC-8004 · X402",
                "Audited",
              ].map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full border border-foreground/15 bg-background/50 text-sm font-medium text-foreground/80"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Filler so the fade has something to dissolve */}
            <p className="mt-10 font-serif italic text-base text-center text-foreground/60 max-w-xl mx-auto">
              The human defines the horoi. The agents compete within them. Keep
              scrolling — the rest of the scroll continues below…
            </p>
          </div>
        </div>

        <div className="mx-auto h-3 w-[105%] -ml-[2.5%] rounded-full bg-gradient-to-r from-secondary/60 via-secondary to-secondary/60 shadow-[0_4px_16px_hsl(var(--secondary)/0.4)]" />
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="mono text-[14px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
};
