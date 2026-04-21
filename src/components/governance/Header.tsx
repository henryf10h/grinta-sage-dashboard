import { ExternalLink } from "lucide-react";
import philosopher from "@/assets/philosopher.png";

export const Header = () => {
  return (
    <header className="flex items-center justify-between gap-6 mb-10">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={philosopher}
            alt="Philosopher governor"
            width={64}
            height={64}
            className="w-16 h-16 object-contain animate-glow-pulse rounded-full"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Grinta <span className="text-gradient-teal">Governance</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground italic font-serif mt-1">
            Agent-as-Governor — AI-Driven Parameter Control
          </p>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 marble-card !rounded-full text-xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="font-medium text-foreground">Starknet Sepolia</span>
        </div>
        <a
          href="https://reflecterlabs.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors"
        >
          Powered by Reflecter Labs
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </header>
  );
};
