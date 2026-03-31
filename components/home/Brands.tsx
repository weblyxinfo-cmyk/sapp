const brands = [
  "Electrolux",
  "AEG",
  "Zanussi",
  "Liebherr",
  "Gorenje",
  "Mora",
  "Nivona",
  "Faber",
  "Infini",
];

export default function Brands() {
  return (
    <section
      className="px-5 py-12 md:px-10 md:py-[60px]"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between md:mb-10">
          <h3
            className="text-[12px] font-bold uppercase tracking-[2px]"
            style={{ color: "var(--text-muted)" }}
          >
            Značky, které nabízíme
          </h3>
        </div>

        {/* Brands row */}
        <div
          className="flex flex-wrap overflow-hidden rounded-[14px]"
          style={{ border: "1px solid var(--border)" }}
        >
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex-1 px-[14px] py-5 text-center text-[14px] font-bold transition-colors duration-150 hover:bg-navy hover:text-yellow"
              style={{
                color: "var(--text-muted)",
                borderRight:
                  i < brands.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                minWidth: "110px",
              }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
