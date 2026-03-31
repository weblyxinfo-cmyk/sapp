'use client';

import { useState, useEffect, useCallback } from 'react';

const settingFields = [
  { key: 'company_name', label: 'Název firmy', type: 'text' },
  { key: 'address', label: 'Adresa', type: 'text' },
  { key: 'phone', label: 'Telefon', type: 'text' },
  { key: 'mobile', label: 'Mobil', type: 'text' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'hours_weekday', label: 'Otevírací doba (Po-Pá)', placeholder: 'např. 8:00\u201317:00', type: 'text' },
  { key: 'hours_saturday', label: 'Otevírací doba (So)', placeholder: 'např. 9:00\u201312:00', type: 'text' },
  { key: 'hours_sunday', label: 'Otevírací doba (Ne)', placeholder: 'např. Zavřeno', type: 'text' },
] as const;

export default function NastaveniPage() {
  const [form, setForm] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/settings');
      if (res.ok) {
        const data = await res.json();
        setForm(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div style={{ padding: 32, color: 'var(--text-muted)' }}>Načítání...</div>;

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Nastavení</h1>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', padding: 32, maxWidth: 600 }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {settingFields.map((field) => (
            <div key={field.key}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={'placeholder' in field ? field.placeholder : undefined}
                value={form[field.key] || ''}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                style={inputStyle}
              />
            </div>
          ))}

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
            <button
              type="submit"
              className="btn-navy"
              disabled={saving}
              style={{ borderRadius: 10, justifyContent: 'center', padding: '12px 32px', opacity: saving ? 0.7 : 1 }}
            >
              {saving ? 'Ukládání...' : 'Uložit nastavení'}
            </button>
            {saved && (
              <span style={{ fontSize: 14, fontWeight: 600, color: '#38a169' }}>Uloženo</span>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: '12px 14px',
  fontSize: 14,
  outline: 'none',
  fontFamily: 'inherit',
  width: '100%',
};
