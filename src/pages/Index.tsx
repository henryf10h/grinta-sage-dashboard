import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Navbar } from "@/components/Navbar";
import { Parchment } from "@/components/home/Parchment";
import { GovernanceFailures } from "@/components/home/GovernanceFailures";
import { GrintaIntro } from "@/components/home/GrintaIntro";
import { CompareTable } from "@/components/home/CompareTable";
import { SectionDivider } from "@/components/home/SectionDivider";
import column from "@/assets/column.png";

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
        {/* HERO — split: parchment left, news ticker right */}
        <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16">
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
