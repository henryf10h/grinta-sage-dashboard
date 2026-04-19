import { useCallback, useState } from "react";
import { Header } from "@/components/governance/Header";
import { ProtocolState } from "@/components/governance/ProtocolState";
import { CheatControls } from "@/components/governance/CheatControls";
import { AgentLog, type LogEntry } from "@/components/governance/AgentLog";
import { ParameterHistory, type HistoryRow } from "@/components/governance/ParameterHistory";
import {
  INITIAL_STATE,
  CRASH_SCENARIO,
  PUMP_SCENARIO,
  type ProtocolState as State,
} from "@/config/mockData";
import column from "@/assets/column.png";

const now = () => {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
};

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

const Index = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "init",
      time: now(),
      kind: "monitor",
      text: "Connected to Starknet Sepolia. Watching protocol state…",
    },
  ]);
  const [history, setHistory] = useState<HistoryRow[]>([]);
  const [busy, setBusy] = useState(false);

  const addLog = useCallback((entry: Omit<LogEntry, "id" | "time">) => {
    setLogs((prev) => [
      ...prev,
      { ...entry, id: `${Date.now()}-${Math.random()}`, time: now() },
    ]);
  }, []);

  const runScenario = useCallback(
    async (kind: "crash" | "pump") => {
      if (busy) return;
      const prevState = state;
      const s = kind === "crash" ? CRASH_SCENARIO : PUMP_SCENARIO;
      const label = kind === "crash" ? "−20%" : "+20%";
      const verb = kind === "crash" ? "crashed" : "rallied";
      setBusy(true);

      addLog({ kind: "monitor", text: "Reading protocol state from Starknet…" });
      await wait(1200);

      setState((p) => ({ ...p, btcPrice: s.newBtc, gritPrice: s.newGrit, deviation: s.newDeviation }));
      addLog({
        kind: "monitor",
        text: `BTC: $${s.newBtc.toLocaleString()} (${label}) | GRIT: $${s.newGrit.toFixed(3)} | Deviation: ${s.newDeviation.toFixed(1)}%`,
      });
      await wait(1500);

      addLog({ kind: "reason", text: s.reasoning });
      await wait(2000);

      addLog({
        kind: "submit",
        text: `Submitting propose_parameters(KP=${s.newKp}, KI=${prevState.ki}, emergency=${kind === "crash"})`,
      });
      await wait(2200);

      addLog({
        kind: "confirm",
        text: `Confirmed on Starknet —`,
        txHash: s.txHash,
      });

      setState((p) => ({ ...p, kp: s.newKp }));
      setHistory((h) => [
        ...h,
        {
          id: `${Date.now()}`,
          time: now(),
          action: kind === "crash" ? "Governor raised KP" : "Governor lowered KP",
          kpChange: `${prevState.kp.toFixed(1)} → ${s.newKp.toFixed(1)}`,
          ki: prevState.ki.toFixed(4),
          txHash: s.txHash,
        },
      ]);
      await wait(1500);

      addLog({ kind: "rotate", text: "Triggering micro-swap to update redemption rate…" });
      await wait(1800);

      const oldRate = prevState.redemptionRate;
      addLog({
        kind: "confirm",
        text: `Rate updated: ${oldRate.toFixed(4)} → ${s.newRate.toFixed(4)} (${kind === "crash" ? "+" : ""}${(((s.newRate - oldRate) / oldRate) * 100).toFixed(0)}% adjustment)`,
      });
      setState((p) => ({ ...p, redemptionRate: s.newRate, rateDirection: s.direction }));

      setBusy(false);
    },
    [busy, state, addLog]
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative columns */}
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="hidden lg:block fixed left-0 top-1/2 -translate-y-1/2 h-[80vh] w-auto opacity-[0.04] pointer-events-none select-none"
      />
      <img
        src={column}
        alt=""
        aria-hidden="true"
        className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 h-[80vh] w-auto opacity-[0.04] pointer-events-none select-none scale-x-[-1]"
      />

      <main className="container max-w-6xl mx-auto px-6 py-10 relative">
        <Header />
        <ProtocolState state={state} />
        <CheatControls
          onCrash={() => runScenario("crash")}
          onPump={() => runScenario("pump")}
          busy={busy}
        />
        <AgentLog entries={logs} />
        <ParameterHistory rows={history} />

        <footer className="text-center text-xs text-muted-foreground mt-12 pb-6 italic font-serif">
          "The unexamined protocol is not worth governing." — The Governor
        </footer>
      </main>
    </div>
  );
};

export default Index;
