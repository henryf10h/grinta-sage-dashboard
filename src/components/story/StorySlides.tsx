import { StoryFrame } from "./StoryFrame";
import slide1 from "@/assets/slide1-crack.jpg";
import slide2 from "@/assets/slide2-hourglass.jpg";
import slide3 from "@/assets/slide3-owl-column.jpg";
import slide4 from "@/assets/slide4-tablets.jpg";
import slide5 from "@/assets/slide5-scales.jpg";
import slide6 from "@/assets/slide6-waterclock.jpg";
import slide7 from "@/assets/slide7-plaques.jpg";
import slide8 from "@/assets/slide8-owl-frieze.jpg";
import slide9 from "@/assets/slide9-roadmap-frieze.jpg";
import slide10 from "@/assets/slide10-scroll.jpg";
import { ExternalLink, ArrowDown } from "lucide-react";

const TOTAL = 10;

const GoldQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="reveal font-serif italic text-2xl md:text-3xl lg:text-4xl leading-snug text-secondary max-w-4xl border-l-2 border-secondary/60 pl-6 my-8">
    "{children}"
  </blockquote>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="reveal mono text-[11px] tracking-[0.4em] text-primary/80 uppercase mb-6">
    {children}
  </p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="reveal font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight mb-6">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="reveal text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl">
    {children}
  </p>
);

const VisualFrame = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`reveal-scale relative ${className}`}>
    <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-2xl" />
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(60,80,90,0.18)]"
    />
  </div>
);

export const StorySlides = () => {
  const scrollToDemo = () => {
    document.getElementById("slide-6")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SLIDE 1 — TRAUMA */}
      <StoryFrame
        id="slide-1"
        index={1}
        total={TOTAL}
        story='Cálicles llega al Ágora con las manos manchadas de sal y sangre. "¡Nuestras leyes nos hundieron!"'
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>I · Trauma</Eyebrow>
            <Title>
              March 12, 2020.
              <br />
              <span className="text-gradient-teal">ETH fell 43%</span> in 24 hours.
            </Title>
            <Body>
              MakerDAO had an active proposal to adjust liquidation parameters. It took
              three days to pass. By then, $8.3&nbsp;million in DAI had been liquidated for zero.
            </Body>
            <GoldQuote>The protocol worked exactly as designed. The design was broken.</GoldQuote>
          </div>
          <div data-parallax="0.1">
            <VisualFrame src={slide1} alt="Cracked marble slab with blood drop" />
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 2 — DIAGNOSIS */}
      <StoryFrame
        id="slide-2"
        index={2}
        total={TOTAL}
        story='Cálicles busca a su maestro Tales de Mileto. "Votamos cada parámetro… cuando el mar cambia en minutos, nosotros votamos en días. La latencia nos mata."'
      >
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div data-parallax="0.15" className="md:col-span-2 order-2 md:order-1">
            <VisualFrame src={slide2} alt="Marble hourglass with golden sand" />
          </div>
          <div className="md:col-span-3 order-1 md:order-2">
            <Eyebrow>II · The Structural Flaw</Eyebrow>
            <Title>Latency Kills.</Title>
            <Body>
              DeFi governance suffers from a fatal latency gap. Markets move in seconds.
              Parameter adjustments take days. When BTC crashes 20% in an hour, you need to
              adjust collateral ratios <em>now</em>. But a governance proposal requires
              drafting → forum discussion → quorum → timelock → execution.
              <br />
              <br />
              <span className="text-foreground">Days. While users are liquidated.</span>
            </Body>
            <GoldQuote>
              The bottleneck isn't intelligence. It's the infrastructure of decision-making.
            </GoldQuote>
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 3 — AHA */}
      <StoryFrame
        id="slide-3"
        index={3}
        total={TOTAL}
        story='Tales traza un círculo. "¿Y si la Asamblea votara las reglas del juego? El demos vota la Constitución. Un autómata ejecuta dentro de esos límites."'
      >
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <Eyebrow>III · The Insight</Eyebrow>
            <Title>
              What if the DAO voted on
              <br />
              <span className="italic text-gradient-gold">policies</span>, not parameters?
            </Title>
            <Body>
              Not <span className="mono text-base">"Set fee to 0.05%."</span> But:
              <br />
              <span className="font-serif italic text-foreground text-2xl">
                "Fee may range from 0.01% to 1.00%. Max change per update: 0.10%. Cooldown: 60s."
              </span>
              <br />
              <br />
              The DAO defines the playing field. An autonomous agent plays within it —
              continuously, in real time, on every block.
            </Body>
            <div className="reveal mt-8 flex flex-wrap gap-2">
              {["Uniswap", "Aave", "Ekubo", "Flaunch", "Any protocol"].map((p) => (
                <span
                  key={p}
                  className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm mono text-primary"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div data-parallax="0.2" className="md:col-span-2">
            <VisualFrame src={slide3} alt="Owl perched on Ionic marble column" />
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 4 — MECHANISM */}
      <StoryFrame
        id="slide-4"
        index={4}
        total={TOTAL}
        story='Cálicles esculpe tres losas: límites, delta máximo, enfriamiento. "Lo llamamos: Horos Protocol — la ley que no puede ser cruzada."'
      >
        <div className="text-center mb-12">
          <Eyebrow>IV · Mechanism</Eyebrow>
          <Title>
            Parameter Guard
            <br />
            <span className="font-serif italic text-gradient-gold text-4xl md:text-5xl">
              "Lo llamamos: Horos Protocol."
            </span>
          </Title>
          <p className="reveal text-sm text-muted-foreground mono tracking-widest">
            HOROS · ὅρος · THE SACRED BOUNDARY
          </p>
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-6">
          {[
            {
              n: "I",
              t: "Protocols Define Policies",
              d: "Allowed parameter range, max change per update, cooldown, emergency stop.",
            },
            {
              n: "II",
              t: "Agents Execute Within Bounds",
              d: "Registered via ERC-8004, compete to propose, paid via X402.",
            },
            {
              n: "III",
              t: "Contracts Enforce Limits",
              d: "Validates bounds, delta, cooldown, records PDR on-chain.",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="group relative p-8 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] hover:-translate-y-1"
            >
              <div className="font-serif text-5xl text-primary/30 group-hover:text-primary/70 transition-colors mb-4">
                {c.n}
              </div>
              <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.d}</p>
              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            </div>
          ))}
        </div>

        <div data-parallax="0.08" className="mt-12 reveal-scale">
          <img
            src={slide4}
            alt="Three engraved marble tablets"
            loading="lazy"
            className="w-full max-w-3xl mx-auto opacity-90 drop-shadow-2xl"
          />
        </div>
      </StoryFrame>

      {/* SLIDE 5 — REFRAME */}
      <StoryFrame
        id="slide-5"
        index={5}
        total={TOTAL}
        story='Un anciano objeta: "Eso es menos libertad". Tales responde: "Un barco sin muros se hunde. Las restricciones crean seguridad."'
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-parallax="0.12">
            <VisualFrame src={slide5} alt="Marble scales of justice" />
          </div>
          <div>
            <Eyebrow>V · Reframe</Eyebrow>
            <Title>More secure than traditional governance.</Title>
            <div className="reveal-stagger space-y-3 mt-6">
              {[
                ["Traditional DAO", "Unbounded vote", "Days of latency", "Subject to whales / mev"],
                ["Horos Protocol", "Bounded autonomy", "Block-time response", "On-chain enforced limits"],
              ].map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-4 gap-2 p-4 rounded-xl border ${
                    i === 1
                      ? "border-primary/40 bg-primary/5"
                      : "border-border/60 bg-muted/40"
                  }`}
                >
                  {row.map((cell, j) => (
                    <span
                      key={j}
                      className={`text-sm ${
                        j === 0 ? "font-serif italic text-base" : "text-foreground/80"
                      }`}
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            <GoldQuote>Constraints create security. Boundaries enable autonomy.</GoldQuote>
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 6 — DEMO */}
      <StoryFrame
        id="slide-6"
        index={6}
        total={TOTAL}
        story='Cálicles muestra un reloj de agua conectado a un timón automático. El pueblo aplaude. Hoy ese timón está aquí.'
      >
        <div className="text-center mb-10">
          <Eyebrow>VI · Witness</Eyebrow>
          <Title>
            Witness the Governor
            <br />
            <span className="text-gradient-teal">in action.</span>
          </Title>
          <Body>
            We've already built it. A live AI agent adjusting parameters on Starknet
            Sepolia — in real time, within bounds set by the DAO. No mockup. No simulation.
            Real inference. Real execution.
          </Body>
        </div>

        <div className="reveal-scale relative max-w-4xl mx-auto">
          <a
            href="https://grinta-loop-shanghai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-1 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative rounded-3xl bg-card/90 backdrop-blur-xl p-8 md:p-12 border border-primary/30 overflow-hidden">
              {/* LIVE badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="mono text-[10px] tracking-[0.25em] text-primary uppercase">
                  Live
                </span>
              </div>

              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-2">
                  <img
                    src={slide6}
                    alt="Marble water-clock connected to a ship's rudder"
                    loading="lazy"
                    className="w-full max-w-[260px] mx-auto"
                  />
                </div>
                <div className="md:col-span-3 text-left">
                  <p className="mono text-xs tracking-widest text-secondary mb-2">
                    GRINTA-LOOP-SHANGHAI.ONRENDER.COM
                  </p>
                  <h3 className="font-serif text-3xl md:text-4xl mb-3">
                    Agent-as-Governor
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    AI-Driven Parameter Control · Starknet Sepolia
                  </p>
                  <div className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-primary-foreground font-medium shadow-[0_0_30px_hsl(var(--primary)/0.4)] animate-glow-pulse group-hover:scale-[1.02] transition-transform">
                    <ExternalLink className="w-5 h-5" />
                    Launch Live Demo
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    Watch the AI propose KP/KI adjustments as BTC price moves. See the PDR on-chain.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="reveal mt-10 max-w-3xl mx-auto">
          <GoldQuote>
            Cálicles lleva a la Asamblea al puerto. Hoy ese timón automático está aquí.
          </GoldQuote>
        </div>
      </StoryFrame>

      {/* SLIDE 7 — EVIDENCE */}
      <StoryFrame
        id="slide-7"
        index={7}
        total={TOTAL}
        story='Tales despliega papiros con evidencia de Mileto y Siracusa. "El vacío está en el mar: ningún gobierno usa autómatas para flotas."'
      >
        <div className="text-center mb-12">
          <Eyebrow>VII · Evidence</Eyebrow>
          <Title>The academic foundation.</Title>
        </div>

        <div className="reveal-stagger grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {[
            {
              t: "Hyper-Heuristic Driven Smart Contracts for DeFi",
              meta: "Frontiers in Blockchain · 2025",
              d: "+45.6% success rate · −28.3% gas consumption.",
            },
            {
              t: "MVF-Composer",
              meta: "arXiv preprint",
              d: "57% lower max deviation across 1,200 scenarios.",
            },
            {
              t: "Hybrid Stabilization for Algorithmic Stablecoins",
              meta: "Working paper",
              d: "PID control vs. governance-driven adjustment.",
            },
            {
              t: "When AI Meets Stablecoin",
              meta: "Survey · 2024",
              d: "Mapping autonomous agents to monetary policy.",
            },
            {
              t: "Autonomous Agents in DeFi",
              meta: "Crypto Economics Review",
              d: "Mechanism design for bounded execution.",
            },
            {
              t: "A Taxonomy of Parameter Governance",
              meta: "Reflecter Labs · 2025",
              d: "From off-chain advisory to on-chain enforcement.",
            },
          ].map((p) => (
            <div
              key={p.t}
              className="group p-6 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm hover:border-secondary/60 hover:-translate-y-1 hover:shadow-[0_10px_40px_hsl(var(--secondary)/0.2)] transition-all duration-500"
            >
              <p className="mono text-[10px] tracking-widest text-secondary/80 mb-2">
                {p.meta}
              </p>
              <h4 className="font-serif text-xl mb-2 group-hover:text-primary transition-colors">
                {p.t}
              </h4>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>

        <div data-parallax="0.1" className="mt-12 reveal-scale opacity-70">
          <img src={slide7} alt="Wall of marble plaques" loading="lazy" className="w-full max-w-4xl mx-auto" />
        </div>
      </StoryFrame>

      {/* SLIDE 8 — MOATS */}
      <StoryFrame
        id="slide-8"
        index={8}
        total={TOTAL}
        story='"¿Y si el Kybernetes falla?" — "No importa qué piloto. Nuestro mecanismo acepta cualquier autómata registrado. Agnóstico al modelo."'
      >
        <div className="text-center mb-10">
          <Eyebrow>VIII · Moats</Eyebrow>
          <Title>A marketplace of governance.</Title>
          <Body>
            Parameter Guard doesn't mandate a single AI model. Any agent registered via
            ERC-8004 can participate. Protocols may whitelist custom models. The contract
            enforces the same bounds. Agents compete. Unsafe proposals are rejected on-chain.
          </Body>
        </div>

        <div data-parallax="0.05" className="reveal-scale mt-8">
          <img
            src={slide8}
            alt="Frieze of marble owls connected by golden lines"
            loading="lazy"
            className="w-full max-w-6xl mx-auto"
          />
        </div>

        <div className="reveal-stagger grid md:grid-cols-3 gap-4 mt-10 max-w-4xl mx-auto">
          {[
            { k: "ERC-8004", v: "Agent registry standard" },
            { k: "X402", v: "Per-call agent payments" },
            { k: "PDR", v: "Parameter Decision Record" },
          ].map((x) => (
            <div
              key={x.k}
              className="text-center p-4 rounded-xl border border-primary/20 bg-primary/5"
            >
              <p className="mono text-xs tracking-widest text-primary">{x.k}</p>
              <p className="text-sm text-muted-foreground mt-1">{x.v}</p>
            </div>
          ))}
        </div>
      </StoryFrame>

      {/* SLIDE 9 — PATH */}
      <StoryFrame
        id="slide-9"
        index={9}
        total={TOTAL}
        story='Cálicles muestra un mapa: "Esta luna, en tres trirremes; luego toda la flota; al año, Esparta y Corinto."'
      >
        <div className="text-center mb-10">
          <Eyebrow>IX · Path</Eyebrow>
          <Title>The path forward.</Title>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="reveal p-6 rounded-2xl border border-secondary/40 bg-secondary/5">
            <p className="mono text-xs tracking-widest text-secondary mb-3">
              ✓ DELIVERED · HACKATHON
            </p>
            <ul className="space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="text-secondary mono text-sm mt-0.5">01</span>
                <span><span className="mono text-sm">ParameterGuard.cairo</span> — 17 tests passing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary mono text-sm mt-0.5">02</span>
                <span>PIDController V10 deployed on Sepolia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary mono text-sm mt-0.5">03</span>
                <span>Off-chain LLM agent + governance dashboard</span>
              </li>
            </ul>
          </div>

          <div className="reveal p-6 rounded-2xl border border-primary/40 bg-primary/5">
            <p className="mono text-xs tracking-widest text-primary mb-3">
              → NEXT MILESTONES
            </p>
            <ul className="space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">01</span>
                <span>1,000+ adversarial scenarios for robustness</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">02</span>
                <span>Fine-tune Qwen 2.5 → local deploy, sub-100ms, zero inference cost</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">03</span>
                <span>Real DAO integration (Snapshot + Governor)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">04</span>
                <span>ERC-8004 + X402 marketplace activation</span>
              </li>
            </ul>
          </div>
        </div>

        <div data-parallax="0.08" className="mt-14 reveal-scale">
          <img
            src={slide9}
            alt="Marble frieze depicting trireme procession"
            loading="lazy"
            className="w-full max-w-6xl mx-auto opacity-95"
          />
        </div>
      </StoryFrame>

      {/* SLIDE 10 — CALL */}
      <StoryFrame
        id="slide-10"
        index={10}
        total={TOTAL}
        story='Cálicles clava su bastón: "No voten cada cuerda. Voten los horoi — los límites sagrados. ¿Aprobamos el Kybernetes?"'
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>X · The Call</Eyebrow>
            <h2 className="reveal font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
              Introducing{" "}
              <span className="text-gradient-gold">Grinta</span> —
              <br />
              the first stablecoin CDP governed by{" "}
              <span className="italic">Horos</span>.
            </h2>
            <Body>
              The first stablecoin CDP where an autonomous agent governs it. Grinta runs on
              Parameter Guard — the Horos Protocol. Responds to market shocks in blocks,
              not days. Sub-cent operation. Fully on-chain. Fully auditable.
            </Body>

            <div className="reveal mt-8">
              <button
                onClick={scrollToDemo}
                className="group inline-flex items-center gap-3 px-8 py-5 rounded-xl text-primary-foreground font-medium text-lg shadow-[0_0_40px_hsl(var(--primary)/0.45)] transition-all hover:scale-[1.03]"
                style={{
                  background:
                    "linear-gradient(120deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)",
                }}
              >
                Witness the Governor in Action
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            <p className="reveal mt-10 font-serif italic text-2xl md:text-3xl text-secondary leading-snug border-l-2 border-secondary/60 pl-6">
              "The human defines the <span className="not-italic mono text-xl">horoi</span>.
              The agents compete within them."
            </p>
          </div>

          <div data-parallax="0.15" className="reveal-scale">
            <VisualFrame src={slide10} alt="Unrolled papyrus scroll on marble pedestal" />
            <p className="mt-6 text-center mono text-xs tracking-[0.4em] text-muted-foreground/70">
              REFLECTER LABS · HOROS PROTOCOL
            </p>
          </div>
        </div>
      </StoryFrame>
    </>
  );
};
