import { Check, X, Minus } from "lucide-react";

type Cell = { kind: "yes" | "no" | "partial"; label: string };

const ROWS: { capability: string; trad: Cell; advisor: Cell; grinta: Cell }[] = [
  {
    capability: "Response latency",
    trad: { kind: "no", label: "Days" },
    advisor: { kind: "partial", label: "Hours" },
    grinta: { kind: "yes", label: "Block-time" },
  },
  {
    capability: "On-chain enforced bounds",
    trad: { kind: "no", label: "No" },
    advisor: { kind: "no", label: "No" },
    grinta: { kind: "yes", label: "Yes" },
  },
  {
    capability: "Model-agnostic agents",
    trad: { kind: "no", label: "—" },
    advisor: { kind: "partial", label: "Single model" },
    grinta: { kind: "yes", label: "Any ERC-8004 agent" },
  },
  {
    capability: "Per-call agent payments",
    trad: { kind: "no", label: "—" },
    advisor: { kind: "partial", label: "Manual" },
    grinta: { kind: "yes", label: "X402 native" },
  },
  {
    capability: "Auditable decisions (PDR)",
    trad: { kind: "partial", label: "Forum posts" },
    advisor: { kind: "partial", label: "Off-chain logs" },
    grinta: { kind: "yes", label: "On-chain records" },
  },
  {
    capability: "Emergency stop",
    trad: { kind: "partial", label: "Multi-sig vote" },
    advisor: { kind: "no", label: "Manual" },
    grinta: { kind: "yes", label: "Bounded + circuit breaker" },
  },
];

const Icon = ({ kind }: { kind: Cell["kind"] }) => {
  if (kind === "yes")
    return <Check className="w-4 h-4 text-primary shrink-0" />;
  if (kind === "no")
    return <X className="w-4 h-4 text-destructive/70 shrink-0" />;
  return <Minus className="w-4 h-4 text-muted-foreground shrink-0" />;
};

export const CompareTable = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="reveal mono text-[14px] tracking-[0.4em] text-secondary uppercase mb-5">
            Comparison
          </p>
          <h2 className="reveal font-serif text-4xl md:text-6xl tracking-tight">
            How Grinta <span className="italic text-gradient-teal">compares</span>.
          </h2>
          <p className="reveal mt-5 text-base md:text-lg text-foreground/75 max-w-2xl mx-auto">
            Bounded autonomy is not a tradeoff between safety and speed. It
            delivers both.
          </p>
        </div>

        {/* Desktop table */}
        <div className="reveal hidden md:block overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-muted/40 border-b border-border/60">
                <th className="px-6 py-4 font-serif text-base text-foreground/70">
                  Capability
                </th>
                <th className="px-6 py-4 font-serif text-base text-foreground/70">
                  Traditional DAO
                </th>
                <th className="px-6 py-4 font-serif text-base text-foreground/70">
                  AI Advisor (off-chain)
                </th>
                <th className="px-6 py-4 font-serif text-base text-primary border-l border-primary/30 bg-primary/5">
                  Grinta + Horos
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.capability}
                  className={
                    i !== ROWS.length - 1 ? "border-b border-border/40" : ""
                  }
                >
                  <td className="px-6 py-4 font-medium text-sm md:text-base">
                    {row.capability}
                  </td>
                  <td className="px-6 py-4 text-sm md:text-base text-foreground/75">
                    <span className="inline-flex items-center gap-2">
                      <Icon kind={row.trad.kind} />
                      {row.trad.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm md:text-base text-foreground/75">
                    <span className="inline-flex items-center gap-2">
                      <Icon kind={row.advisor.kind} />
                      {row.advisor.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm md:text-base font-medium border-l border-primary/30 bg-primary/5">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <Icon kind={row.grinta.kind} />
                      {row.grinta.label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden reveal-stagger space-y-4">
          {ROWS.map((row) => (
            <div
              key={row.capability}
              className="rounded-xl border border-border/60 bg-card/70 p-5"
            >
              <p className="font-serif text-base mb-3">{row.capability}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Traditional DAO</span>
                  <span className="inline-flex items-center gap-2">
                    <Icon kind={row.trad.kind} />
                    {row.trad.label}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">AI Advisor</span>
                  <span className="inline-flex items-center gap-2">
                    <Icon kind={row.advisor.kind} />
                    {row.advisor.label}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-primary/30">
                  <span className="text-primary font-medium">
                    Grinta + Horos
                  </span>
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Icon kind={row.grinta.kind} />
                    {row.grinta.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
