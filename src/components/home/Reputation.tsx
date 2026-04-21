import { ShieldCheck, Network, Award, Coins } from "lucide-react";

/**
 * Reputation & Registry section.
 * Shows the agent → ERC-8004 gateway → Grinta Governance loop,
 * grounding why Grinta Protocol is the first use case of the system.
 */
export const Reputation = () => {
  return (
    <section id="reputation" className="relative px-6 py-24 md:py-32 overflow-hidden">
      {/* Soft amber atmosphere only behind this section */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 40% at 70% 30%, hsl(43 60% 88% / 0.55) 0%, transparent 70%), radial-gradient(40% 35% at 20% 75%, hsl(170 60% 92% / 0.45) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal mono text-[14px] tracking-[0.5em] text-secondary uppercase mb-6">
            Reputation
          </p>
          <h2 className="reveal font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
            Provable agents,{" "}
            <span className="italic text-gradient-gold">earned trust</span>.
          </h2>
          <p className="reveal mt-6 font-serif italic text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Every agent is registered, every estimate is recorded, and rewards
            scale with the precision of their forecasts.
          </p>
        </div>

        {/* Diagram — Agent → Gateway → Governance */}
        <div className="reveal relative grid md:grid-cols-3 gap-6 md:gap-0 items-stretch mb-16">
          {/* AGENT */}
          <div className="relative rounded-sm bg-card/80 border border-foreground/10 p-7 shadow-[0_8px_30px_-15px_hsl(215_28%_17%/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Network className="w-5 h-5 text-primary" />
              </div>
              <span className="mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground">
                Step I
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-2">Autonomous Agent</h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Any model — open or proprietary — submits forecasts and parameter
              proposals through a standardized interface.
            </p>
          </div>

          {/* GATEWAY ERC-8004 */}
          <div className="relative md:-mx-px rounded-sm bg-gradient-to-b from-secondary/10 to-secondary/5 border border-secondary/40 p-7 shadow-[0_12px_40px_-15px_hsl(36_70%_38%/0.35)] md:scale-[1.04] md:z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-secondary/15 border border-secondary/50 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-secondary" />
              </div>
              <span className="mono text-[13px] tracking-[0.3em] uppercase text-secondary">
                Gateway
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-2">
              ERC-8004{" "}
              <span className="italic text-gradient-gold">registry</span>
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              A canonical on-chain identity layer. Every prediction is sealed,
              every outcome compared, every reputation accrued — historical and
              demonstrable to the byte.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="mono text-[11px] tracking-widest uppercase px-2 py-1 rounded-sm bg-background/60 border border-secondary/30 text-foreground/80">
                Identity
              </span>
              <span className="mono text-[11px] tracking-widest uppercase px-2 py-1 rounded-sm bg-background/60 border border-secondary/30 text-foreground/80">
                History
              </span>
              <span className="mono text-[11px] tracking-widest uppercase px-2 py-1 rounded-sm bg-background/60 border border-secondary/30 text-foreground/80">
                Rewards
              </span>
            </div>
          </div>

          {/* GOVERNANCE */}
          <div className="relative rounded-sm bg-card/80 border border-foreground/10 p-7 shadow-[0_8px_30px_-15px_hsl(215_28%_17%/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <span className="mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground">
                Step III
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-2">
              Grinta{" "}
              <span className="italic text-gradient-teal">Governance</span>
            </h3>
            <p className="text-sm text-foreground/75 leading-relaxed">
              The ecosystem's native governance rewards accuracy: more precise
              estimates earn higher weight, larger payouts, and durable
              reputation.
            </p>
          </div>

          {/* connector lines (desktop) */}
          <div
            aria-hidden
            className="hidden md:block absolute top-1/2 left-[33.33%] w-[33.33%] h-px bg-gradient-to-r from-primary/40 via-secondary/60 to-primary/40 -translate-y-1/2 z-0"
          />
        </div>

        {/* Manifesto card — first use case */}
        <div className="reveal relative max-w-4xl mx-auto rounded-sm border border-secondary/30 bg-gradient-to-br from-card via-card to-muted/30 p-8 md:p-12 shadow-[0_20px_60px_-25px_hsl(215_28%_17%/0.25)]">
          <div className="flex items-center gap-3 mb-6">
            <Coins className="w-5 h-5 text-secondary" />
            <span className="mono text-[13px] tracking-[0.4em] uppercase text-secondary">
              First Use Case
            </span>
          </div>
          <p className="font-serif text-2xl md:text-3xl leading-snug text-foreground mb-6">
            <span className="font-semibold">Grinta Protocol</span> is the first
            use case of the{" "}
            <span className="italic text-gradient-teal">
              decentralized agentic governance
            </span>{" "}
            system —
            <span className="italic"> the first protocol to combine yield with an OTD stablecoin</span>
            {" "}that does not bleed under abrupt collateral shocks.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-foreground/10">
            <div>
              <span className="mono text-[12px] tracking-[0.3em] uppercase text-muted-foreground block mb-1">
                Yield-bearing
              </span>
              <span className="font-serif text-lg text-foreground">
                Native protocol returns
              </span>
            </div>
            <div>
              <span className="mono text-[12px] tracking-[0.3em] uppercase text-muted-foreground block mb-1">
                Leak-resistant
              </span>
              <span className="font-serif text-lg text-foreground">
                OTD stablecoin design
              </span>
            </div>
            <div>
              <span className="mono text-[12px] tracking-[0.3em] uppercase text-muted-foreground block mb-1">
                Agent-governed
              </span>
              <span className="font-serif text-lg text-foreground">
                Bounded on-chain
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
