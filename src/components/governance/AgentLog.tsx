import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { VOYAGER_BASE } from "@/config/mockData";

export type LogKind = "monitor" | "reason" | "submit" | "confirm" | "rotate";

export interface LogEntry {
  id: string;
  time: string;
  kind: LogKind;
  text: string;
  txHash?: string;
}

const ICONS: Record<LogKind, string> = {
  monitor: "🔍",
  reason: "🧠",
  submit: "📝",
  confirm: "✅",
  rotate: "🔄",
};

export const AgentLog = ({ entries }: { entries: LogEntry[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [entries.length]);

  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">Agent Reasoning</h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Live deliberation
        </span>
      </div>

      <div className="marble-card overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-border/60 bg-muted/40">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-warning/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-success/60" />
          </div>
          <span className="text-xs text-muted-foreground mono ml-2">agent.governor.starknet</span>
        </div>

        <div
          ref={scrollRef}
          className="h-[420px] overflow-y-auto px-6 py-5 bg-gradient-to-b from-background/40 to-muted/20 space-y-3"
        >
          {entries.length === 0 && (
            <p className="text-muted-foreground italic font-serif text-center py-12">
              The governor watches in silence…
            </p>
          )}
          {entries.map((e) => (
            <LogLine key={e.id} entry={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LogLine = ({ entry }: { entry: LogEntry }) => {
  const isReason = entry.kind === "reason";
  return (
    <div className={cn("flex gap-3 animate-fade-in-up", isReason && "py-2")}>
      <span className="mono text-xs text-muted-foreground shrink-0 w-20 pt-1">{entry.time}</span>
      <span className="text-lg shrink-0 leading-tight">{ICONS[entry.kind]}</span>
      <div className="flex-1 min-w-0">
        {isReason ? (
          <p className="agent-quote border-l-2 border-secondary/60 pl-4 py-1">
            "{entry.text}"
          </p>
        ) : (
          <p className="text-sm text-foreground/85 leading-relaxed">
            {entry.text}
            {entry.txHash && (
              <>
                {" "}
                <a
                  href={`${VOYAGER_BASE}${entry.txHash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mono text-xs text-primary hover:text-primary/80 underline underline-offset-2 inline-flex items-center gap-1"
                >
                  {entry.txHash.slice(0, 8)}…{entry.txHash.slice(-4)}
                  <ExternalLink size={11} />
                </a>
              </>
            )}
          </p>
        )}
      </div>
    </div>
  );
};
