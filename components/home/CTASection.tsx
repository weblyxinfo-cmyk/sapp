import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="px-5 py-16 md:px-10 md:py-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="wrap">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-[60px]">
          <div>
            <h2
              className="text-[36px] font-extrabold leading-[.95] sm:text-[44px] md:text-[56px]"
              style={{
                letterSpacing: "-2.5px",
                color: "var(--navy)",
              }}
            >
              Navštivte nás
              <br />v{" "}
              <em className="not-italic" style={{ color: "var(--yellow)" }}>
                Příbrami.
              </em>
            </h2>
            <p
              className="mt-3 max-w-[460px] text-[15px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              Rádi Vám poradíme s výběrem spotřebiče nebo připravíme nezávaznou
              nabídku na novou kuchyň.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 flex-shrink-0">
            <Link href="/kontakt" className="btn-yellow">
              Napsat nám →
            </Link>
            <a href="tel:+420318625333" className="btn-navy">
              +420 318 625 333
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
