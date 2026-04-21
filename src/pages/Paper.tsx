import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ProgressRail } from "@/components/story/ProgressRail";
import { StorySlides } from "@/components/story/StorySlides";
import { Navbar } from "@/components/Navbar";
import column from "@/assets/column.png";

const Paper = () => {
  useGsapReveal();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Marble veil + columns */}
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
      <ProgressRail total={10} />

      <main className="relative z-10 pt-16">
        <StorySlides />

        <footer className="text-center text-sm text-muted-foreground py-12 italic font-serif">
          "The unexamined protocol is not worth governing." — Reflecter Labs · Grinta Governance
        </footer>
      </main>
    </div>
  );
};

export default Paper;
