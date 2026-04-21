import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StoryFrameProps {
  id: string;
  index: number;
  total: number;
  story: string;
  children: ReactNode;
  className?: string;
  tone?: "default" | "dark";
}

/**
 * Wraps each slide: full viewport, marble background, story corner, slide counter.
 */
export const StoryFrame = ({
  id,
  index,
  total,
  story,
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
      {/* Slide index marker */}
      <span className="absolute top-8 left-8 mono text-xs tracking-[0.3em] text-muted-foreground/70 select-none">
        {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>

      {/* Brand mark */}
      <span className="absolute top-8 right-8 font-serif italic text-xs text-muted-foreground/70 select-none">
        Horos Protocol
      </span>

      {/* Slide content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">{children}</div>

      {/* Story corner — bottom right */}
      <p className="absolute bottom-6 right-6 md:bottom-8 md:right-10 max-w-[22rem] text-right font-serif italic text-[11px] md:text-xs leading-relaxed text-secondary/90 select-none pointer-events-none">
        <span className="block mb-1 not-italic mono text-[9px] tracking-[0.3em] text-secondary/60">
          ÁGORA · {String(index).padStart(2, "0")}
        </span>
        {story}
      </p>
    </section>
  );
};
