import { TrendingDown, TrendingUp, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  onCrash: () => void;
  onPump: () => void;
  busy: boolean;
}

export const CheatControls = ({ onCrash, onPump, busy }: Props) => {
  return (
    <section className="mb-10">
      <div className="marble-card p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        <div className="text-center mb-6 relative">
          <h2 className="text-2xl font-semibold mb-1">Market Simulation</h2>
          <p className="text-sm text-muted-foreground italic font-serif">
            Manipulate the oracle to summon the AI Governor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          <SimButton
            onClick={onCrash}
            disabled={busy}
            label="Crash BTC −20%"
            icon={<TrendingDown size={22} />}
            variant="crash"
            busy={busy}
          />
          <SimButton
            onClick={onPump}
            disabled={busy}
            label="Pump BTC +20%"
            icon={<TrendingUp size={22} />}
            variant="pump"
            busy={busy}
          />
        </div>
      </div>
    </section>
  );
};

const SimButton = ({
  onClick, disabled, label, icon, variant, busy,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
  icon: React.ReactNode;
  variant: "crash" | "pump";
  busy: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "group relative h-20 rounded-xl text-white font-medium text-lg",
        "flex items-center justify-center gap-3",
        "transition-all duration-200",
        "shadow-[var(--shadow-press)]",
        "hover:translate-y-[-2px] hover:shadow-[0_10px_24px_hsl(215_28%_17%/0.18)]",
        "active:translate-y-[1px] active:shadow-inner",
        "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      )}
      style={{
        background: variant === "crash" ? "var(--gradient-crash)" : "var(--gradient-pump)",
      }}
    >
      {busy ? <Loader2 className="animate-spin" size={22} /> : icon}
      <span className="font-sans tracking-wide">{label}</span>
    </button>
  );
};
