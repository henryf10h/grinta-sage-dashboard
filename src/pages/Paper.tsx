import { ExternalLink } from "lucide-react";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { ProgressRail } from "@/components/story/ProgressRail";
import { StorySlides } from "@/components/story/StorySlides";
import { Navbar } from "@/components/Navbar";
import { FloatingSocialButtons } from "@/components/home/FloatingSocialButtons";
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

      <main className="relative z-10 pt-24">
        <StorySlides />

        <footer className="text-center text-sm text-muted-foreground py-24 pb-40 italic font-serif">
          "The unexamined protocol is not worth governing." —{" "}
          <a
            href="https://reflecterlabs.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-secondary transition-colors not-italic"
          >
            Reflecter Labs · Grinta Governance
            <ExternalLink className="w-3 h-3" />
          </a>
        </footer>
      </main>

      <FloatingSocialButtons />
    </div>
  );
};

export default Paper;
