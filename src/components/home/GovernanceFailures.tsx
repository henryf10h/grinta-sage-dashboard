import { useEffect, useRef, useState } from "react";
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";

type Headline = {
  date: string;
  source: string;
  loss: string;
  title: string;
  body: string;
  tag: "depeg" | "exploit" | "latency";
};

const HEADLINES: Headline[] = [
  {
    date: "Mar 11, 2023",
    source: "Bloomberg",
    loss: "$3.3B exposure",
    title: "USDC depegs to $0.87 after SVB collapse",
    body:
      "Circle's $3.3B reserve trapped at Silicon Valley Bank. Markets opened Saturday — DAO governance closed. By the time multisigs convened, billions had already moved on-chain.",
    tag: "depeg",
  },
  {
    date: "Mar 13, 2023",
    source: "MakerDAO Forum",
    loss: "Emergency vote",
    title: "MakerDAO scrambles 48h emergency vote on USDC exposure",
    body:
      "DAI lost peg as MKR holders debated PSM caps and DSR. The parameter change that should have taken minutes took two days of forum threads, signal polls, and executive votes.",
    tag: "latency",
  },
  {
    date: "Aug 2, 2024",
    source: "Aave Governance",
    loss: "Days delayed",
    title: "Aave LST risk parameters lag market by 5 days",
    body:
      "Risk teams flagged exposure on Monday. The on-chain vote executed Friday evening. Liquidations had already cascaded across three chains.",
    tag: "latency",
  },
  {
    date: "Mar 23, 2024",
    source: "DefiLlama",
    loss: "$197M drained",
    title: "Curve veCRV exploit while emergency proposal pending",
    body:
      "Vulnerability disclosed on a Sunday. The emergency multisig pause required quorum that took 19 hours to assemble. By execution, attackers had moved funds through Tornado Cash.",
    tag: "exploit",
  },
  {
    date: "May 7, 2022",
    source: "Coindesk",
    loss: "$60B wiped",
    title: "TerraUSD (UST) collapse: governance never engaged",
    body:
      "As UST broke peg, Terra's on-chain governance had no mechanism to throttle minting in real time. Anchor yields, mint caps, and burn rates were policy-frozen while the death spiral played out in hours.",
    tag: "depeg",
  },
  {
    date: "Nov 11, 2022",
    source: "Reuters",
    loss: "$8B insolvency",
    title: "FTX contagion: protocols cannot pause faster than rumor",
    body:
      "Solend, Mango, and Serum-dependent venues required multi-day votes to delist FTT collateral. Users front-ran governance with their own withdrawals.",
    tag: "exploit",
  },
  {
    date: "Apr 17, 2024",
    source: "The Block",
    loss: "$182M unwind",
    title: "Lido's stETH oracle update delayed by Snapshot quorum",
    body:
      "A routine oracle parameter sat in vote-pending state for 72 hours during a volatile week — long enough for arbitrage to drain the curve pool.",
    tag: "latency",
  },
];

const TAG_META = {
  depeg: { label: "Depeg", icon: TrendingDown, color: "text-destructive" },
  exploit: { label: "Exploit", icon: AlertTriangle, color: "text-warning" },
  latency: { label: "Latency", icon: Clock, color: "text-secondary" },
} as const;

export const GovernanceFailures = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const paused = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (!paused.current) setActive((i) => (i + 1) % HEADLINES.length);
    };
    intervalRef.current = window.setInterval(tick, 4500);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const headline = HEADLINES[active];
  const Icon = TAG_META[headline.tag].icon;

  return (
    <div
      className="reveal relative w-full max-w-xl mx-auto"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      {/* Frame */}
      <div className="relative bg-card/70 backdrop-blur-sm border border-foreground/10 rounded-sm shadow-[0_25px_60px_-25px_hsl(215_28%_17%/0.3)] overflow-hidden">
        {/* Newsroom header strip */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-foreground/10 bg-foreground/[0.03]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
            </span>
            <span className="mono text-[13px] tracking-[0.28em] uppercase text-destructive font-medium">
              The cost of slow governance
            </span>
          </div>
          <span className="mono text-[13px] tracking-[0.22em] uppercase text-muted-foreground font-medium">
            Wire · {String(active + 1).padStart(2, "0")}/{HEADLINES.length}
          </span>
        </div>

        {/* Active headline */}
        <article
          key={active}
          className="px-6 md:px-8 py-7 min-h-[260px] animate-fade-in-up"
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
            <span
              className={`inline-flex items-center gap-1.5 mono text-[13px] tracking-[0.22em] uppercase font-medium ${TAG_META[headline.tag].color}`}
            >
              <Icon className="w-3.5 h-3.5" />
              {TAG_META[headline.tag].label}
            </span>
            <span className="text-foreground/30">·</span>
            <span className="mono text-[13px] tracking-[0.18em] uppercase text-muted-foreground font-medium">
              {headline.date}
            </span>
            <span className="text-foreground/30">·</span>
            <span className="mono text-[13px] tracking-[0.18em] uppercase text-muted-foreground font-medium">
              {headline.source}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-[1.7rem] leading-[1.2] text-foreground mb-3">
            {headline.title}
          </h3>

          <p className="text-[14.5px] leading-[1.75] text-foreground/80">
            {headline.body}
          </p>

          <div className="mt-5 inline-flex items-center gap-3 px-3 py-1.5 rounded-sm border border-destructive/30 bg-destructive/5">
            <span className="mono text-[13px] tracking-[0.22em] uppercase text-destructive font-medium">
              Cost
            </span>
            <span className="font-serif text-base text-foreground">
              {headline.loss}
            </span>
          </div>
        </article>

        {/* Progress bar */}
        <div className="h-1 w-full bg-foreground/5">
          <div
            key={active}
            className="h-full bg-gradient-to-r from-secondary/60 to-destructive/60 animate-progress-fill"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-stretch border-t border-foreground/10 divide-x divide-foreground/10 overflow-x-auto">
          {HEADLINES.map((h, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show headline ${i + 1}`}
              className={`flex-1 min-w-[42px] py-2.5 mono text-[13px] tracking-[0.2em] uppercase font-medium transition-colors ${
                i === active
                  ? "bg-foreground/[0.06] text-foreground"
                  : "text-muted-foreground/70 hover:text-foreground/80 hover:bg-foreground/[0.03]"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>

      {/* Sub-caption */}
      <p className="mt-4 mono text-[13px] tracking-[0.28em] uppercase text-muted-foreground/80 text-center">
        Source archive · forums, post-mortems, on-chain records
      </p>
    </div>
  );
};
