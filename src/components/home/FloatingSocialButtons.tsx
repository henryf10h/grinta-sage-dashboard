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
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
      <a
        href="https://x.com/grintaprotocol"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-5 py-3 bg-background/90 backdrop-blur-xl border border-secondary rounded-full shadow-2xl shadow-black/20 hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.4)] hover:border-secondary hover:scale-105 transition-all duration-300"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground text-background group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
          <XLogo className="w-5 h-5 group-hover:text-background" />
        </span>
        <span className="font-medium text-sm text-foreground/90 group-hover:text-foreground">
          Follow on X
        </span>
      </a>

      <a
        href="https://t.me/+Z2ehPyJUQsAwOGRh"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-5 py-3 bg-background/90 backdrop-blur-xl border border-secondary rounded-full shadow-2xl shadow-black/20 hover:shadow-[0_0_30px_-5px_hsl(var(--secondary)/0.4)] hover:border-secondary hover:scale-105 transition-all duration-300"
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0088cc] text-white group-hover:bg-secondary group-hover:text-background transition-colors duration-300">
          <MessageCircle className="w-4 h-4" />
        </span>
        <span className="font-medium text-sm text-foreground/90 group-hover:text-foreground">
          Join Community
        </span>
      </a>
    </div>
  );
};
