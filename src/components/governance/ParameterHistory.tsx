import { ExternalLink } from "lucide-react";
import { VOYAGER_BASE } from "@/config/mockData";

export interface HistoryRow {
  id: string;
  time: string;
  action: string;
  kpChange: string;
  ki: string;
  txHash: string;
}

export const ParameterHistory = ({ rows }: { rows: HistoryRow[] }) => {
  return (
    <section className="mb-10">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-2xl font-semibold">Parameter History</h2>
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Session ledger
        </span>
      </div>
      <div className="marble-card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase tracking-wider text-muted-foreground">
            <tr>
              <th className="text-left px-5 py-3 font-medium">Time</th>
              <th className="text-left px-5 py-3 font-medium">Action</th>
              <th className="text-left px-5 py-3 font-medium">KP</th>
              <th className="text-left px-5 py-3 font-medium">KI</th>
              <th className="text-left px-5 py-3 font-medium">Tx</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-muted-foreground italic font-serif">
                  No parameter changes yet — the governor has not spoken.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-t border-border/60 hover:bg-accent/40 transition-colors">
                  <td className="px-5 py-3 mono text-xs text-muted-foreground">{r.time}</td>
                  <td className="px-5 py-3 font-serif italic">{r.action}</td>
                  <td className="px-5 py-3 mono">{r.kpChange}</td>
                  <td className="px-5 py-3 mono">{r.ki}</td>
                  <td className="px-5 py-3">
                    <a
                      href={`${VOYAGER_BASE}${r.txHash}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mono text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {r.txHash.slice(0, 8)}… <ExternalLink size={11} />
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
