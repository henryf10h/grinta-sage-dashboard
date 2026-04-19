import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  sublabel?: string;
  value: string | number;
  trend?: ReactNode;
  tone?: "default" | "success" | "warning" | "destructive";
  icon?: ReactNode;
}

export const MetricCard = ({ label, sublabel, value, trend, tone = "default", icon }: MetricCardProps) => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 1200);
    return () => clearTimeout(t);
  }, [value]);

  const toneClass = {
    default: "text-foreground",
    success: "text-success",
    warning: "text-warning",
    destructive: "text-destructive",
  }[tone];

  return (
    <div className={cn("marble-card p-6 transition-all hover:shadow-glow-teal hover:-translate-y-0.5", pulse && "pulse-update")}
      style={{ transitionProperty: "transform, box-shadow, background-color" }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{label}</p>
          {sublabel && <p className="text-[10px] uppercase tracking-wider text-primary/70 mt-0.5">{sublabel}</p>}
        </div>
        {icon && <div className="text-primary/60">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className={cn("text-3xl font-semibold mono tabular-nums", toneClass)}>{value}</span>
        {trend && <span className="text-sm font-medium">{trend}</span>}
      </div>
    </div>
  );
};
