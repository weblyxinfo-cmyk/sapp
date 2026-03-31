import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kuchyňské studio — 3D návrh zdarma",
  description: "Kuchyně na míru s bezplatnou 3D vizualizací. Návrh, výroba i kompletní montáž pod jednou střechou. Záruka 5 let.",
};

/* ------------------------------------------------------------------ */
/*  SVG icons used across sections                                     */
/* ------------------------------------------------------------------ */

const KitchenSvg = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
    <rect x="16" y="20" width="168" height="160" rx="12" fill="white" stroke="#E3E8F2" strokeWidth="1.5" />
    <rect x="16" y="20" width="72" height="74" rx="9" fill="#F2F4F8" stroke="#E3E8F2" strokeWidth="1.5" />
    <rect x="112" y="28" width="52" height="58" rx="9" fill="#F2F4F8" stroke="#E3E8F2" strokeWidth="1.5" />
    <rect x="80" y="114" width="40" height="62" rx="6" fill="#F2F4F8" stroke="#E3E8F2" strokeWidth="1" />
    <line x1="16" y1="97" x2="184" y2="97" stroke="#E3E8F2" strokeWidth="1" />
    <rect x="26" y="40" width="52" height="8" rx="4" fill="rgba(245,194,0,.3)" />
    <rect x="122" y="40" width="32" height="8" rx="4" fill="rgba(245,194,0,.3)" />
    <circle cx="42" cy="136" r="12" fill="rgba(245,194,0,.15)" stroke="rgba(245,194,0,.3)" strokeWidth="1" />
    <circle cx="158" cy="136" r="12" fill="rgba(245,194,0,.15)" stroke="rgba(245,194,0,.3)" strokeWidth="1" />
  </svg>
);

/* small reusable icons for "Proč SAPP" items */
const Icon3D = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2L20 7v8l-9 5-9-5V7l9-5z" stroke="rgba(245,194,0,.6)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M11 12l9-5M11 12v8M11 12L2 7" stroke="rgba(245,194,0,.4)" strokeWidth="1.5" />
  </svg>
);
const IconCustom = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="3" y="3" width="16" height="16" rx="3" stroke="rgba(245,194,0,.6)" strokeWidth="1.5" />
    <path d="M8 11h6M11 8v6" stroke="rgba(245,194,0,.6)" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const IconMontaz = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M14 3l5 5-12 12H2v-5L14 3z" stroke="rgba(245,194,0,.6)" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
const IconZaruka = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M11 2l2.5 5h5.5l-4 4 1.5 5.5L11 13.5 5.5 16.5 7 11 3 7h5.5L11 2z" stroke="rgba(245,194,0,.6)" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

/* Process step icons */
const StepIconKonzultace = ({ highlighted }: { highlighted?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 6H4a2 2 0 00-2 2v8a2 2 0 002 2h16a2 2 0 002-2V8a2 2 0 00-2-2z" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" />
    <path d="M8 10h8M8 14h5" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const StepIcon3D = ({ highlighted }: { highlighted?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L22 7.5v9L12 22 2 16.5v-9L12 2z" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 12l10-5.5M12 12v10M12 12L2 6.5" stroke={highlighted ? "rgba(245,194,0,.5)" : "rgba(107,122,153,.4)"} strokeWidth="1.5" />
  </svg>
);
const StepIconVyroba = ({ highlighted }: { highlighted?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="6" width="18" height="12" rx="3" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" />
    <path d="M7 10v4M12 9v5M17 11v3" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
const StepIconMontaz = ({ highlighted }: { highlighted?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14.5 3.5l6 6-13 13H2v-5.5l12.5-13.5z" stroke={highlighted ? "rgba(245,194,0,.7)" : "var(--text-muted)"} strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 6l6 6" stroke={highlighted ? "rgba(245,194,0,.5)" : "rgba(107,122,153,.4)"} strokeWidth="1.5" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const procItems = [
  { icon: <Icon3D />, title: "3D vizualizace", desc: "Ještě před výrobou uvidíte svou kuchyni ve fotorealistickém 3D návrhu." },
  { icon: <IconCustom />, title: "Výroba na míru", desc: "Každá kuchyně se vyrábí přesně podle vašich rozměrů a požadavků." },
  { icon: <IconMontaz />, title: "Kompletní montáž", desc: "Zajistíme celou montáž včetně zapojení spotřebičů — vy nemusíte nic řešit." },
  { icon: <IconZaruka />, title: "Záruka 5 let", desc: "Na každou kuchyni poskytujeme rozšířenou záruku 5 let." },
];

const steps = [
  {
    num: "Krok 01",
    title: "Konzultace",
    desc: "Probereme vaše představy, prostor a rozpočet. Zdarma, nezávazně.",
    icon: StepIconKonzultace,
    highlighted: false,
  },
  {
    num: "Krok 02",
    title: "3D návrh",
    desc: "Vytvoříme 3D vizualizaci vaší nové kuchyně, včetně materiálů.",
    icon: StepIcon3D,
    highlighted: true,
  },
  {
    num: "Krok 03",
    title: "Výroba",
    desc: "Kuchyně se vyrobí na míru v certifikovaném českém závodě.",
    icon: StepIconVyroba,
    highlighted: false,
  },
  {
    num: "Krok 04",
    title: "Montáž",
    desc: "Náš tým provede kompletní montáž včetně zapojení spotřebičů.",
    icon: StepIconMontaz,
    highlighted: false,
  },
];

const galleryItems = [
  { label: "Moderní kuchyně", bg: "var(--gray)", span: true, radius: "18px" },
  { label: "Detail pracovní desky", bg: "var(--navy)", span: false, radius: "0" },
  { label: "Vestavné spotřebiče", bg: "var(--navy2)", span: false, radius: "0" },
  { label: "Kuchyňský ostrůvek", bg: "rgba(245,194,0,.12)", span: false, radius: "0" },
  { label: "Výroba v ČR", bg: "var(--gray)", span: false, radius: "0" },
];

const faqItems = [
  {
    q: "Jak dlouho trvá celý proces?",
    a: "Od první konzultace po montáž obvykle 4–6 týdnů, v závislosti na složitosti návrhu a dostupnosti materiálů.",
  },
  {
    q: "Je 3D vizualizace zdarma?",
    a: "Ano, vizualizace je součástí naší služby a je zcela nezávazná. Uvidíte přesně, jak bude vaše kuchyně vypadat.",
  },
  {
    q: "Jaké materiály používáte?",
    a: "Pracujeme s prověřenými českými i evropskými dodavateli. Nabízíme lamino, dýhu, lakované i masivní fronty.",
  },
  {
    q: "Zapojíte i spotřebiče?",
    a: "Ano, součástí montáže je kompletní zapojení všech vestavných spotřebičů včetně odzkoušení.",
  },
  {
    q: "Jaká je záruka?",
    a: "Na kuchyně poskytujeme záruku 5 let. Na vestavné spotřebiče platí standardní záruční podmínky výrobce.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function KuchynePage() {
  return (
    <main>
      {/* ===== HERO ===== */}
      <section>
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: 520,
          }}
        >
          {/* Left */}
          <div
            style={{
              padding: "80px 56px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p className="eyebrow">Kuchyňské studio</p>
              <h1
                style={{
                  fontSize: 68,
                  fontWeight: 800,
                  letterSpacing: "-2.5px",
                  lineHeight: 0.95,
                  color: "var(--navy)",
                  marginTop: 20,
                }}
              >
                Kuchyně přesně
                <br />
                pro{" "}
                <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>
                  vás
                </em>
                .
              </h1>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginTop: 24,
                  maxWidth: 400,
                }}
              >
                Navrhneme, vyrobíme a namontujeme kuchyni přesně podle vašich
                představ. Od 3D vizualizace po finální montáž — vše pod jednou
                střechou.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <a href="/kontakt" className="btn-yellow">
                Nezávazná konzultace <span aria-hidden="true">→</span>
              </a>
              <a href="/fotogalerie" className="btn-navy">
                Fotogalerie
              </a>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              background: "var(--gray)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <KitchenSvg />
          </div>
        </div>
      </section>

      {/* ===== PROČ SAPP ===== */}
      <section style={{ background: "var(--navy)" }}>
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            padding: "80px 40px",
          }}
        >
          {/* Left */}
          <div>
            <p
              className="eyebrow"
              style={{ color: "rgba(245,194,0,.5)" }}
            >
              Proč SAPP
            </p>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: "-2px",
                color: "#fff",
                marginTop: 16,
                lineHeight: 1.1,
              }}
            >
              Proč zvolit
              <br />
              naše studio
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,.4)",
                lineHeight: 1.7,
                marginTop: 20,
                maxWidth: 360,
              }}
            >
              Spojujeme moderní technologie s řemeslnou precizností. Každá
              kuchyně od nás je originál.
            </p>
          </div>

          {/* Right – 4 rows */}
          <div>
            {procItems.map((item, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(255,255,255,.07)",
                  borderBottom:
                    i === procItems.length - 1
                      ? "1px solid rgba(255,255,255,.07)"
                      : undefined,
                  padding: "20px 0",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: "rgba(255,255,255,.06)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      color: "rgba(255,255,255,.4)",
                      fontSize: 13,
                      lineHeight: 1.6,
                      marginTop: 4,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="wrap" style={{ padding: "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="eyebrow">Jak to funguje</p>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "-2px",
              marginTop: 12,
            }}
          >
            Od návrhu k realizaci
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                style={{
                  padding: "40px 28px",
                  background: s.highlighted ? "var(--navy)" : undefined,
                  borderLeft:
                    i > 0
                      ? `1px solid ${s.highlighted ? "rgba(255,255,255,.07)" : "var(--border)"}`
                      : undefined,
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: s.highlighted
                      ? "rgba(245,194,0,.5)"
                      : "var(--text-muted)",
                  }}
                >
                  {s.num}
                </p>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: s.highlighted
                      ? "rgba(255,255,255,.06)"
                      : "var(--gray)",
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 16,
                  }}
                >
                  <Icon highlighted={s.highlighted} />
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginTop: 16,
                    color: s.highlighted ? "#fff" : undefined,
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: s.highlighted
                      ? "rgba(255,255,255,.4)"
                      : "var(--text-muted)",
                    lineHeight: 1.6,
                    marginTop: 8,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="wrap" style={{ paddingBottom: 80 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="eyebrow">Galerie</p>
          <h2
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "-2px",
              marginTop: 12,
            }}
          >
            Naše realizace
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "220px 220px",
            gap: 8,
          }}
        >
          {galleryItems.map((g, i) => (
            <div
              key={i}
              style={{
                background: g.bg,
                borderRadius: i === 0 ? 18 : 0,
                position: "relative",
                gridRow: g.span ? "1 / 3" : undefined,
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  background:
                    g.bg === "var(--gray)" || g.bg.startsWith("rgba")
                      ? "rgba(0,0,0,.4)"
                      : "rgba(255,255,255,.1)",
                  padding: "6px 12px",
                  borderRadius: 6,
                  color: "#fff",
                }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section style={{ background: "var(--gray)" }}>
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "340px 1fr",
            gap: 64,
            padding: "80px 40px",
          }}
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: "-2px",
              }}
            >
              Časté otázky
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginTop: 16,
              }}
            >
              Odpovědi na nejčastější dotazy ohledně našich kuchyní a služeb.
            </p>
          </div>

          {/* Right – accordion */}
          <div>
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="faq-item"
                style={{
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <summary
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    padding: "20px 0",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {faq.q}
                  <svg
                    className="faq-chevron"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ flexShrink: 0, marginLeft: 16, transition: "transform .2s" }}
                  >
                    <path
                      d="M4.5 6.75L9 11.25l4.5-4.5"
                      stroke="var(--text-muted)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    paddingBottom: 20,
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCOPED STYLES ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Hero responsive */
            @media (max-width: 768px) {
              .wrap { padding: 0 20px !important; }

              /* Hero grid */
              section:first-child .wrap {
                grid-template-columns: 1fr !important;
              }
              section:first-child .wrap > div:first-child {
                padding: 48px 24px !important;
              }
              section:first-child .wrap > div:first-child h1 {
                font-size: 40px !important;
                letter-spacing: -1.5px !important;
              }
              section:first-child .wrap > div:last-child {
                min-height: 260px;
              }

              /* Proč SAPP */
              section:nth-of-type(2) .wrap {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
              section:nth-of-type(2) .wrap h2 {
                font-size: 32px !important;
              }

              /* Process */
              section:nth-of-type(3) > div:last-child {
                grid-template-columns: 1fr !important;
              }
              section:nth-of-type(3) > div:last-child > div {
                border-left: none !important;
                border-bottom: 1px solid var(--border);
              }

              /* Gallery */
              section:nth-of-type(4) > div:last-child {
                grid-template-columns: 1fr !important;
                grid-template-rows: auto !important;
              }
              section:nth-of-type(4) > div:last-child > div {
                grid-row: auto !important;
                min-height: 180px;
              }

              /* FAQ */
              section:nth-of-type(5) .wrap {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
              }
              section:nth-of-type(5) .wrap h2 {
                font-size: 32px !important;
              }

              /* CTA buttons stack */
              section:first-child .wrap > div:first-child > div:last-child {
                flex-direction: column;
                align-items: flex-start;
              }
            }

            /* FAQ accordion chevron rotation */
            details[open] .faq-chevron {
              transform: rotate(180deg);
            }

            /* Remove default summary marker (webkit) */
            summary::-webkit-details-marker {
              display: none;
            }

            /* Smooth open animation for FAQ */
            .faq-item > div {
              animation: faqOpen .2s ease-out;
            }
            @keyframes faqOpen {
              from { opacity: 0; transform: translateY(-4px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `,
        }}
      />
    </main>
  );
}
