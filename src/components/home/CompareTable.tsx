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

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

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
      {/* Faint horizontal hairline pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 39px, hsl(var(--foreground)) 39px 40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="reveal mono text-[14px] tracking-[0.5em] text-secondary uppercase mb-6">
            Scorecard
          </p>
          <h2 className="reveal font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
            How Grinta{" "}
            <span className="italic text-gradient-teal">compares</span>.
          </h2>
          <p className="reveal mt-6 font-serif italic text-lg md:text-xl text-foreground/70 max-w-xl mx-auto">
            Bounded autonomy is not a tradeoff between safety and speed. It
            delivers both.
          </p>
        </div>

        {/* Desktop scorecard */}
        <div className="reveal hidden md:block relative">
          {/* Recommended ribbon over Grinta column */}
          <div className="absolute -top-4 right-0 w-1/4 flex justify-center">
            <span className="font-serif italic text-sm text-secondary bg-background px-3 py-1 border border-secondary/40 rounded-full shadow-sm">
              Recommended
            </span>
          </div>

          <div className="relative grid grid-cols-12 gap-0 border-y border-foreground/15">
            {/* Column headers */}
            <div className="col-span-3 px-4 py-6 mono text-[14px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10">
              Capability
            </div>
            <div className="col-span-3 px-6 py-6 font-serif text-lg text-foreground/70 border-b border-foreground/10 border-l border-foreground/10">
              Traditional DAO
            </div>
            <div className="col-span-3 px-6 py-6 font-serif text-lg text-foreground/70 border-b border-foreground/10 border-l border-foreground/10">
              AI Advisor
            </div>
            <div className="col-span-3 px-6 py-6 font-serif text-lg text-primary border-b border-primary/30 border-l border-primary/30 bg-gradient-to-b from-primary/10 to-primary/5">
              Grinta + Horos
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div key={row.capability} className="contents group">
                <div className="col-span-3 px-4 py-6 flex items-baseline gap-3 border-b border-foreground/10 last:border-b-0">
                  <span className="font-serif italic text-sm text-secondary/60 w-6 shrink-0">
                    {ROMAN[i]}
                  </span>
                  <span className="font-serif text-base">{row.capability}</span>
                </div>
                <div className="col-span-3 px-6 py-6 text-base text-foreground/75 border-b border-foreground/10 border-l border-foreground/10 last:border-b-0">
                  <span className="inline-flex items-center gap-2">
                    <Icon kind={row.trad.kind} />
                    {row.trad.label}
                  </span>
                </div>
                <div className="col-span-3 px-6 py-6 text-base text-foreground/75 border-b border-foreground/10 border-l border-foreground/10 last:border-b-0">
                  <span className="inline-flex items-center gap-2">
                    <Icon kind={row.advisor.kind} />
                    {row.advisor.label}
                  </span>
                </div>
                <div className="col-span-3 px-6 py-6 text-base font-medium border-b border-primary/20 border-l border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 last:border-b-0">
                  <span className="inline-flex items-center gap-2 text-foreground">
                    <Icon kind={row.grinta.kind} />
                    {row.grinta.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden reveal-stagger space-y-4">
          {ROWS.map((row, i) => (
            <div
              key={row.capability}
              className="rounded-sm border border-foreground/15 bg-card/70 p-5"
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif italic text-sm text-secondary/70">
                  {ROMAN[i]}
                </span>
                <p className="font-serif text-base">{row.capability}</p>
              </div>
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
