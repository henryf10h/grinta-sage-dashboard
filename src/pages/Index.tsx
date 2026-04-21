import { useGsapReveal } from "@/hooks/useGsapReveal";
import { Navbar } from "@/components/Navbar";
import { Parchment } from "@/components/home/Parchment";
import { GrintaIntro } from "@/components/home/GrintaIntro";
import { CompareTable } from "@/components/home/CompareTable";

const Index = () => {
  useGsapReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <main className="relative z-10">
        <Parchment />
        <GrintaIntro />
        <CompareTable />
        <footer className="text-center text-sm text-muted-foreground py-12 italic font-serif">
          "The unexamined protocol is not worth governing." — Reflecter Labs · Horos Protocol
        </footer>
      </main>
    </div>
  );
};

export default Index;
