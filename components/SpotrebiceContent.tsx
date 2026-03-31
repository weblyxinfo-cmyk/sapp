"use client";

import { useState } from "react";

type Product = {
  name: string;
  brand: string;
  category: string;
  badge: string | null;
  description: string;
  bgColor: string;
};

const CATEGORIES = ["Vše", "Pračky", "Myčky", "Lednice", "Sporáky", "Vestavné", "Kávovar"];
const BRANDS = ["Electrolux", "AEG", "Zanussi", "Liebherr", "Gorenje", "Mora", "Nivona", "Faber"];

export default function SpotrebiceContent({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [activeBrand, setActiveBrand] = useState<string | null>(null);

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === "Vše" || p.category === activeCategory;
    const brandMatch = !activeBrand || p.brand === activeBrand;
    return catMatch && brandMatch;
  });

  return (
    <>
      {/* Category chips */}
      <div
        className="max-w-[1200px] mx-auto px-5 md:px-[40px]"
        style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "0" }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontSize: "12px",
                fontWeight: 600,
                background: isActive ? "var(--navy)" : "var(--gray)",
                color: isActive ? "var(--yellow)" : "var(--navy)",
                border: `1px solid ${isActive ? "var(--navy)" : "var(--border)"}`,
                borderRadius: "100px",
                padding: "6px 16px",
                cursor: "pointer",
                transition: "0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "var(--navy)";
                  e.currentTarget.style.color = "var(--yellow)";
                  e.currentTarget.style.borderColor = "var(--navy)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "var(--gray)";
                  e.currentTarget.style.color = "var(--navy)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filter bar */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          marginTop: "32px",
        }}
      >
        <div
          className="max-w-[1200px] mx-auto px-5 md:px-[40px]"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            paddingTop: "14px",
            paddingBottom: "14px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: "var(--navy)",
              marginRight: "4px",
            }}
          >
            Značka:
          </span>
          <button
            onClick={() => setActiveBrand(null)}
            style={{
              fontSize: "12px",
              fontWeight: 600,
              background: !activeBrand ? "var(--navy)" : "transparent",
              color: !activeBrand ? "var(--yellow)" : "var(--text-muted)",
              border: "none",
              borderRadius: "100px",
              padding: "6px 14px",
              cursor: "pointer",
              transition: "0.2s",
            }}
          >
            Vše
          </button>
          {BRANDS.map((brand) => {
            const isActive = activeBrand === brand;
            return (
              <button
                key={brand}
                onClick={() => setActiveBrand(isActive ? null : brand)}
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  background: isActive ? "var(--navy)" : "transparent",
                  color: isActive ? "var(--yellow)" : "var(--text-muted)",
                  border: "none",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>

      {/* Product grid */}
      <div
        className="max-w-[1200px] mx-auto px-5 md:px-[40px]"
        style={{ paddingTop: "48px", paddingBottom: "80px" }}
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]"
        >
          {filtered.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontSize: "15px",
              marginTop: "40px",
            }}
          >
            Žádné produkty neodpovídají zvoleným filtrům.
          </p>
        )}
      </div>
    </>
  );
}

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  /* Icon content for the visual area depending on category */
  const categoryIcon: Record<string, string> = {
    Pračky: "🫧",
    Myčky: "💧",
    Lednice: "❄️",
    Sporáky: "🔥",
    Vestavné: "⚙️",
    Kávovar: "☕",
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "0.2s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 12px 40px rgba(11,29,58,0.08)"
          : "none",
        cursor: "pointer",
      }}
    >
      {/* Visual area */}
      <div
        style={{
          height: "220px",
          background: product.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "var(--yellow)",
              color: "var(--navy)",
              fontSize: "10px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "6px",
              lineHeight: 1.4,
            }}
          >
            {product.badge}
          </span>
        )}
        <span
          style={{
            fontSize: "48px",
            opacity: product.bgColor === "var(--navy2)" ? 0.3 : 0.18,
            filter: product.bgColor === "var(--navy2)" ? "grayscale(1) brightness(10)" : undefined,
          }}
        >
          {categoryIcon[product.category] || "📦"}
        </span>
      </div>

      {/* Card body */}
      <div style={{ padding: "28px" }}>
        <span
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            color: "var(--yellow)",
            fontWeight: 700,
          }}
        >
          {product.brand}
        </span>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 700,
            marginTop: "6px",
            color: "var(--navy)",
            lineHeight: 1.3,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: "13px",
            color: "var(--text-muted)",
            marginTop: "6px",
            lineHeight: 1.6,
          }}
        >
          {product.description}
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "18px",
          }}
        >
          <a
            href="#"
            style={{
              fontWeight: 700,
              fontSize: "13px",
              color: "var(--navy)",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--yellow-dark)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--navy)";
            }}
          >
            Více info →
          </a>
          <span
            style={{
              fontSize: "10px",
              fontWeight: 600,
              background: "var(--gray)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              padding: "4px 12px",
              color: "var(--navy)",
            }}
          >
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
