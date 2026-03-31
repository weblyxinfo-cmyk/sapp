const servisItems = [
  {
    num: "01",
    title: "Odvoz & zapojení",
    desc: "Přivezeme, zapojíme, odzkoušíme a vysvětlíme obsluhu",
    tag: "Zdarma",
  },
  {
    num: "02",
    title: "Záruční servis",
    desc: "Mechanici školení přímo výrobci, servisní karty pro zákazníky",
    tag: "Certifikováno",
  },
  {
    num: "03",
    title: "Pozáruční servis",
    desc: "Vlastní dílna, PC diagnostika, náhradní díly, opravy u vás",
    tag: "Vlastní dílna",
  },
  {
    num: "04",
    title: "Splátky",
    desc: "Spotřebitelský úvěr bez navýšení pro všechny produkty",
    tag: "Flexibilně",
  },
];

export default function ServisSection() {
  return (
    <section className="px-5 pb-16 md:px-10 md:pb-20">
      <div className="wrap">
        {/* Top */}
        <div className="mb-8 flex flex-col gap-4 md:mb-11 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-[36px] font-extrabold leading-none md:text-[44px]"
            style={{ letterSpacing: "-2px" }}
          >
            Servis
            <br />
            na míru.
          </h2>
          <p
            className="max-w-[440px] text-[14px] leading-[1.7] md:text-[15px]"
            style={{ color: "var(--text-muted)" }}
          >
            Vlastní dílna, certifikovaní mechanici, PC diagnostika. Opravíme co
            jsme prodali — bez přesměrování jinam.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 overflow-hidden rounded-card sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: "1px solid var(--border)" }}
        >
          {servisItems.map((item, i) => (
            <div
              key={i}
              className="group p-7 transition-colors duration-150 hover:bg-gray-bg md:p-[36px_28px]"
              style={{
                borderRight:
                  i < servisItems.length - 1
                    ? "1px solid var(--border)"
                    : "none",
              }}
            >
              <div
                className="mb-4 text-[80px] font-extrabold leading-none transition-colors duration-200 group-hover:!text-yellow"
                style={{
                  color: "var(--border)",
                  letterSpacing: "-3px",
                }}
              >
                {item.num}
              </div>
              <h4 className="mb-[6px] text-[16px] font-bold">{item.title}</h4>
              <p
                className="mb-[18px] text-[13px] leading-[1.6]"
                style={{ color: "var(--text-muted)" }}
              >
                {item.desc}
              </p>
              <span
                className="inline-block pb-[1px] text-[10px] font-bold uppercase tracking-[1.5px]"
                style={{
                  color: "var(--yellow)",
                  borderBottom: "1.5px solid var(--yellow)",
                }}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
