import { ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import column from "@/assets/column.png";

export const GrintaIntro = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Subtle column accents */}
      <img
        src={column}
        alt=""
        aria-hidden
        data-parallax="0.1"
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 h-[70vh] opacity-[0.07] pointer-events-none"
      />
      <img
        src={column}
        alt=""
        aria-hidden
        data-parallax="0.1"
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 h-[70vh] opacity-[0.07] pointer-events-none scale-x-[-1]"
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="reveal mono text-[14px] tracking-[0.4em] text-primary uppercase mb-6">
          Introducing
        </p>

        <h2 className="reveal font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
          Grinta
        </h2>

        <p className="reveal font-serif italic text-2xl md:text-4xl leading-snug mb-8">
          <span className="text-gradient-gold">
            The first stablecoin CDP governed by Horos.
          </span>
        </p>

        <p className="reveal text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto mb-10">
          An autonomous agent governs Grinta within on-chain bounds — responding
          to market shocks in blocks, not days. Sub-cent operation, fully
          auditable, deployed on Starknet.
        </p>

        <div className="reveal-stagger flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://grinta-loop-shanghai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-primary-foreground font-medium text-base shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-[1.03] transition-transform"
            style={{
              background:
                "linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
            }}
          >
            <ExternalLink className="w-5 h-5" />
            Witness the live demo
          </a>
          <Link
            to="/paper"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-medium border border-primary/40 bg-primary/5 text-primary hover:bg-primary/10 transition"
          >
            <BookOpen className="w-5 h-5" />
            Read the Paper
          </Link>
        </div>
      </div>
    </section>
  );
};
