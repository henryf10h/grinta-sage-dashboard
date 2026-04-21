import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StoryFrameProps {
  id: string;
  index: number;
  total: number;
  children: ReactNode;
  className?: string;
  tone?: "default" | "dark";
}

/**
 * Wraps each slide: full viewport, slide counter, brand mark.
 * The Calicles narrative now lives inside the slide content itself.
 */
export const StoryFrame = ({
  id,
  index,
  total,
  children,
  className,
  tone = "default",
}: StoryFrameProps) => {
  return (
    <section
      id={id}
      data-slide={index}
      className={cn(
        "story-slide relative min-h-screen w-full flex items-center justify-center px-6 md:px-16 py-24 overflow-hidden",
        tone === "dark" ? "text-foreground" : "text-foreground",
        className
      )}
    >
      <span className="absolute top-8 left-8 mono text-xs tracking-[0.3em] text-muted-foreground/70 select-none z-20">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      <span className="absolute top-8 right-8 font-serif italic text-xs text-muted-foreground/70 select-none z-20">
        Horos Protocol
      </span>

      <div className="relative z-10 w-full max-w-6xl mx-auto">{children}</div>
    </section>
  );
};
