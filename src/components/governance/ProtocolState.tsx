import { ArrowDown, ArrowUp, Activity, Coins, Gauge, Scale, Sigma, TrendingUp } from "lucide-react";
import { MetricCard } from "./MetricCard";
import type { ProtocolState as State } from "@/config/mockData";

export const ProtocolState = ({ state }: { state: State }) => {
  const dev = Math.abs(state.deviation);
  const devTone = dev < 2 ? "success" : dev < 5 ? "warning" : "destructive";

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">Protocol State</h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">Live · On-chain</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <MetricCard
          label="BTC Price"
          sublabel="Oracle"
          value={`$${state.btcPrice.toLocaleString()}`}
          icon={<Coins size={18} />}
        />
        <MetricCard
          label="GRIT Price"
          sublabel="Market"
          value={`$${state.gritPrice.toFixed(3)}`}
          icon={<Activity size={18} />}
        />
        <MetricCard
          label="Deviation"
          sublabel="from peg"
          value={`${state.deviation >= 0 ? "+" : ""}${state.deviation.toFixed(2)}%`}
          tone={devTone}
          icon={<Scale size={18} />}
        />
        <MetricCard
          label="KP"
          sublabel="Proportional"
          value={state.kp.toFixed(2)}
          icon={<Gauge size={18} />}
        />
        <MetricCard
          label="KI"
          sublabel="Integral"
          value={state.ki.toFixed(4)}
          icon={<Sigma size={18} />}
        />
        <MetricCard
          label="Redemption Rate"
          sublabel="per epoch"
          value={state.redemptionRate.toFixed(4)}
          icon={<TrendingUp size={18} />}
          trend={
            state.rateDirection === "up" ? (
              <span className="text-success inline-flex items-center"><ArrowUp size={14} /></span>
            ) : state.rateDirection === "down" ? (
              <span className="text-destructive inline-flex items-center"><ArrowDown size={14} /></span>
            ) : null
          }
        />
      </div>
    </section>
  );
};
