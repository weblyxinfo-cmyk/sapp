import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden px-5 md:px-10"
      style={{ background: "var(--navy)", minHeight: "92vh" }}
    >
      {/* Top */}
      <div className="flex flex-col gap-2 pt-10 sm:flex-row sm:justify-between md:pt-16">
        <span
          className="text-[11px] font-bold uppercase tracking-[3px]"
          style={{ color: "rgba(255,255,255,.35)" }}
        >
          Domácí spotřebiče &amp; kuchyňské studio
        </span>
        <span
          className="text-[11px] font-bold uppercase tracking-[3px]"
          style={{ color: "rgba(255,255,255,.35)" }}
        >
          Příbram · od roku 1999
        </span>
      </div>

      {/* Center */}
      <div className="relative z-[1] flex flex-1 flex-col items-center justify-center px-0 py-5 md:py-10">
        {/* BG text */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 select-none whitespace-nowrap text-[80px] font-extrabold leading-none sm:text-[120px] md:text-[180px]"
          style={{
            color: "rgba(255,255,255,.03)",
            transform: "translate(-50%,-52%)",
            letterSpacing: "-8px",
          }}
        >
          SAPP
        </div>

        {/* Product SVG */}
        <svg
          className="relative z-[1] w-[200px] md:w-[300px]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <rect
            x="50"
            y="35"
            width="200"
            height="240"
            rx="16"
            fill="rgba(255,255,255,.06)"
            stroke="rgba(255,255,255,.1)"
            strokeWidth="1.5"
          />
          <rect
            x="50"
            y="35"
            width="200"
            height="72"
            rx="16"
            fill="rgba(255,255,255,.08)"
          />
          <rect x="50" y="91" width="200" height="16" fill="rgba(255,255,255,.08)" />
          <circle
            cx="150"
            cy="195"
            r="62"
            fill="rgba(255,255,255,.04)"
            stroke="rgba(255,255,255,.08)"
            strokeWidth="1.5"
          />
          <circle
            cx="150"
            cy="195"
            r="42"
            fill="rgba(255,255,255,.03)"
            stroke="rgba(255,255,255,.06)"
            strokeWidth="1"
          />
          <circle
            cx="150"
            cy="195"
            r="16"
            fill="rgba(245,194,0,.15)"
            stroke="rgba(245,194,0,.3)"
            strokeWidth="1"
          />
          <rect x="72" y="55" width="10" height="10" rx="5" fill="rgba(245,194,0,.4)" />
          <rect x="90" y="55" width="10" height="10" rx="5" fill="rgba(255,255,255,.15)" />
        </svg>

        <h1
          className="relative z-[1] text-center text-[36px] font-extrabold leading-[.95] text-white sm:text-[50px] md:text-[68px]"
          style={{ letterSpacing: "-2.5px", marginTop: "-20px" }}
        >
          Pro váš
          <br />
          <em className="not-italic" style={{ color: "var(--yellow)" }}>
            domov.
          </em>
        </h1>
      </div>

      {/* Bottom */}
      <div className="relative z-[1] flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-[52px]">
        <p
          className="max-w-[320px] text-[14px] leading-[1.75] md:text-[16px]"
          style={{ color: "rgba(255,255,255,.45)" }}
        >
          Specializovaná prodejna v Příbrami. Spotřebiče a kuchyně prémiových
          značek — s odborným zapojením a vlastním servisem.
        </p>

        <div className="flex flex-col items-start gap-4 md:items-end">
          {/* Stats */}
          <div className="flex gap-6 md:gap-10">
            <div className="text-right">
              <div
                className="text-[24px] font-extrabold leading-none text-white md:text-[30px]"
                style={{ letterSpacing: "-1px" }}
              >
                25<em className="not-italic" style={{ color: "var(--yellow)" }}>+</em>
              </div>
              <div
                className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px]"
                style={{ color: "rgba(255,255,255,.35)" }}
              >
                let v oboru
              </div>
            </div>
            <div className="text-right">
              <div
                className="text-[24px] font-extrabold leading-none text-white md:text-[30px]"
                style={{ letterSpacing: "-1px" }}
              >
                9<em className="not-italic" style={{ color: "var(--yellow)" }}>+</em>
              </div>
              <div
                className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px]"
                style={{ color: "rgba(255,255,255,.35)" }}
              >
                značek
              </div>
            </div>
            <div className="text-right">
              <div
                className="font-extrabold leading-[1.3] text-white"
                style={{ fontSize: "22px", letterSpacing: "-1px" }}
              >
                Odvoz
                <br />
                <em className="not-italic" style={{ color: "var(--yellow)" }}>zdarma</em>
              </div>
              <div
                className="mt-[2px] text-[10px] font-semibold uppercase tracking-[1px]"
                style={{ color: "rgba(255,255,255,.35)" }}
              >
                zapojení zdarma
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/spotrebice" className="btn-yellow">
              Prozkoumat produkty →
            </Link>
            <Link href="/servis" className="btn-ghost">
              Jak funguje servis →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
