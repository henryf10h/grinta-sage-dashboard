import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const { pathname } = useLocation();
  const onPaper = pathname === "/paper";

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="font-serif text-xl tracking-tight">Horos Protocol</span>
          <span className="hidden sm:inline mono text-[14px] tracking-[0.3em] text-muted-foreground/70 uppercase">
            by Reflecter Labs
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          {onPaper ? (
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground transition"
            >
              ← Home
            </Link>
          ) : (
            <Link
              to="/paper"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-primary/40 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              See Paper
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
