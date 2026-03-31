'use client';

import { useState, useEffect, useCallback } from 'react';

interface GalleryItem {
  id: number;
  url: string;
  caption: string | null;
  sort_order: number;
  created_at: string;
}

const empty: Omit<GalleryItem, 'id' | 'created_at'> = {
  url: '',
  caption: '',
  sort_order: 0,
};

export default function GaleriePage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<GalleryItem | null>(null);
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/gallery');
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

  function openEdit(item: GalleryItem) {
    setEditing(item);
    setForm({
      url: item.url,
      caption: item.caption || '',
      sort_order: item.sort_order,
    });
    setModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (editing) {
      await fetch(`/api/admin/gallery/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/api/admin/gallery', {
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
    await fetch(`/api/admin/gallery/${id}`, { method: 'DELETE' });
    fetchData();
  }

  if (loading) return <div style={{ padding: 32, color: 'var(--text-muted)' }}>Načítání...</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Galerie</h1>
        <button className="btn-navy" onClick={openCreate} style={{ borderRadius: 10, padding: '10px 20px', fontSize: 14 }}>
          + Přidat obrázek
        </button>
      </div>

      {items.length === 0 ? (
        <div style={{ padding: '48px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14, background: '#fff', borderRadius: 12, border: '1px solid var(--border)' }}>
          Zatím žádné obrázky v galerii
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {items.map((item) => (
            <div key={item.id} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border)' }}>
              <div style={{
                height: 200, background: `var(--gray) url(${item.url}) center/cover no-repeat`,
                position: 'relative',
              }}>
                {/* Delete overlay button */}
                <button
                  onClick={() => handleDelete(item.id)}
                  style={{
                    position: 'absolute', top: 8, right: 8,
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'rgba(229,62,62,0.9)', color: '#fff',
                    border: 'none', fontSize: 14, cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  &#x2715;
                </button>
              </div>
              <div style={{ padding: '10px 14px', background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.caption || 'Bez popisku'}</span>
                <button onClick={() => openEdit(item)} style={{ background: 'none', border: 'none', color: 'var(--navy)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Upravit</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <div style={overlay}>
          <div style={card}>
            <button onClick={() => setModal(false)} style={closeBtn}>&#x2715;</button>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{editing ? 'Upravit obrázek' : 'Nový obrázek'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input placeholder="URL obrázku" value={form.url} onChange={(e) => setForm({ ...form, url: e.target.value })} required style={inputStyle} />
              <input placeholder="Popisek" value={form.caption || ''} onChange={(e) => setForm({ ...form, caption: e.target.value })} style={inputStyle} />
              <input type="number" placeholder="Pořadí" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} style={inputStyle} />
              {form.url && (
                <div style={{ height: 160, background: `var(--gray) url(${form.url}) center/cover no-repeat`, borderRadius: 10 }} />
              )}
              <button type="submit" className="btn-navy" style={{ width: '100%', borderRadius: 10, justifyContent: 'center' }}>
                {editing ? 'Uložit změny' : 'Přidat obrázek'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

const overlay: React.CSSProperties = { position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' };
const card: React.CSSProperties = { background: '#fff', borderRadius: 16, padding: 32, maxWidth: 500, width: '90%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' };
const closeBtn: React.CSSProperties = { position: 'absolute', top: 16, right: 16, width: 32, height: 32, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const inputStyle: React.CSSProperties = { border: '1px solid var(--border)', borderRadius: 10, padding: '12px 14px', fontSize: 14, outline: 'none', fontFamily: 'inherit', width: '100%' };
