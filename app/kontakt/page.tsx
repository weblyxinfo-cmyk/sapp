import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt — Nádražní 15 Příbram",
  description: "Kontaktujte prodejnu SAPP Příbram. Adresa: Nádražní 15, 261 01 Příbram. Telefon: +420 318 625 333. Otevírací doba: Po–Pá 8:00–17:00.",
};

const contactBlocks = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: (
      <>
        +420 318 625 333
        <br />
        +420 776 860 821
      </>
    ),
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "sapp@sapp.cz",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresa",
    value: "Nádražní 15, 261 01 Příbram IV",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Otevírací doba",
    value: "Po–Pá 8:00–17:00",
  },
];

const hours = [
  {
    dayLabel: "Prodejna",
    hours: "8:00–17:00",
    sub: "Pondělí — Pátek",
    badge: "Otevřeno",
  },
  {
    dayLabel: "Servis",
    hours: "8:00–16:00",
    sub: "Pondělí — Pátek",
    badge: null,
  },
  {
    dayLabel: "Víkend",
    hours: "Zavřeno",
    sub: "Sobota & Neděle",
    badge: null,
  },
];

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "80px 40px 0", maxWidth: 1200, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-2.5px",
            lineHeight: 0.95,
            color: "var(--navy)",
          }}
        >
          Napište nebo{" "}
          <em style={{ color: "var(--yellow)", fontStyle: "italic" }}>zavolejte.</em>
        </h1>
      </section>

      {/* Main content grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          padding: "48px 40px 80px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Left — Contact Form */}
        <div>
          <ContactForm />
        </div>

        {/* Right — Contact info blocks */}
        <div>
          {contactBlocks.map((block, i) => (
            <div
              key={i}
              style={{
                padding: "20px 0",
                borderBottom: "1px solid var(--border)",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "var(--gray)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {block.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase" as const,
                    color: "var(--text-muted)",
                  }}
                >
                  {block.label}
                </div>
                <div
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginTop: 4,
                  }}
                >
                  {block.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Map placeholder */}
      <div
        style={{
          height: 320,
          background: "var(--gray)",
          borderRadius: 18,
          margin: "0 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "var(--navy)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "var(--navy)",
            background: "#fff",
            padding: "6px 14px",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          SAPP Příbram
        </span>
      </div>

      {/* Hours grid */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          maxWidth: 1200,
          padding: 40,
          margin: "0 auto",
          gap: 16,
        }}
      >
        {hours.map((h, i) => (
          <div
            key={i}
            style={{
              padding: 32,
              border: "1px solid var(--border)",
              borderRadius: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase" as const,
                color: "var(--text-muted)",
              }}
            >
              {h.dayLabel}
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "-1px",
                marginTop: 8,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {h.hours}
              {h.badge && (
                <span
                  style={{
                    background: "var(--yellow)",
                    color: "var(--navy)",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 8px",
                    borderRadius: 4,
                  }}
                >
                  {h.badge}
                </span>
              )}
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              {h.sub}
            </div>
          </div>
        ))}
      </section>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          main section[style*="gridTemplateColumns: \"1fr 1fr\""],
          main > section:nth-of-type(2) {
            grid-template-columns: 1fr !important;
            padding: 32px 20px 48px !important;
            gap: 40px !important;
          }
          main > section:first-of-type {
            padding: 48px 20px 0 !important;
          }
          main > section:first-of-type h1 {
            font-size: 42px !important;
          }
          main > section:last-of-type {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
          }
          main > div[style*="margin: \"0 40px\""] {
            margin: 0 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
