import { useEffect, useState } from "react";

/**
 * Top progress bar. Teal->gold gradient, scroll-driven.
 */
export const ProgressRail = ({ total }: { total: number }) => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      setProgress(p);
      setActive(Math.min(total, Math.max(1, Math.round(p * (total - 1)) + 1)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="h-[3px] w-full bg-border/40">
        <div
          className="h-full origin-left transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
            boxShadow: "0 0 12px hsl(var(--primary) / 0.5)",
          }}
        />
      </div>
      <div className="absolute right-4 top-3 mono text-[10px] tracking-[0.3em] text-muted-foreground/70 pointer-events-auto">
        {String(active).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </div>
  );
};
