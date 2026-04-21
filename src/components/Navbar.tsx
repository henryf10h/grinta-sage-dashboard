import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/grinta-logo.png";

/**
 * Editorial navbar: gold hairline under a thin marble strip.
 * Mark = Reflecter Labs philosopher bust.
 */
export const Navbar = () => {
  const { pathname } = useLocation();
  const onPaper = pathname === "/paper";

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <div className="backdrop-blur-md bg-background/75 border-b border-secondary/30">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Grinta Governance"
              width={72}
              height={72}
              className="w-[72px] h-[72px] object-contain select-none transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg tracking-tight">
                Grinta Governance
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
