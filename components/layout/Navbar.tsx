"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/spotrebice", label: "Spotřebiče" },
  { href: "/kuchyne", label: "Kuchyňské studio" },
  { href: "/akce", label: "Akce" },
  { href: "/servis", label: "Servis" },
  { href: "/fotogalerie", label: "Fotogalerie" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      style={{
        background: "#fff",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              background: "var(--yellow)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 18,
              color: "var(--navy)",
            }}
          >
            S
          </div>
          <div
            style={{
              fontWeight: 800,
              fontSize: 20,
              color: "var(--navy)",
              letterSpacing: "-0.3px",
            }}
          >
            SAPP
            <small
              style={{
                display: "block",
                fontSize: 10,
                fontWeight: 500,
                color: "var(--text-muted)",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Příbram
            </small>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 4 }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--navy)" : "var(--text-muted)",
                  padding: "9px 16px",
                  borderRadius: 7,
                  transition: ".15s",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--navy)";
                    e.currentTarget.style.background = "var(--gray)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            style={{
              background: "var(--navy)",
              color: "#fff",
              padding: "9px 20px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 13,
              transition: ".15s",
            }}
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Otevřít menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--navy)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(11,29,58,.4)",
          zIndex: 200,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity .25s",
        }}
      />

      {/* Mobile slide-in panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 280,
          background: "#fff",
          zIndex: 201,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform .3s ease",
          display: "flex",
          flexDirection: "column",
          padding: "24px",
          boxShadow: menuOpen ? "-4px 0 24px rgba(0,0,0,.1)" : "none",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Zavřít menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            alignSelf: "flex-end",
            padding: 4,
            marginBottom: 24,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--navy)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* Mobile links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? "var(--navy)" : "var(--text-muted)",
                  padding: "12px 16px",
                  borderRadius: 8,
                  transition: ".15s",
                  background: isActive ? "var(--gray)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            onClick={() => setMenuOpen(false)}
            style={{
              background: "var(--navy)",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 15,
              textAlign: "center",
              marginTop: 12,
              transition: ".15s",
            }}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}
