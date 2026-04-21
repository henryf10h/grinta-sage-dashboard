import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Editorial navbar: gold hairline under a thin marble strip.
 * Mark = Greek omicron-stigma "Ⲱ" feel built from a circle + serif "H".
 */
export const Navbar = () => {
  const { pathname } = useLocation();
  const onPaper = pathname === "/paper";

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <div className="backdrop-blur-md bg-background/75 border-b border-secondary/30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-secondary/60 text-secondary font-serif italic text-base shadow-[inset_0_0_8px_hsl(var(--secondary)/0.25)]">
              H
              <span className="absolute -inset-px rounded-full ring-1 ring-secondary/20" />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg tracking-tight">
                Horos Protocol
              </span>
              <span className="hidden sm:inline mono text-[11px] tracking-[0.35em] text-muted-foreground/80 uppercase mt-1">
                Reflecter Labs
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-2">
            {onPaper ? (
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground transition"
              >
                ← Home
              </Link>
            ) : (
              <Link
                to="/paper"
                className="group inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-md text-sm font-medium border border-secondary/50 bg-secondary/5 text-foreground/90 hover:bg-secondary/15 hover:border-secondary transition-all"
              >
                <span className="font-serif italic">See</span> Paper
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            )}
          </nav>
        </div>
      </div>
      {/* Gold hairline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
    </header>
  );
};
