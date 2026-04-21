import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/grinta-logo.png";

const SECTIONS = [
  { id: "why", label: "Why this Matters" },
  { id: "grinta", label: "Grinta" },
  { id: "scorecard", label: "Competitors" },
  { id: "reputation", label: "Reputation" },
  { id: "infrastructure", label: "Infrastructure" },
];

/**
 * Editorial navbar: gold hairline under a thin marble strip.
 * Mark = Reflecter Labs philosopher bust.
 */
export const Navbar = () => {
  const { pathname, hash } = useLocation();
  const onPaper = pathname === "/paper";
  const onHome = pathname === "/";

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    if (!onHome) return; // let router navigate to "/#id"
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[60]">
      <div className="backdrop-blur-md bg-background/75 border-b border-secondary/30">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 px-6 md:px-10 h-24">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
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
              <a
                href="https://reflecterlabs.xyz"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden sm:inline-flex items-center gap-1.5 mono text-[12px] tracking-[0.3em] text-muted-foreground/90 hover:text-secondary uppercase mt-1 font-medium transition-colors"
              >
                Reflecter Labs
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </Link>

          {/* Section anchors — desktop only */}
          {!onPaper && (
            <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              {SECTIONS.map((s) => {
                const isActive = onHome && hash === `#${s.id}`;
                return (
                  <a
                    key={s.id}
                    href={`/#${s.id}`}
                    onClick={(e) => handleAnchor(e, s.id)}
                    className={`relative px-3 py-2 mono text-[11px] tracking-[0.25em] uppercase transition-colors ${
                      isActive
                        ? "text-secondary"
                        : "text-foreground/65 hover:text-foreground"
                    }`}
                  >
                    {s.label}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-px bg-secondary transition-opacity ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
          )}

          <nav className="flex items-center gap-2 shrink-0">
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
