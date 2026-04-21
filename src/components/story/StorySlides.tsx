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

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="reveal mono text-[14px] tracking-[0.4em] text-primary/80 uppercase mb-5">
    {children}
  </p>
);

const Title = ({ children }: { children: React.ReactNode }) => (
  <h2 className="reveal font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
    {children}
  </h2>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <p className="reveal text-lg md:text-xl leading-relaxed text-foreground/80 max-w-3xl">
    {children}
  </p>
);

const GoldQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="reveal font-serif italic text-2xl md:text-3xl leading-snug text-secondary max-w-4xl border-l-2 border-secondary/60 pl-6 my-8">
    "{children}"
  </blockquote>
);

/** The Calicles narrative beat — now the lead-in of every slide, not hidden in a corner. */
const Narrative = ({
  chapter,
  speaker,
  children,
}: {
  chapter: string;
  speaker?: string;
  children: React.ReactNode;
}) => (
  <div className="reveal mb-8 max-w-3xl">
    <p className="mono text-[14px] tracking-[0.4em] text-secondary/80 uppercase mb-3">
      Ágora · {chapter}
    </p>
    <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground/90">
      {children}
    </p>
    {speaker && (
      <p className="mono text-[14px] tracking-[0.3em] text-muted-foreground/70 mt-3 uppercase">
        — {speaker}
      </p>
    )}
  </div>
);

/** Parallax illustration with bold Tartakovsky framing — no fluffy gradient halo. */
const ParallaxArt = ({
  src,
  alt,
  parallax = 0.18,
  className = "",
}: {
  src: string;
  alt: string;
  parallax?: number;
  className?: string;
}) => (
  <div
    data-parallax={parallax}
    className={`reveal-scale relative overflow-hidden rounded-2xl border border-foreground/10 shadow-[0_30px_80px_-20px_rgba(20,40,50,0.35)] ${className}`}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover"
    />
  </div>
);

export const StorySlides = () => {
  const scrollToDemo = () => {
    document.getElementById("slide-6")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SLIDE 1 — TRAUMA · Cálicles arrives */}
      <StoryFrame id="slide-1" index={1} total={TOTAL}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>I · Trauma</Eyebrow>
            <Narrative chapter="01 · The Return" speaker="Cálicles, strategos">
              I came back from the storm with salt and blood on my hands. I crossed the
              Agora and shouted to anyone who would listen: <span className="not-italic text-foreground">"Our laws sank us."</span>
            </Narrative>
            <Title>
              March 12, 2020.
              <br />
              <span className="text-gradient-teal">ETH fell 43%</span> in a day.
            </Title>
            <Body>
              MakerDAO had an active proposal to adjust liquidation parameters. It took
              three days to pass. By then, $8.3&nbsp;million in DAI had been liquidated for zero.
            </Body>
            <GoldQuote>The protocol worked exactly as designed. The design was broken.</GoldQuote>
          </div>
          <ParallaxArt src={slide1} alt="Cálicles returns to the Agora at dawn" parallax={0.12} />
        </div>
      </StoryFrame>

      {/* SLIDE 2 — DIAGNOSIS · Cálicles meets Thales */}
      <StoryFrame id="slide-2" index={2} total={TOTAL}>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <ParallaxArt
            src={slide2}
            alt="Cálicles kneels before Thales beside a marble hourglass"
            parallax={0.2}
            className="md:col-span-2 order-2 md:order-1"
          />
          <div className="md:col-span-3 order-1 md:order-2">
            <Eyebrow>II · The Structural Flaw</Eyebrow>
            <Narrative chapter="02 · The Master" speaker="Cálicles to Thales of Miletus">
              We vote on every parameter — sails, oars, watchmen. When the sea changes in
              minutes, we vote in days. <span className="not-italic text-foreground">The latency kills us.</span>
            </Narrative>
            <Title>Latency Kills.</Title>
            <Body>
              DeFi governance suffers from a fatal latency gap. Markets move in seconds.
              Parameter adjustments take days. When BTC crashes 20% in an hour, you need to
              act <em>now</em>. But a proposal still requires drafting → forum discussion →
              quorum → timelock → execution.
              <br />
              <br />
              <span className="text-foreground">Days. While users are liquidated.</span>
            </Body>
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 3 — INSIGHT · Thales draws the circle */}
      <StoryFrame id="slide-3" index={3} total={TOTAL}>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <Eyebrow>III · The Insight</Eyebrow>
            <Narrative chapter="03 · The Circle" speaker="Thales of Miletus">
              Then let the Assembly vote on the rules of the game. Not <span className="not-italic">"how many oars?"</span> — but <span className="not-italic">"oars between 50 and 200, change no more than ten per hour."</span> The demos votes the constitution. An automaton executes within those limits.
            </Narrative>
            <Title>
              Vote on <span className="italic text-gradient-gold">policies</span>,
              <br />
              not parameters.
            </Title>
            <Body>
              Not <span className="mono text-base">"Set fee to 0.05%."</span> But:{" "}
              <span className="font-serif italic text-foreground text-2xl">
                "Fee may range 0.01–1.00%. Max change per update: 0.10%. Cooldown: 60s."
              </span>
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
          <ParallaxArt
            src={slide3}
            alt="Thales draws a glowing circle, an owl watches from the column"
            parallax={0.22}
            className="md:col-span-2"
          />
        </div>
      </StoryFrame>

      {/* SLIDE 4 — MECHANISM · Cálicles carves three slabs */}
      <StoryFrame id="slide-4" index={4} total={TOTAL}>
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <Eyebrow>IV · Mechanism</Eyebrow>
          <Narrative chapter="04 · Three Slabs" speaker="Cálicles, hammer in hand">
            I carved three slabs of marble: the bounds of the parameter, the maximum delta,
            the cooldown. The Kybernetes proposes — the marble contract validates. We call it
            <span className="not-italic text-foreground"> Horos Protocol</span> — the law that cannot be crossed.
          </Narrative>
          <Title>
            Parameter Guard
            <br />
            <span className="font-serif italic text-gradient-gold text-3xl md:text-4xl">
              "We call it: Horos Protocol."
            </span>
          </Title>
          <p className="reveal text-sm text-muted-foreground mono tracking-widest">
            HOROS · ὅρος · THE SACRED BOUNDARY
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <ParallaxArt
            src={slide4}
            alt="Cálicles carves three monumental marble tablets"
            parallax={0.15}
            className="lg:col-span-2"
          />

          <div className="reveal-stagger lg:col-span-3 grid gap-4">
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
                className="group relative p-6 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] hover:-translate-y-1 flex gap-5 items-start"
              >
                <div className="font-serif text-5xl text-primary/30 group-hover:text-primary/70 transition-colors leading-none">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2">{c.t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 5 — REFRAME · The elder objects */}
      <StoryFrame id="slide-5" index={5} total={TOTAL}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ParallaxArt
            src={slide5}
            alt="Golden scale weighing an unwalled ship against a fortified one"
            parallax={0.18}
          />
          <div>
            <Eyebrow>V · Reframe</Eyebrow>
            <Narrative chapter="05 · The Elder's Doubt" speaker="An old citizen → Thales replies">
              <span className="not-italic">"That is less freedom,"</span> the elder said. Thales answered:
              <span className="not-italic text-foreground"> "A ship without walls sinks. Constraints create safety."</span>
            </Narrative>
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

      {/* SLIDE 6 — DEMO · Cálicles unveils the water-clock */}
      <StoryFrame id="slide-6" index={6} total={TOTAL}>
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <Eyebrow>VI · Witness</Eyebrow>
          <Narrative chapter="06 · The Harbor" speaker="Cálicles, before the Assembly">
            I led the Assembly to the harbor. I showed them a water-clock joined to an
            automatic rudder. The trireme steered itself. The people applauded.
            <span className="not-italic text-foreground"> Today that rudder is here.</span>
          </Narrative>
          <Title>
            Witness the Governor
            <br />
            <span className="text-gradient-teal">in action.</span>
          </Title>
          <Body>
            Real inference. Real execution. A live AI agent adjusting parameters on Starknet
            Sepolia — within bounds set by the DAO. No mockup.
          </Body>
        </div>

        <div className="reveal-scale relative max-w-4xl mx-auto">
          <a
            href="https://grinta-loop-shanghai.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block p-1 rounded-3xl bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40 transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative rounded-3xl bg-card/90 backdrop-blur-xl p-8 md:p-10 border border-primary/30 overflow-hidden">
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="mono text-[14px] tracking-[0.25em] text-primary uppercase">
                  Live
                </span>
              </div>

              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div data-parallax="0.1" className="md:col-span-2">
                  <img
                    src={slide6}
                    alt="Cálicles unveils the water-clock connected to a self-steering trireme"
                    loading="lazy"
                    className="w-full rounded-2xl border border-foreground/10 shadow-2xl"
                  />
                </div>
                <div className="md:col-span-3 text-left">
                  <p className="mono text-sm tracking-widest text-secondary mb-2">
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
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Watch the AI propose KP/KI adjustments as BTC moves. See the PDR on-chain.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </StoryFrame>

      {/* SLIDE 7 — EVIDENCE · Thales unfurls scrolls */}
      <StoryFrame id="slide-7" index={7} total={TOTAL}>
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <Eyebrow>VII · Evidence</Eyebrow>
          <Narrative chapter="07 · The Library" speaker="Thales unfurling scrolls">
            In Miletus they used this for granaries. In Syracuse, for aqueducts.
            <span className="not-italic text-foreground"> The void is at sea: no government uses automatons for fleets.</span>
          </Narrative>
          <Title>The academic foundation.</Title>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <ParallaxArt
            src={slide7}
            alt="Thales unrolling papyri in the library"
            parallax={0.14}
            className="lg:col-span-2"
          />
          <div className="reveal-stagger lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {[
              {
                t: "Hyper-Heuristic Smart Contracts",
                meta: "Frontiers in Blockchain · 2025",
                d: "+45.6% success · −28.3% gas.",
              },
              {
                t: "MVF-Composer",
                meta: "arXiv preprint",
                d: "57% lower max deviation · 1,200 scenarios.",
              },
              {
                t: "Hybrid Stabilization",
                meta: "Working paper",
                d: "PID vs. governance-driven adjustment.",
              },
              {
                t: "When AI Meets Stablecoin",
                meta: "Survey · 2024",
                d: "Autonomous agents → monetary policy.",
              },
              {
                t: "Autonomous Agents in DeFi",
                meta: "Crypto Economics Review",
                d: "Mechanism design for bounded execution.",
              },
              {
                t: "Taxonomy of Parameter Governance",
                meta: "Reflecter Labs · 2025",
                d: "Off-chain advisory → on-chain enforcement.",
              },
            ].map((p) => (
              <div
                key={p.t}
                className="group p-5 rounded-xl border border-border/60 bg-card/70 backdrop-blur-sm hover:border-secondary/60 hover:-translate-y-1 hover:shadow-[0_10px_40px_hsl(var(--secondary)/0.2)] transition-all duration-500"
              >
                <p className="mono text-sm tracking-widest text-secondary/80 mb-2">
                  {p.meta}
                </p>
                <h4 className="font-serif text-lg mb-1 group-hover:text-primary transition-colors">
                  {p.t}
                </h4>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </StoryFrame>

      {/* SLIDE 8 — MOATS · The Kybernetes might fail */}
      <StoryFrame id="slide-8" index={8} total={TOTAL}>
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <Eyebrow>VIII · Moats</Eyebrow>
          <Narrative chapter="08 · Many Pilots" speaker="Cálicles answering a skeptic">
            <span className="not-italic">"And if the Kybernetes fails?"</span> — It does not matter which pilot.
            <span className="not-italic text-foreground"> Our mechanism accepts any registered automaton.</span> Model-agnostic.
          </Narrative>
          <Title>A marketplace of governance.</Title>
          <Body>
            Parameter Guard does not mandate a single AI model. Any agent registered via
            ERC-8004 can participate. Protocols may whitelist custom models. The contract
            enforces the same bounds. Agents compete. Unsafe proposals are rejected on-chain.
          </Body>
        </div>

        <ParallaxArt
          src={slide8}
          alt="Frieze of owls connected by gold lines to a central contract glyph"
          parallax={0.08}
          className="mt-4"
        />

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
              <p className="mono text-sm tracking-widest text-primary">{x.k}</p>
              <p className="text-sm text-muted-foreground mt-1">{x.v}</p>
            </div>
          ))}
        </div>
      </StoryFrame>

      {/* SLIDE 9 — PATH · Cálicles shows the map */}
      <StoryFrame id="slide-9" index={9} total={TOTAL}>
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <Eyebrow>IX · Path</Eyebrow>
          <Narrative chapter="09 · The Map" speaker="Cálicles, pointing seaward">
            This moon, three triremes. Then the whole fleet. Within a year:
            <span className="not-italic text-foreground"> Sparta and Corinth.</span>
          </Narrative>
          <Title>The path forward.</Title>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="reveal p-6 rounded-2xl border border-secondary/40 bg-secondary/5">
            <p className="mono text-sm tracking-widest text-secondary mb-3">
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
            <p className="mono text-sm tracking-widest text-primary mb-3">
              → NEXT MILESTONES
            </p>
            <ul className="space-y-3 text-foreground/85">
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">01</span>
                <span>1,000+ adversarial scenarios for robustness</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mono text-sm mt-0.5">02</span>
                <span>Fine-tune Qwen 2.5 → local deploy, sub-100ms</span>
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

        <ParallaxArt
          src={slide9}
          alt="Frieze: a fleet of triremes growing toward distant cities"
          parallax={0.1}
          className="mt-12"
        />
      </StoryFrame>

      {/* SLIDE 10 — CALL · Cálicles plants his staff */}
      <StoryFrame id="slide-10" index={10} total={TOTAL}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>X · The Call</Eyebrow>
            <Narrative chapter="10 · The Vote" speaker="Cálicles, planting his staff">
              Do not vote on every rope. Vote on the <span className="not-italic text-foreground">horoi</span> — the sacred limits.
              The human defines the horoi. The agents compete within them.
              <span className="not-italic text-foreground"> Do we approve the Kybernetes?</span>
            </Narrative>
            <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              Introducing{" "}
              <span className="text-gradient-gold">Grinta</span> —
              <br />
              the first stablecoin CDP governed by{" "}
              <span className="italic">Horos</span>.
            </h2>
            <Body>
              An autonomous agent governs it. Grinta runs on Parameter Guard — the Horos
              Protocol. Responds to market shocks in blocks, not days. Sub-cent operation.
              Fully on-chain. Fully auditable.
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

          <div>
            <ParallaxArt
              src={slide10}
              alt="Cálicles plants his staff as the HOROS scroll unfurls above the Assembly"
              parallax={0.18}
            />
            <p className="mt-6 text-center mono text-sm tracking-[0.4em] text-muted-foreground/70">
              REFLECTER LABS · HOROS PROTOCOL
            </p>
          </div>
        </div>
      </StoryFrame>
    </>
  );
};
