export default function Topbar() {
  return (
    <div
      className="hidden md:block"
      style={{ background: "var(--navy)", padding: "8px 0" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="tel:+420318625333"
            className="topbar-link"
            style={{ fontSize: 12, color: "rgba(255,255,255,.55)", transition: ".15s" }}
          >
            +420 318 625 333
          </a>
          <span
            style={{
              color: "rgba(255,255,255,.2)",
              margin: "0 10px",
              fontSize: 12,
            }}
          >
            |
          </span>
          <a
            href="tel:+420776860821"
            className="topbar-link"
            style={{ fontSize: 12, color: "rgba(255,255,255,.55)", transition: ".15s" }}
          >
            +420 776 860 821
          </a>
          <span
            style={{
              color: "rgba(255,255,255,.2)",
              margin: "0 10px",
              fontSize: 12,
            }}
          >
            |
          </span>
          <a
            href="mailto:sapp@sapp.cz"
            className="topbar-link"
            style={{ fontSize: 12, color: "rgba(255,255,255,.55)", transition: ".15s" }}
          >
            sapp@sapp.cz
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>
            Nádražní 15, Příbram IV
          </span>
          <span
            style={{
              color: "rgba(255,255,255,.2)",
              margin: "0 10px",
              fontSize: 12,
            }}
          >
            |
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>
            Po–Pá 8:00–17:00
          </span>
        </div>
      </div>
    </div>
  );
}
