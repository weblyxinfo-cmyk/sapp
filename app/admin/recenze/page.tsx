'use client';

import { useState, useEffect, useCallback } from 'react';

interface Review {
  id: number;
  text: string;
  author: string;
  location: string | null;
  date: string | null;
  sort_order: number;
  visible: number;
}

const empty: Omit<Review, 'id'> = {
  text: '',
  author: '',
  location: '',
  date: '',
  sort_order: 0,
  visible: 1,
};

export default function RecenzePage() {
  const [items, setItems] = useState<Review[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Review | null>(null);
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/reviews');
      if (res.ok) setItems(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  function openCreate() {
    setEditing(null);
    setForm(empty);
    setModal(true);
  }

  function openEdit(item: Review) {
    setEditing(item);
    setForm({
      text: item.text,
      author: item.author,
      location: item.location || '',
      date: item.date || '',
      sort_order: item.sort_order,
      visible: item.visible,
    });
    setModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/admin/reviews/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/api/admin/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setModal(false);
    fetchData();
  }

  async function handleDelete(id: number) {
    if (!confirm('Opravdu smazat?')) return;
    await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
    fetchData();
  }

  async function toggleVisible(id: number) {
    await fetch(`/api/admin/reviews/${id}`, { method: 'PATCH' });
    fetchData();
  }

  function truncate(s: string, max: number) {
    return s.length > max ? s.slice(0, max) + '...' : s;
  }

  if (loading) return <div style={{ padding: 32, color: 'var(--text-muted)' }}>Načítání...</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Recenze</h1>
        <button className="btn-navy" onClick={openCreate} style={{ borderRadius: 10, padding: '10px 20px', fontSize: 14 }}>
          + Přidat recenzi
        </button>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--gray)' }}>
              {['AUTOR', 'LOKALITA', 'TEXT', 'VIDITELNOST', 'AKCE'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={5} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>Zatím žádné recenze</td></tr>
            )}
            {items.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ ...tdStyle, fontWeight: 600 }}>{item.author}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{item.location || '—'}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{truncate(item.text, 60)}</td>
                <td style={tdStyle}>
                  <div
                    onClick={() => toggleVisible(item.id)}
                    style={{
                      width: 44, height: 24, borderRadius: 12, cursor: 'pointer', position: 'relative',
                      background: item.visible ? 'var(--yellow)' : 'var(--border)', transition: '0.2s',
                    }}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', background: '#fff',
                      position: 'absolute', top: 2, transition: '0.2s',
                      left: item.visible ? 22 : 2,
                    }} />
                  </div>
                </td>
                <td style={tdStyle}>
                  <div style={{ display: 'inline-flex', gap: 8 }}>
                    <button onClick={() => openEdit(item)} style={btnEdit}>Upravit</button>
                    <button onClick={() => handleDelete(item.id)} style={btnDel}>Smazat</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <div style={overlay}>
          <div style={modalCard}>
            <button onClick={() => setModal(false)} style={closeBtn}>&#x2715;</button>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{editing ? 'Upravit recenzi' : 'Nová recenze'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <textarea placeholder="Text recenze" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} required rows={4} style={inputStyle} />
              <input placeholder="Autor" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} required style={inputStyle} />
              <input placeholder="Lokalita" value={form.location || ''} onChange={(e) => setForm({ ...form, location: e.target.value })} style={inputStyle} />
              <input type="date" placeholder="Datum" value={form.date || ''} onChange={(e) => setForm({ ...form, date: e.target.value })} style={inputStyle} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Viditelná</span>
                <div
                  onClick={() => setForm({ ...form, visible: form.visible ? 0 : 1 })}
                  style={{
                    width: 44, height: 24, borderRadius: 12, cursor: 'pointer', position: 'relative',
                    background: form.visible ? 'var(--yellow)' : 'var(--border)', transition: '0.2s',
                  }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', background: '#fff',
                    position: 'absolute', top: 2, transition: '0.2s',
                    left: form.visible ? 22 : 2,
                  }} />
                </div>
              </div>
              <input type="number" placeholder="Pořadí" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} style={inputStyle} />
              <button type="submit" className="btn-navy" style={{ width: '100%', borderRadius: 10, justifyContent: 'center' }}>
                {editing ? 'Uložit změny' : 'Vytvořit recenzi'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const thStyle: React.CSSProperties = { padding: '12px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', textAlign: 'left' };
const tdStyle: React.CSSProperties = { padding: '14px 16px', fontSize: 14 };
const btnEdit: React.CSSProperties = { background: 'none', border: 'none', color: 'var(--navy)', fontWeight: 600, fontSize: 13, cursor: 'pointer' };
const btnDel: React.CSSProperties = { background: 'none', border: 'none', color: '#e53e3e', fontWeight: 600, fontSize: 13, cursor: 'pointer' };
const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' };
const modalCard: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: 32, maxWidth: 500, width: '90%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' };
const closeBtn: React.CSSProperties = { position: 'absolute', top: 16, right: 16, width: 32, height: 32, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const inputStyle: React.CSSProperties = { border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit', width: '100%', resize: 'vertical' };
