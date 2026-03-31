import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Záruční servis spotřebičů",
  description: "Autorizovaný záruční i pozáruční servis spotřebičů Electrolux, AEG, Liebherr, Gorenje a Nivona. Vlastní mechanici a PC diagnostika.",
};

/* ──────────────────────────────────────────────────────────────── */
/*  /servis — Servisní středisko                                   */
/* ──────────────────────────────────────────────────────────────── */

export default function ServisPage() {
  return (
    <main>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--navy)",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: 40,
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(245,194,0,.5)",
              }}
            >
              Servisní středisko
            </p>

            <h1
              style={{
                fontSize: 68,
                fontWeight: 800,
                letterSpacing: -2.5,
                lineHeight: 0.95,
                color: "#fff",
                marginTop: 24,
              }}
              className="hero-h1"
            >
              Servis, který drží{" "}
              <em style={{ color: "var(--yellow)", fontStyle: "normal" }}>
                slovo.
              </em>
            </h1>

            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,.45)",
                maxWidth: 400,
                lineHeight: 1.75,
                marginTop: 20,
              }}
            >
              Autorizovaný servis spotřebičů s vlastními mechaniky.
              Diagnostikujeme, opravíme a&nbsp;vrátíme — rychle a&nbsp;s
              garancí.
            </p>

            <div
              style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}
            >
              {["Vlastní mechanici", "Certifikováno", "PC diagnostika"].map(
                (b) => (
                  <span
                    key={b}
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      background: "rgba(255,255,255,.06)",
                      padding: "8px 14px",
                      borderRadius: 100,
                      color: "rgba(255,255,255,.45)",
                    }}
                  >
                    {b}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right — SVG diagram */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="hero-svg-wrap"
          >
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              style={{ maxWidth: "100%" }}
            >
              <circle
                cx="150"
                cy="150"
                r="120"
                stroke="rgba(255,255,255,.06)"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="150"
                r="80"
                stroke="rgba(255,255,255,.08)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <circle
                cx="150"
                cy="150"
                r="40"
                fill="rgba(245,194,0,.1)"
                stroke="rgba(245,194,0,.2)"
                strokeWidth="1"
              />
              <circle cx="150" cy="150" r="12" fill="rgba(245,194,0,.3)" />
              <circle cx="150" cy="30" r="6" fill="rgba(255,255,255,.15)" />
              <circle cx="270" cy="150" r="6" fill="rgba(255,255,255,.15)" />
              <circle cx="150" cy="270" r="6" fill="rgba(255,255,255,.15)" />
              <circle cx="30" cy="150" r="6" fill="rgba(255,255,255,.15)" />
              <line
                x1="150"
                y1="30"
                x2="150"
                y2="110"
                stroke="rgba(255,255,255,.06)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <line
                x1="270"
                y1="150"
                x2="190"
                y2="150"
                stroke="rgba(255,255,255,.06)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ──────────────────────────────────────── */}
      <section style={{ padding: "80px 40px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderRadius: 18,
            overflow: "hidden",
          }}
          className="service-blocks-grid"
        >
          {/* Block 1 — Záruční servis (light) */}
          <div
            style={{
              background: "#fff",
              border: "1px solid var(--border)",
              padding: "72px 56px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative number */}
            <span
              style={{
                fontSize: 180,
                fontWeight: 800,
                color: "rgba(0,0,0,.03)",
                position: "absolute",
                top: -20,
                right: -10,
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              01
            </span>

            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                background: "var(--gray)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--navy)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            {/* Tag */}
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--yellow)",
                marginTop: 20,
              }}
            >
              Záruční servis
            </p>

            {/* Heading */}
            <h3
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 12,
              }}
            >
              Záruční servis
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginTop: 12,
              }}
            >
              Jsme autorizovaným servisním střediskem předních světových výrobců.
              Opravujeme v&nbsp;záruční době bez starostí.
            </p>

            {/* Feature list */}
            <ul style={{ listStyle: "none", marginTop: 24 }}>
              {[
                "Electrolux, AEG, Zanussi",
                "Liebherr, Gorenje, Mora",
                "Servisní karty pro zákazníky",
                "Školení přímo výrobci",
              ].map((item, i, arr) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom:
                      i < arr.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                    fontSize: 14,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--yellow)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 2 — Pozáruční servis (dark) */}
          <div
            style={{
              background: "var(--navy)",
              padding: "72px 56px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative number */}
            <span
              style={{
                fontSize: 180,
                fontWeight: 800,
                color: "rgba(255,255,255,.04)",
                position: "absolute",
                top: -20,
                right: -10,
                lineHeight: 1,
                pointerEvents: "none",
              }}
            >
              02
            </span>

            {/* Icon */}
            <div
              style={{
                width: 52,
                height: 52,
                background: "rgba(255,255,255,.06)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>

            {/* Tag */}
            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--yellow)",
                marginTop: 20,
              }}
            >
              Pozáruční servis
            </p>

            {/* Heading */}
            <h3
              style={{
                fontSize: 32,
                fontWeight: 800,
                letterSpacing: -1,
                marginTop: 12,
                color: "#fff",
              }}
            >
              Pozáruční servis
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,.45)",
                lineHeight: 1.75,
                marginTop: 12,
              }}
            >
              I&nbsp;po záruce se o&nbsp;vaše spotřebiče postaráme. Vlastní
              dílna, originální díly a&nbsp;profesionální diagnostika.
            </p>

            {/* Feature list */}
            <ul style={{ listStyle: "none", marginTop: 24 }}>
              {[
                "Vlastní servisní dílna",
                "PC diagnostika",
                "Náhradní díly skladem",
                "Opravy u zákazníka",
              ].map((item, i, arr) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "12px 0",
                    borderBottom:
                      i < arr.length - 1
                        ? "1px solid rgba(255,255,255,.08)"
                        : "none",
                    fontSize: 14,
                    color: "#fff",
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--yellow)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ────────────────────────────────────────── */}
      <section style={{ background: "var(--gray)", padding: "80px 40px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "340px 1fr",
            gap: 60,
            alignItems: "start",
          }}
          className="certificates-grid"
        >
          {/* Left */}
          <div>
            <p className="eyebrow">Autorizace</p>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: -2,
                marginTop: 12,
                lineHeight: 1.1,
              }}
              className="certificates-h2"
            >
              Certifikáty a&nbsp;oprávnění
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginTop: 16,
              }}
            >
              Spolupracujeme přímo s&nbsp;výrobci, kteří nám svěřili
              autorizovaný servis svých produktů.
            </p>
          </div>

          {/* Right — 2x2 cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
            className="certificates-cards"
          >
            {(
              [
                {
                  title: "Electrolux Group",
                  desc: "Autorizovaný servis pro značky Electrolux, AEG a Zanussi",
                },
                {
                  title: "Liebherr",
                  desc: "Certifikovaný servisní partner pro chladící techniku",
                },
                {
                  title: "Gorenje / Mora",
                  desc: "Autorizovaný servis pro velké domácí spotřebiče",
                },
                {
                  title: "Nivona",
                  desc: "Certifikovaný servis automatických kávovarů",
                },
              ] as const
            ).map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  padding: 32,
                  borderRadius: 16,
                }}
              >
                {/* Yellow dot */}
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "var(--yellow)",
                    marginBottom: 14,
                  }}
                />
                <p style={{ fontSize: 15, fontWeight: 700 }}>{card.title}</p>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────────── */}
      <section style={{ padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <p className="eyebrow">Proces</p>
            <h2
              style={{
                fontSize: 44,
                fontWeight: 800,
                letterSpacing: -2,
                marginTop: 12,
              }}
              className="timeline-h2"
            >
              Jak servis funguje
            </h2>
          </div>

          {/* Steps */}
          <div
            style={{ position: "relative", marginTop: 48 }}
            className="timeline-wrap"
          >
            {/* Connecting line (desktop) */}
            <div
              className="timeline-line"
              style={{
                position: "absolute",
                top: 28,
                left: "10%",
                right: "10%",
                height: 2,
                background: "var(--border)",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 20,
                position: "relative",
              }}
              className="timeline-steps"
            >
              {(
                [
                  {
                    num: 1,
                    title: "Kontakt",
                    desc: "Zavolejte nebo napište",
                    state: "done",
                  },
                  {
                    num: 2,
                    title: "Diagnostika",
                    desc: "Identifikujeme závadu",
                    state: "done",
                  },
                  {
                    num: 3,
                    title: "Nacenění",
                    desc: "Připravíme cenovou nabídku",
                    state: "active",
                  },
                  {
                    num: 4,
                    title: "Oprava",
                    desc: "Provedeme opravu",
                    state: "pending",
                  },
                  {
                    num: 5,
                    title: "Předání",
                    desc: "Spotřebič vrátíme",
                    state: "pending",
                  },
                ] as const
              ).map((step) => {
                const circleStyle: React.CSSProperties = {
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  fontSize: 18,
                  fontWeight: 800,
                  ...(step.state === "done"
                    ? {
                        background: "var(--navy)",
                        color: "var(--yellow)",
                      }
                    : step.state === "active"
                    ? {
                        background: "var(--yellow)",
                        color: "var(--navy)",
                      }
                    : {
                        background: "#fff",
                        border: "2px solid var(--border)",
                        color: "var(--text-muted)",
                      }),
                };

                return (
                  <div key={step.num} style={{ textAlign: "center" }}>
                    <div style={circleStyle}>{step.num}</div>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        marginTop: 16,
                      }}
                    >
                      {step.title}
                    </p>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--text-muted)",
                        marginTop: 6,
                        lineHeight: 1.5,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE STYLES ───────────────────────────────────── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 900px) {
              .hero-grid {
                grid-template-columns: 1fr !important;
              }
              .hero-svg-wrap {
                display: none !important;
              }
              .hero-h1 {
                font-size: 42px !important;
              }
              .service-blocks-grid {
                grid-template-columns: 1fr !important;
              }
              .certificates-grid {
                grid-template-columns: 1fr !important;
              }
              .certificates-h2 {
                font-size: 32px !important;
              }
              .timeline-h2 {
                font-size: 32px !important;
              }
              .timeline-line {
                display: none !important;
              }
              .timeline-steps {
                grid-template-columns: 1fr !important;
                gap: 32px !important;
              }
            }
            @media (max-width: 600px) {
              .hero-h1 {
                font-size: 34px !important;
                letter-spacing: -1.5px !important;
              }
              .certificates-cards {
                grid-template-columns: 1fr !important;
              }
            }
          `,
        }}
      />
    </main>
  );
}
