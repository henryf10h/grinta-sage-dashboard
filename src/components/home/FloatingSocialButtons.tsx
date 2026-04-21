import { MessageCircle, ExternalLink } from "lucide-react";

const XLogo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const FloatingSocialButtons = () => {
  return (
    <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col sm:flex-row items-center gap-2 md:gap-3 w-auto max-w-[95vw] px-2">
      <a
        href="https://x.com/grintaprotocol"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 bg-background/90 backdrop-blur-xl border border-secondary rounded-full shadow-2xl shadow-black/20 hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.4)] hover:border-secondary hover:scale-105 transition-all duration-300"
      >
        <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-foreground text-background group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
          <XLogo className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover:text-background" />
        </span>
        <span className="font-medium text-xs md:text-sm text-foreground/90 group-hover:text-foreground whitespace-nowrap">
          Follow on X
        </span>
      </a>

      <a
        href="https://t.me/+Z2ehPyJUQsAwOGRh"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 bg-background/90 backdrop-blur-xl border border-secondary rounded-full shadow-2xl shadow-black/20 hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.4)] hover:border-secondary hover:scale-105 transition-all duration-300"
      >
        <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0088cc] text-white group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
          <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
        </span>
        <span className="font-medium text-xs md:text-sm text-foreground/90 group-hover:text-foreground whitespace-nowrap">
          Join Community
        </span>
      </a>

      {/* Launch Live Demo - Same style as others, gold icon */}
      <a
        href="https://grinta-loop-shanghai.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-2 md:px-5 md:py-3 bg-background/90 backdrop-blur-xl border border-secondary rounded-full shadow-2xl shadow-black/20 hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.4)] hover:border-secondary hover:scale-105 transition-all duration-300"
      >
        <span className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#C9A227] text-white group-hover:bg-[#D4AF37] transition-colors duration-300">
          <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
        </span>
        <span className="font-medium text-xs md:text-sm text-foreground/90 group-hover:text-foreground whitespace-nowrap">
          Launch Live Demo
        </span>
      </a>
    </div>
  );
};
