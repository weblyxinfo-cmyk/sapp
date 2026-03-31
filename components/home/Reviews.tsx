const reviews = [
  {
    text: "Konečně prodejna, kde vám opravdu poradí. Kuchyni jsme navrhli za jedno odpoledne a dodali ji do 3 týdnů.",
    who: "Petr & Ivana · Příbram · 2024",
  },
  {
    text: "Technik přijel rychle, myčku opravil bezchybně. Skvělý servis od první do poslední chvíle.",
    who: "Marie & Karel · Hvožďany · 2023",
  },
  {
    text: "Od návrhu kuchyně až po montáž — vše proběhlo naprosto bezchybně. Doporučuji!",
    who: "Dana · Praha · 2014",
  },
];

export default function Reviews() {
  return (
    <section
      className="px-5 py-16 md:px-10 md:py-20"
      style={{ background: "var(--gray)" }}
    >
      <div className="wrap">
        {/* Header */}
        <div className="mb-8 grid grid-cols-1 items-end gap-6 md:mb-11 md:grid-cols-2 md:gap-10">
          <div>
            <div className="eyebrow mb-4">Reference</div>
            <h2
              className="text-[36px] font-extrabold leading-none sm:text-[44px] md:text-[52px]"
              style={{ letterSpacing: "-2px" }}
            >
              Co říkají
              <br />
              zákazníci
            </h2>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 gap-[2px] md:grid-cols-3">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 md:p-[44px_36px]"
              style={{
                borderRadius:
                  i === 0
                    ? "18px 0 0 18px"
                    : i === reviews.length - 1
                    ? "0 18px 18px 0"
                    : "0",
              }}
            >
              <div
                className="mb-[18px] text-[56px] font-extrabold leading-[.8]"
                style={{ color: "var(--yellow)" }}
              >
                &ldquo;
              </div>
              <p
                className="mb-6 text-[17px] font-medium leading-[1.55]"
                style={{
                  color: "var(--navy)",
                  letterSpacing: "-.3px",
                }}
              >
                {review.text}
              </p>
              <div
                className="text-[11px] font-bold uppercase tracking-[2px]"
                style={{ color: "var(--text-muted)" }}
              >
                {review.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
