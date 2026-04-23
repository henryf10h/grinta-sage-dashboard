type RiskCell = { kind: "yes" | "no"; label: string };

type Row = {
  name: string;
  humanRisk: RiskCell;
  marketCap: string;
  tvl: string;
  maxYield: string;
  depeg: string;
  highlight?: boolean;
};

const ROWS: Row[] = [
  {
    name: "USDC",
    humanRisk: { kind: "yes", label: "Yes" },
    marketCap: "~$75.6B",
    tvl: "High in DeFi",
    maxYield: "6–8% APY",
    depeg: "Yes (2023 SVB)",
  },
  {
    name: "USDT",
    humanRisk: { kind: "yes", label: "Yes" },
    marketCap: "~$187B",
    tvl: "DeFi leader",
    maxYield: "2–6% APY",
    depeg: "Minimal",
  },
  {
    name: "DAI",
    humanRisk: { kind: "yes", label: "Yes" },
    marketCap: "~$5.4B",
    tvl: "~$2.3B (RWAs)",
    maxYield: "5–8% APY",
    depeg: "Yes (2023 slips)",
  },
  {
    name: "Grinta",
    humanRisk: { kind: "no", label: "No" },
    marketCap: "n/a (testnet)",
    tvl: "n/a (testnet)",
    maxYield: "Yield Bounded 8%+",
    depeg: "None (bounded)",
    highlight: true,
  },
];

const ROMAN = ["I", "II", "III", "IV"];

const RISK_NO = "no" as const;
const RISK_YES = "yes" as const;
void RISK_NO;
void RISK_YES;


export const CompareTable = () => {
  return (
    <section className="relative px-6 py-12 md:py-16">
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
        <div className="text-center mb-10">
          <p className="reveal mono text-[12px] md:text-[13px] tracking-[0.4em] uppercase text-secondary/80 mb-4">
            What is the market?
          </p>
          <h2 className="reveal font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
            How we{" "}
            <span className="italic text-gradient-teal">compare</span>.
          </h2>
          <p className="reveal mt-6 font-serif italic text-lg md:text-xl text-black max-w-3xl mx-auto">
            The stablecoin market has a current TAM (market capitalization) of approximately $320 billion, with Citi projections estimating a base scenario of $1.9 trillion and a bullish case of up to $4 trillion by 2030.
          </p>
        </div>

        {/* Desktop scorecard */}
        <div className="reveal hidden md:block relative">
          <div className="relative grid grid-cols-12 gap-0 border-y border-foreground/15">
            {/* Column headers */}
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10">
              Stablecoin
            </div>
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 border-l border-foreground/10">
              Human Risk
            </div>
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 border-l border-foreground/10">
              Market Cap
            </div>
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 border-l border-foreground/10">
              TVL
            </div>
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 border-l border-foreground/10">
              Max Yield
            </div>
            <div className="col-span-2 px-4 py-6 mono text-[13px] tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 border-l border-foreground/10">
              Depeg History
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => {
              const isHL = row.highlight;
              const cellBase =
                "px-4 py-6 text-base border-b last:border-b-0 border-l";
              const cellTone = isHL
                ? "border-primary/20 border-l-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 text-foreground"
                : "border-foreground/10 border-l-foreground/10 text-foreground/75";

              return (
                <div key={row.name} className="contents group">
                  <div
                    className={`col-span-2 px-4 py-6 flex items-baseline gap-3 border-b last:border-b-0 ${
                      isHL
                        ? "border-primary/20 bg-gradient-to-b from-primary/5 to-primary/10"
                        : "border-foreground/10"
                    }`}
                  >
                    <span className="font-serif italic text-sm text-secondary/60 w-6 shrink-0">
                      {ROMAN[i]}
                    </span>
                    <span
                      className={`font-serif text-lg ${
                        isHL ? "text-primary font-medium" : ""
                      }`}
                    >
                      {row.name}
                    </span>
                  </div>
                  <div className={`col-span-2 ${cellBase} ${cellTone}`}>
                    <RiskBadge kind={row.humanRisk.kind} />
                  </div>
                  <div className={`col-span-2 ${cellBase} ${cellTone}`}>
                    {row.marketCap}
                  </div>
                  <div className={`col-span-2 ${cellBase} ${cellTone}`}>
                    {row.tvl}
                  </div>
                  <div className={`col-span-2 ${cellBase} ${cellTone}`}>
                    {row.maxYield}
                  </div>
                  <div className={`col-span-2 ${cellBase} ${cellTone}`}>
                    {row.depeg}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden reveal-stagger space-y-4">
          {ROWS.map((row, i) => (
            <div
              key={row.name}
              className={`rounded-sm border p-5 ${
                row.highlight
                  ? "border-primary/40 bg-gradient-to-b from-primary/5 to-primary/10"
                  : "border-foreground/15 bg-card/70"
              }`}
            >
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-serif italic text-sm text-secondary/70">
                  {ROMAN[i]}
                </span>
                <p
                  className={`font-serif text-lg ${
                    row.highlight ? "text-primary font-medium" : ""
                  }`}
                >
                  {row.name}
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Human Risk</span>
                  <RiskBadge kind={row.humanRisk.kind} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span>{row.marketCap}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">TVL</span>
                  <span>{row.tvl}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Max Yield</span>
                  <span>{row.maxYield}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Depeg History</span>
                  <span>{row.depeg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};