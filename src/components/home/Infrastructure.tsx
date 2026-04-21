import { Cpu, Lock, Code2, Zap } from "lucide-react";

/**
 * Infrastructure section — the execution framework: TEE, x402, Cairo, ERC-8004.
 * Editorial blueprint of the substrate that makes agentic governance trustworthy.
 */
export const Infrastructure = () => {
  const layers = [
    {
      icon: Lock,
      tag: "Execution",
      title: "TEE",
      caption: "Trusted Execution Environment",
      body: "Agents run inside hardware-attested enclaves. Inputs, weights and outputs are sealed — operators can prove what ran without revealing the model.",
    },
    {
      icon: Zap,
      tag: "Payments",
      title: "x402",
      caption: "HTTP-native micropayments",
      body: "Each agent call is metered and paid per inference. No subscriptions, no custody, no off-chain settlement.",
    },
    {
      icon: Code2,
      tag: "Bounds",
      title: "Cairo",
      caption: "On-chain enforcement",
      body: "Hard limits — leverage caps, rate brakes, circuit breakers — encoded as Cairo programs on Starknet. Autonomy that cannot exceed its mandate.",
    },
    {
      icon: Cpu,
      tag: "Identity",
      title: "ERC-8004",
      caption: "Agent registry",
      body: "Canonical addresses for autonomous agents. Reputation, history and rewards bound to a verifiable identity.",
    },
  ];

  return (
    <section id="infrastructure" className="relative px-6 py-12 md:py-16 overflow-hidden">
      {/* Cool slate atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(55% 45% at 50% 30%, hsl(215 30% 92% / 0.55) 0%, transparent 70%)",
        }}
      />
      {/* Blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="reveal font-serif text-5xl md:text-7xl tracking-tight leading-[0.95]">
            The execution{" "}
            <span className="italic text-gradient-teal">framework</span>.
          </h2>
          <p className="reveal mt-6 font-serif italic text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Sealed compute. Metered calls. On-chain bounds. A substrate where
            autonomous agents cannot lie, cannot overrun, and cannot escape the
            mandate.
          </p>
        </div>

        {/* TEE focal block */}
        <div className="reveal relative mb-12 rounded-sm border border-foreground/10 bg-card/80 overflow-hidden shadow-[0_20px_60px_-25px_hsl(215_28%_17%/0.25)]">
          <div className="grid md:grid-cols-12 gap-0">
            <div className="md:col-span-7 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-5">
                <Lock className="w-5 h-5 text-primary" />
                <span className="mono text-[13px] tracking-[0.4em] uppercase text-primary">
                  Execution Frame
                </span>
              </div>
              <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-5">
                Every inference{" "}
                <span className="italic text-gradient-teal">runs inside a TEE</span>.
              </h3>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
                The execution framework anchors agent computation in hardware-
                attested enclaves. The protocol can prove which model produced
                which estimate, on which inputs, at which block — without
                revealing proprietary weights.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Combined with on-chain bounds in Cairo and per-call x402
                payments, the result is an agent that{" "}
                <span className="italic">cannot</span> drift, cannot
                misrepresent, cannot operate beyond its sealed scope.
              </p>
            </div>
            <div className="md:col-span-5 relative bg-gradient-to-br from-primary/8 via-secondary/5 to-transparent border-t md:border-t-0 md:border-l border-foreground/10 p-8 md:p-12 flex flex-col justify-between">
              <div className="space-y-4">
                {[
                  ["Attestation", "Remote, hardware-rooted"],
                  ["Confidentiality", "Sealed weights & inputs"],
                  ["Integrity", "Cryptographic output proof"],
                  ["Auditability", "Per-call signed records"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-baseline justify-between gap-4 pb-3 border-b border-foreground/10 last:border-b-0"
                  >
                    <span className="mono text-[12px] tracking-[0.3em] uppercase text-muted-foreground">
                      {k}
                    </span>
                    <span className="font-serif text-base text-foreground text-right">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="mono text-[12px] tracking-widest text-primary uppercase">
                  Verifiable
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
