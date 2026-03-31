'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Akce', href: '/admin/akce' },
  { label: 'Produkty', href: '/admin/produkty' },
  { label: 'Galerie', href: '/admin/galerie' },
  { label: 'Recenze', href: '/admin/recenze' },
  { label: 'Nastavení', href: '/admin/nastaveni' },
  { label: 'Zprávy', href: '/admin/zpravy' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  function isActive(href: string): boolean {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  }

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch {
      setLoggingOut(false);
    }
  }

  return (
    <aside
      style={{
        width: 240,
        minWidth: 240,
        background: 'var(--navy)',
        padding: '24px 0',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 201,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 24px 32px' }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.3px',
          }}
        >
          SAPP
        </div>
        <div
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.4)',
            marginTop: 2,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          Admin panel
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: '12px 24px',
                fontSize: 13,
                fontWeight: active ? 700 : 500,
                color: active ? 'var(--yellow)' : 'rgba(255,255,255,0.5)',
                background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                display: 'block',
                transition: 'all 0.15s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <button
        onClick={handleLogout}
        disabled={loggingOut}
        style={{
          padding: '12px 24px',
          marginTop: 'auto',
          color: 'rgba(255,255,255,0.3)',
          fontSize: 12,
          fontWeight: 500,
          background: 'none',
          border: 'none',
          cursor: loggingOut ? 'not-allowed' : 'pointer',
          textAlign: 'left',
          transition: 'color 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
        }}
      >
        {loggingOut ? 'Odhlašování...' : 'Odhlásit se'}
      </button>
    </aside>
  );
}
