import Link from "next/link";

const row1Features = [
  "Electrolux, AEG, Zanussi",
  "Liebherr, Gorenje, Mora, Faber",
  "Odvoz + zapojení zdarma",
  "Náhradní díly skladem",
];

const row2Features = [
  "3D vizualizace zdarma",
  "Výroba na míru v ČR",
  "Kompletní montáž",
  "Spotřebiče v ceně návrhu",
];

function WashingMachineSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      <rect x="25" y="18" width="150" height="168" rx="12" fill="white" stroke="#E3E8F2" strokeWidth="1.5" />
      <rect x="25" y="18" width="150" height="52" rx="12" fill="#0B1D3A" />
      <rect x="25" y="56" width="150" height="14" fill="#0B1D3A" />
      <circle cx="100" cy="136" r="48" fill="#F2F4F8" stroke="#E3E8F2" strokeWidth="1.5" />
      <circle cx="100" cy="136" r="32" fill="white" stroke="#E3E8F2" />
      <circle cx="100" cy="136" r="12" fill="#F5C200" />
      <rect x="42" y="32" width="8" height="8" rx="4" fill="#F5C200" />
      <rect x="56" y="32" width="8" height="8" rx="4" fill="rgba(255,255,255,.2)" />
    </svg>
  );
}

function KitchenSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      <rect x="16" y="20" width="168" height="160" rx="12" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.1)" strokeWidth="1.5" />
      <rect x="16" y="20" width="72" height="74" rx="9" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
      <rect x="112" y="28" width="72" height="66" rx="9" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.12)" strokeWidth="1.5" />
      <rect x="80" y="114" width="40" height="62" rx="6" fill="rgba(255,255,255,.1)" stroke="rgba(255,255,255,.15)" strokeWidth="1" />
      <line x1="16" y1="97" x2="184" y2="97" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
      <rect x="26" y="40" width="52" height="8" rx="4" fill="rgba(245,194,0,.25)" />
      <rect x="122" y="40" width="52" height="8" rx="4" fill="rgba(245,194,0,.25)" />
      <circle cx="42" cy="136" r="12" fill="rgba(245,194,0,.15)" stroke="rgba(245,194,0,.3)" strokeWidth="1" />
      <circle cx="158" cy="136" r="12" fill="rgba(245,194,0,.15)" stroke="rgba(245,194,0,.3)" strokeWidth="1" />
    </svg>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mb-8" style={{ listStyle: "none" }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-[10px] py-[10px] text-[13px] font-medium"
          style={{
            color: "var(--navy)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span
            className="flex-shrink-0 rounded-sm"
            style={{
              width: "16px",
              height: "2px",
              background: "var(--yellow)",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProductLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-[7px] text-[13px] font-bold"
      style={{
        color: "var(--navy)",
        borderBottom: "2px solid var(--yellow)",
        paddingBottom: "2px",
      }}
    >
      {label}
    </Link>
  );
}

export default function Products() {
  return (
    <section className="px-5 py-16 md:px-10 md:py-20">
      <div className="wrap">
        {/* Section header */}
        <div className="mb-8 grid grid-cols-1 items-end gap-6 md:mb-11 md:grid-cols-2 md:gap-10">
          <div>
            <div className="eyebrow mb-4">Naše nabídka</div>
            <h2
              className="text-[36px] font-extrabold leading-none sm:text-[44px] md:text-[52px]"
              style={{ letterSpacing: "-2px" }}
            >
              Co u nás
              <br />
              najdete
            </h2>
          </div>
          <p
            className="text-[15px] leading-[1.75]"
            style={{ color: "var(--text-muted)" }}
          >
            Vybíráme jen prověřené značky. Ke každému nákupu patří kompletní
            péče.
          </p>
        </div>

        {/* Product Row 1 — 58/42 */}
        <div
          className="mb-[18px] grid grid-cols-1 overflow-hidden rounded-card md:grid-cols-[58%_42%]"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Visual */}
          <div
            className="relative flex min-h-[260px] items-center justify-center overflow-hidden p-10 md:min-h-[340px] md:p-[52px]"
            style={{ background: "var(--gray)" }}
          >
            <div
              className="pointer-events-none absolute leading-none"
              style={{
                fontSize: "140px",
                fontWeight: 800,
                color: "rgba(0,0,0,.03)",
                bottom: "-10px",
                right: "-8px",
                letterSpacing: "-5px",
              }}
            >
              01
            </div>
            <WashingMachineSVG />
          </div>

          {/* Content */}
          <div
            className="flex flex-col justify-center p-8 md:p-[52px]"
            style={{ borderLeft: "1px solid var(--border)" }}
          >
            <div
              className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]"
              style={{ color: "var(--yellow)" }}
            >
              Prodej & servis
            </div>
            <h3
              className="mb-[14px] text-[28px] font-extrabold leading-[1.05] sm:text-[32px] md:text-[36px]"
              style={{ letterSpacing: "-1px", color: "var(--navy)" }}
            >
              Domácí spotřebiče
            </h3>
            <p
              className="mb-6 text-[14px] leading-[1.75]"
              style={{ color: "var(--text-muted)" }}
            >
              Široký výběr praček, myček, ledniček, sporáků a dalších
              spotřebičů od prémiových evropských značek.
            </p>
            <FeatureList items={row1Features} />
            <ProductLink href="/spotrebice" label="Zobrazit spotřebiče →" />
          </div>
        </div>

        {/* Product Row 2 — 42/58, reversed */}
        <div
          className="grid grid-cols-1 overflow-hidden rounded-card md:grid-cols-[42%_58%]"
          style={{ border: "1px solid var(--border)" }}
        >
          {/* Content (left, no border-left, has border-right) */}
          <div
            className="order-2 flex flex-col justify-center p-8 md:order-1 md:p-[52px]"
            style={{ borderRight: "1px solid var(--border)" }}
          >
            <div
              className="mb-3 text-[10px] font-bold uppercase tracking-[2.5px]"
              style={{ color: "var(--yellow)" }}
            >
              Kuchyňské studio
            </div>
            <h3
              className="mb-[14px] text-[28px] font-extrabold leading-[1.05] sm:text-[32px] md:text-[36px]"
              style={{ letterSpacing: "-1px", color: "var(--navy)" }}
            >
              Kuchyně na míru
            </h3>
            <p
              className="mb-6 text-[14px] leading-[1.75]"
              style={{ color: "var(--text-muted)" }}
            >
              Návrh, vizualizace, výroba a kompletní montáž kuchyní na míru.
              Vše pod jednou střechou.
            </p>
            <FeatureList items={row2Features} />
            <ProductLink href="/kuchyne" label="Zobrazit kuchyně →" />
          </div>

          {/* Visual (right, dark bg) */}
          <div
            className="relative order-1 flex min-h-[260px] items-center justify-center overflow-hidden p-10 md:order-2 md:min-h-[340px] md:p-[52px]"
            style={{ background: "var(--navy2)" }}
          >
            <div
              className="pointer-events-none absolute leading-none"
              style={{
                fontSize: "140px",
                fontWeight: 800,
                color: "rgba(255,255,255,.04)",
                bottom: "-10px",
                right: "-8px",
                letterSpacing: "-5px",
              }}
            >
              02
            </div>
            <KitchenSVG />
          </div>
        </div>
      </div>
    </section>
  );
}
