import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Navbar } from "@/components/Navbar";
import { Parchment } from "@/components/home/Parchment";
import { GovernanceFailures } from "@/components/home/GovernanceFailures";
import { GrintaIntro } from "@/components/home/GrintaIntro";
import { CompareTable } from "@/components/home/CompareTable";
import { Reputation } from "@/components/home/Reputation";
import { Infrastructure } from "@/components/home/Infrastructure";
import { SectionDivider } from "@/components/home/SectionDivider";
import { FloatingSocialButtons } from "@/components/home/FloatingSocialButtons";
import column from "@/assets/column.png";

const STANDARDS = [
  { label: "x402", caption: "Per-call agent payments" },
  { label: "ERC-8004", caption: "Agent registry standard" },
  { label: "Parameters Guard", caption: "On-chain enforcement" },
  { label: "RL small model", caption: "Specialized agents" },
  { label: "TEE", caption: "Trusted Execution Environment" },
];

const Index = () => {
  useGsapReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Marble veil + columns — same as /paper */}
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 h-[90vh] w-auto opacity-[0.05] pointer-events-none select-none z-0"
      />
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 h-[90vh] w-auto opacity-[0.05] pointer-events-none select-none scale-x-[-1] z-0"
      />

      <Navbar />

      <main className="relative z-10">
        {/* HERO 1 — Pure typographic manifesto */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
            <h1 className="reveal font-serif text-4xl md:text-6xl lg:text-[5.25rem] leading-[1.02] tracking-tight text-foreground">
              The first Stablecoin{" "}
              <span className="italic text-gradient-gold">without human risk</span>.
              <br />
              We deliver it,{" "}
              <span className="italic">governed by</span>
              <br />
              <span className="font-semibold">specialized autonomous agents</span>.
            </h1>

            <p className="reveal mt-10 max-w-2xl font-serif italic text-lg md:text-xl text-foreground/75 leading-relaxed">
              Built on the open standards that make agent-native finance possible. Auditable to the byte.
            </p>

            {/* Standards row — gold hairline above & below */}
            <div className="reveal w-full max-w-3xl mt-16 rounded-lg border border-secondary/30 bg-gradient-to-b from-card/80 via-muted/60 to-card/80 backdrop-blur-sm shadow-[0_8px_40px_-12px_hsl(var(--secondary)/0.25)]">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 py-8 px-4">
                {STANDARDS.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2 px-2"
                  >
                    <span className="font-serif text-xl md:text-2xl text-foreground tracking-tight drop-shadow-sm">
                      {s.label}
                    </span>
                    <span className="mono text-[12px] md:text-[13px] tracking-[0.25em] uppercase text-muted-foreground/90 text-center">
                      {s.caption}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
            </div>
          </div>
        </section>

        <SectionDivider label="Why this matters" />
        {/* HERO 2 — Parchment + governance failures wire */}
        <section id="why" className="relative min-h-screen flex items-center px-6 py-16 scroll-mt-24">
          <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="reveal font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground mb-6 text-center">
                Every hour governance sleeps,
                <br />
                <span className="italic text-gradient-gold">
                  the market is awake.
                </span>
              </h2>
              <GovernanceFailures />
            </div>
            <div>
              <Parchment />
            </div>
          </div>
        </section>

        <SectionDivider label="Product" />
        <div id="grinta" className="scroll-mt-24">
          <GrintaIntro />
        </div>
        <SectionDivider label="Scorecard" />
        <div id="scorecard" className="scroll-mt-24">
          <CompareTable />
        </div>
        <SectionDivider label="Reputation" />
        <Reputation />
        <SectionDivider label="Infrastructure" />
        <Infrastructure />

        <footer className="relative">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 pb-40 md:pb-48 flex flex-col items-center gap-4 border-t border-secondary/20">
            <span className="font-serif italic text-base text-foreground/70 text-center">
              "The unexamined protocol is not worth governing."
            </span>
            <a
              href="https://reflecterlabs.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mono text-[14px] tracking-[0.4em] uppercase text-muted-foreground/70 hover:text-secondary transition-colors group"
            >
              Reflecter Labs · Grinta Governance
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </footer>
      </main>

      <FloatingSocialButtons />
    </div>
  );
};

export default Index;
