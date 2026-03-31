import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fotogalerie",
  description: "Fotogalerie realizací kuchyní na míru, showroomu spotřebičů a servisní dílny SAPP Příbram.",
};

const gallery = [
  { id: 1, caption: "Moderní kuchyně na míru", bgColor: "var(--gray)" },
  { id: 2, caption: "Detail pracovní desky", bgColor: "var(--navy)" },
  { id: 3, caption: "Vestavné spotřebiče", bgColor: "var(--navy2)" },
  { id: 4, caption: "Kuchyňský ostrůvek", bgColor: "rgba(245,194,0,0.1)" },
  { id: 5, caption: "Showroom SAPP", bgColor: "var(--gray)" },
  { id: 6, caption: "Servisní dílna", bgColor: "var(--navy)" },
];

export default function FotogaleriePage() {
  return (
    <main>
      {/* Header */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 40px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 40,
        }}
      >
        <div>
          <span className="eyebrow">Galerie</span>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "var(--navy)",
              marginTop: 8,
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            Fotogalerie
          </h1>
        </div>
        <p
          style={{
            fontSize: 15,
            color: "var(--text-muted)",
            maxWidth: 360,
            lineHeight: 1.6,
          }}
        >
          Podívejte se na naše realizace kuchyní na míru, showroom spotřebičů
          a zázemí servisní dílny.
        </p>
      </section>

      {/* Gallery grid */}
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "48px 40px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 4,
          }}
        >
          {gallery.map((item, i) => (
            <div
              key={item.id}
              style={{
                height: i === 0 ? 564 : 280,
                gridRow: i === 0 ? "span 2" : undefined,
                borderRadius: 4,
                position: "relative",
                overflow: "hidden",
                background: item.bgColor,
                cursor: "pointer",
                transition: "transform 0.3s, opacity 0.3s",
              }}
              className="gallery-item"
            >
              {/* Caption overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  background:
                    "linear-gradient(transparent, rgba(0,0,0,0.5))",
                }}
              >
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .gallery-item:hover {
          transform: scale(1.02);
          opacity: 0.92;
        }
        @media (max-width: 768px) {
          main > section:first-of-type {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 48px 20px 0 !important;
          }
          main > section:first-of-type h1 {
            font-size: 42px !important;
          }
          main > section:last-of-type {
            padding: 32px 20px 48px !important;
          }
          main > section:last-of-type > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          main > section:last-of-type > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
