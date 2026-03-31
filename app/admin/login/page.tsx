'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/admin');
      } else {
        setError(data.error || 'Nesprávné přihlašovací údaje');
      }
    } catch {
      setError('Chyba připojení k serveru');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'var(--navy)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.5px',
          }}
        >
          SAPP
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 500,
            color: 'rgba(255,255,255,0.4)',
            marginTop: 4,
          }}
        >
          Admin
        </div>
      </div>

      {/* Form card */}
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 400,
          width: '100%',
          background: '#fff',
          borderRadius: 16,
          padding: 40,
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <label
            htmlFor="username"
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--navy)',
              marginBottom: 8,
            }}
          >
            Uživatelské jméno
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            style={{
              width: '100%',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '14px 16px',
              fontSize: 15,
              outline: 'none',
              transition: 'border-color 0.2s',
              color: 'var(--navy)',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--navy)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>

        <div style={{ marginBottom: 28 }}>
          <label
            htmlFor="password"
            style={{
              display: 'block',
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--navy)',
              marginBottom: 8,
            }}
          >
            Heslo
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            style={{
              width: '100%',
              border: '1px solid var(--border)',
              borderRadius: 10,
              padding: '14px 16px',
              fontSize: 15,
              outline: 'none',
              transition: 'border-color 0.2s',
              color: 'var(--navy)',
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--navy)')}
            onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-navy"
          style={{
            width: '100%',
            justifyContent: 'center',
            opacity: loading ? 0.7 : 1,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Přihlašování...' : 'Přihlásit se'}
        </button>

        {error && (
          <p
            style={{
              color: '#E53E3E',
              fontSize: 13,
              fontWeight: 500,
              textAlign: 'center',
              marginTop: 16,
            }}
          >
            {error}
          </p>
        )}
      </form>
    </div>
  );
}
