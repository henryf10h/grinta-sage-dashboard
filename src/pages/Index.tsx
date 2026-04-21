import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Navbar } from "@/components/Navbar";
import { Parchment } from "@/components/home/Parchment";
import { GovernanceFailures } from "@/components/home/GovernanceFailures";
import { GrintaIntro } from "@/components/home/GrintaIntro";
import { CompareTable } from "@/components/home/CompareTable";
import { SectionDivider } from "@/components/home/SectionDivider";
import column from "@/assets/column.png";
import distrust from "@/assets/distrust-illustration.png";

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
        {/* HERO 1 — Distrust manifesto, single centered message */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
          <div className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
            <img
              src={distrust}
              alt="A handshake shattering — the broken trust at the heart of decentralized governance"
              width={1024}
              height={1024}
              className="reveal-scale w-[260px] md:w-[360px] h-auto mb-10 select-none pointer-events-none"
              style={{
                filter:
                  "drop-shadow(0 24px 40px hsl(215 28% 17% / 0.25)) drop-shadow(0 4px 8px hsl(215 28% 17% / 0.15))",
              }}
            />

            <p className="reveal mono text-[12px] md:text-[14px] tracking-[0.5em] uppercase text-foreground/60 mb-6">
              The crisis of governance
            </p>

            <h1 className="reveal font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
              Decentralization promised{" "}
              <span className="italic text-gradient-gold">trust</span>.
              <br />
              It delivered{" "}
              <span className="italic relative inline-block">
                doubt
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-1 h-[3px] bg-destructive/70"
                />
              </span>
              .
            </h1>

            <p className="reveal mt-8 max-w-2xl font-serif italic text-lg md:text-xl text-foreground/75 leading-relaxed">
              Every protocol asks you to believe in a vote that arrives too
              late, in a multisig you cannot see, in a forum thread that became
              a fortune lost.
            </p>

            <div className="reveal mt-10 flex flex-col items-center gap-2">
              <span className="mono text-[12px] tracking-[0.4em] uppercase text-muted-foreground/70">
                Scroll to see the cost
              </span>
              <span className="block w-px h-12 bg-gradient-to-b from-secondary/60 to-transparent" />
            </div>
          </div>
        </section>

        {/* HERO 2 — Parchment + governance failures wire */}
        <section className="relative min-h-screen flex items-center px-6 py-24">
          <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="order-2 lg:order-1">
              <Parchment />
            </div>
            <div className="order-1 lg:order-2">
              <p className="reveal mono text-[12px] tracking-[0.4em] uppercase text-destructive/80 mb-4 text-center lg:text-left">
                Why this matters
              </p>
              <h2 className="reveal font-serif text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground mb-6 text-center lg:text-left">
                Every hour governance sleeps,
                <br />
                <span className="italic text-gradient-gold">
                  the market is awake.
                </span>
              </h2>
              <GovernanceFailures />
            </div>
          </div>
        </section>

        <SectionDivider label="Product" />
        <GrintaIntro />
        <SectionDivider label="Scorecard" />
        <CompareTable />

        <footer className="relative">
          <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col items-center gap-4 border-t border-secondary/20">
            <span className="font-serif italic text-base text-foreground/70 text-center">
              "The unexamined protocol is not worth governing."
            </span>
            <span className="mono text-[14px] tracking-[0.4em] uppercase text-muted-foreground/70">
              Reflecter Labs · Grinta Governance
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
