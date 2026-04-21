import { ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Editorial spread: oversized name + drop-cap on the left,
 * museum-plate spec card lifted on the right.
 */
export const GrintaIntro = () => {
  return (
    <section className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Cool teal radial atmosphere — only behind this section */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 40%, hsl(170 60% 90% / 0.6) 0%, transparent 70%), radial-gradient(40% 30% at 80% 70%, hsl(43 60% 88% / 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* LEFT — name + manifesto */}
        <div className="md:col-span-7 md:pt-8">
          <p className="reveal mono text-[14px] tracking-[0.5em] text-primary/80 uppercase mb-8">
            Built on Grinta Governance
          </p>

          <h2 className="reveal font-serif text-7xl md:text-9xl lg:text-[10rem] leading-[0.85] tracking-tight">
            Grinta
            <span className="text-secondary">.</span>
          </h2>

          <p className="reveal mt-8 font-serif italic text-2xl md:text-3xl text-gradient-gold leading-snug max-w-md">
            The first stablecoin CDP governed by Grinta Governance.
          </p>

          <p className="reveal mt-8 text-base md:text-lg leading-[1.8] text-foreground/85 max-w-md">
            <span className="float-left font-serif text-5xl leading-[0.85] mr-2 mt-1 text-primary">
              A
            </span>
            n autonomous agent governs Grinta within on-chain bounds —
            responding to market shocks in blocks, not days. Sub-cent operation,
            fully auditable, deployed on Starknet.
          </p>

          <div className="reveal-stagger mt-10 flex flex-col sm:flex-row gap-3 items-start">
            <a
              href="https://grinta-loop-shanghai.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-primary-foreground font-medium text-base shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.6)] hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.7)] hover:-translate-y-0.5 transition-all"
              style={{
                background:
                  "linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
              }}
            >
              <ExternalLink className="w-5 h-5" />
              Witness the live demo
            </a>
            <Link
              to="/paper"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-md text-base font-medium border border-foreground/15 bg-background/40 text-foreground/85 hover:border-foreground/40 hover:bg-background transition"
            >
              <BookOpen className="w-5 h-5" />
              Read the Paper
            </Link>
          </div>
        </div>

        {/* RIGHT — museum-plate specimen card, offset down */}
        <div className="md:col-span-5 md:mt-32">
          <div className="reveal-scale relative">
            {/* Plate */}
            <div className="relative rounded-sm bg-gradient-to-br from-card via-card to-muted/40 border border-secondary/30 shadow-[0_25px_60px_-20px_hsl(215_28%_17%/0.25)] overflow-hidden">
              <div className="px-7 py-6 border-b border-secondary/30 flex items-center justify-between">
                <span className="mono text-[14px] tracking-[0.4em] uppercase text-secondary">
                  Specimen
                </span>
                <span className="font-serif italic text-sm text-muted-foreground">
                  Plate I
                </span>
              </div>

              <div className="divide-y divide-border/50">
                {[
                  { k: "Response latency", v: "1 block", note: "≈ 30s on Starknet" },
                  { k: "Operating cost", v: "< $0.01", note: "per parameter update" },
                  { k: "Bounds", v: "On-chain", note: "Cairo enforced, audited" },
                  { k: "Network", v: "Starknet", note: "Sepolia · Mainnet next" },
                  { k: "Agent standard", v: "ERC-8004", note: "any registered model" },
                ].map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-12 gap-3 px-7 py-4 items-baseline hover:bg-secondary/5 transition-colors"
                  >
                    <span className="col-span-5 font-serif text-base text-foreground/70">
                      {row.k}
                    </span>
                    <span className="col-span-7 text-right">
                      <span className="mono text-base text-foreground font-medium">
                        {row.v}
                      </span>
                      <span className="block mono text-[14px] text-muted-foreground/70 mt-0.5">
                        {row.note}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-7 py-4 border-t border-secondary/30 bg-muted/20 flex items-center justify-between">
                <span className="font-serif italic text-sm text-muted-foreground">
                  Reflecter Labs · 2025
                </span>
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="mono text-[14px] tracking-widest text-primary uppercase">
                    Live
                  </span>
                </span>
              </div>
            </div>

            {/* Plate shadow / gold underplate, offset down-right */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-sm border border-secondary/40 bg-secondary/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
