import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Navbar } from "@/components/Navbar";
import { Parchment } from "@/components/home/Parchment";
import { GrintaIntro } from "@/components/home/GrintaIntro";
import { CompareTable } from "@/components/home/CompareTable";
import { SectionDivider } from "@/components/home/SectionDivider";

const Index = () => {
  useGsapReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Parchment />
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
              Reflecter Labs · Horos Protocol
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
