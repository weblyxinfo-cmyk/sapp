import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", padding: "52px 40px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]"
          style={{ gap: 40 }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: 28,
                fontWeight: 300,
                color: "#fff",
                letterSpacing: -1,
                marginBottom: 16,
              }}
            >
              SA<b style={{ fontWeight: 800 }}>PP</b>
            </div>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,.3)",
                lineHeight: 1.8,
              }}
            >
              SAPP, s. r. o.
              <br />
              Nádražní 15, 261 01 Příbram IV
              <br />
              &copy; 2025 Všechna práva vyhrazena.
            </p>
          </div>

          {/* Produkty */}
          <div>
            <h5
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
                marginBottom: 16,
              }}
            >
              Produkty
            </h5>
            <Link href="/spotrebice" className="ft-link" style={ftLinkStyle}>
              Domácí spotřebiče
            </Link>
            <Link href="/kuchyne" className="ft-link" style={ftLinkStyle}>
              Kuchyňské studio
            </Link>
            <Link href="/akce" className="ft-link" style={ftLinkStyle}>
              Akce &amp; novinky
            </Link>
            <Link href="/fotogalerie" className="ft-link" style={ftLinkStyle}>
              Fotogalerie
            </Link>
          </div>

          {/* Servis */}
          <div>
            <h5
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
                marginBottom: 16,
              }}
            >
              Servis
            </h5>
            <Link href="/servis" className="ft-link" style={ftLinkStyle}>
              Záruční servis
            </Link>
            <Link href="/servis" className="ft-link" style={ftLinkStyle}>
              Pozáruční servis
            </Link>
            <Link href="/servis" className="ft-link" style={ftLinkStyle}>
              Náhradní díly
            </Link>
            <Link href="/servis" className="ft-link" style={ftLinkStyle}>
              Splátky
            </Link>
          </div>

          {/* Kontakt */}
          <div>
            <h5
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,.25)",
                marginBottom: 16,
              }}
            >
              Kontakt
            </h5>
            <a href="tel:+420318625333" className="ft-link" style={ftLinkStyle}>
              +420 318 625 333
            </a>
            <a href="mailto:sapp@sapp.cz" className="ft-link" style={ftLinkStyle}>
              sapp@sapp.cz
            </a>
            <Link href="/kontakt" className="ft-link" style={ftLinkStyle}>
              Nádražní 15, Příbram
            </Link>
            <span style={{ ...ftLinkStyle, cursor: "default" }}>
              Po–Pá 8:00–17:00
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row justify-between"
          style={{
            borderTop: "1px solid rgba(255,255,255,.07)",
            marginTop: 40,
            paddingTop: 20,
            fontSize: 11,
            color: "rgba(255,255,255,.18)",
            gap: 8,
          }}
        >
          <span>SAPP Příbram — domácí spotřebiče &amp; kuchyňské studio</span>
          <span>Realizace: Weblyx.cz</span>
        </div>
      </div>
    </footer>
  );
}

const ftLinkStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "rgba(255,255,255,.38)",
  padding: "5px 0",
  transition: ".15s",
};
