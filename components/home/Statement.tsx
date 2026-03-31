export default function Statement() {
  return (
    <section
      className="relative overflow-hidden px-5 py-16 md:px-10 md:py-[90px]"
      style={{ background: "var(--navy)" }}
    >
      <div className="wrap relative">
        {/* Decorative circle */}
        <div
          className="pointer-events-none absolute hidden md:block"
          style={{
            right: "-60px",
            top: "-60px",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,.04)",
          }}
        />

        <div
          className="eyebrow mb-6"
          style={{ color: "rgba(245,194,0,.5)" }}
        >
          Proč právě SAPP
        </div>

        <h2
          className="text-[32px] font-bold leading-[1.15] text-white sm:text-[40px] md:text-[48px]"
          style={{ letterSpacing: "-2px" }}
        >
          Prodej{" "}
          <em className="not-italic" style={{ color: "var(--yellow)" }}>
            nekončí
          </em>
          <br />
          u pokladny.
          <br />
          <span style={{ color: "rgba(255,255,255,.25)" }}>Přivezeme,</span>{" "}
          zapojíme,
          <br />
          <em className="not-italic" style={{ color: "var(--yellow)" }}>
            opravíme.
          </em>
        </h2>

        <p
          className="mt-7 max-w-[460px] text-[15px] leading-[1.75] md:text-[16px]"
          style={{ color: "rgba(255,255,255,.4)" }}
        >
          Jako jedna z mála firem v oboru zajišťujeme odvoz, odborné zapojení a
          záruční i pozáruční servis vlastními certifikovanými mechaniky.
        </p>
      </div>
    </section>
  );
}
