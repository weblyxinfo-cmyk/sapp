const uspItems = [
  {
    label: "Odvoz a zapojení zdarma",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    label: "Záruční & pozáruční servis",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Splátky bez navýšení",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    label: "Certifikovaní mechanici",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Prodloužená záruka",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export default function USPStrip() {
  return (
    <section style={{ background: "var(--yellow)" }}>
      <div className="mx-auto flex max-w-[1200px] flex-wrap px-5 md:px-10">
        {uspItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-1 items-center gap-[9px] py-4 text-[12px] font-bold"
            style={{
              color: "var(--navy)",
              borderRight:
                i < uspItems.length - 1
                  ? "1px solid rgba(11,29,58,.1)"
                  : "none",
              minWidth: "180px",
            }}
          >
            <div
              className="flex h-7 w-7 flex-shrink-0 items-center justify-content-center rounded-[6px]"
              style={{
                background: "rgba(11,29,58,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[14px] w-[14px]"
                style={{
                  stroke: "var(--navy)",
                  fill: "none",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }}
              >
                {item.icon.props.children}
              </svg>
            </div>
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
