'use client';

import { useState, useEffect, useCallback } from 'react';

interface Post {
  id: number;
  title: string;
  slug: string;
  perex: string | null;
  content: string | null;
  image_url: string | null;
  published: number;
  created_at: string;
}

const empty: Omit<Post, 'id' | 'created_at'> = {
  title: '',
  slug: '',
  perex: '',
  content: '',
  image_url: '',
  published: 0,
};

function slugify(text: string): string {
  const czech: Record<string, string> = {
    'ě': 'e', 'š': 's', 'č': 'c', 'ř': 'r', 'ž': 'z', 'ý': 'y',
    'á': 'a', 'í': 'i', 'é': 'e', 'ú': 'u', 'ů': 'u', 'ď': 'd',
    'ť': 't', 'ň': 'n', 'Ě': 'e', 'Š': 's', 'Č': 'c', 'Ř': 'r',
    'Ž': 'z', 'Ý': 'y', 'Á': 'a', 'Í': 'i', 'É': 'e', 'Ú': 'u',
    'Ů': 'u', 'Ď': 'd', 'Ť': 't', 'Ň': 'n',
  };
  return text
    .split('')
    .map((ch) => czech[ch] || ch)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function AkcePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/posts');
      if (res.ok) setPosts(await res.json());
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

  function openEdit(post: Post) {
    setEditing(post);
    setForm({
      title: post.title,
      slug: post.slug,
      perex: post.perex || '',
      content: post.content || '',
      image_url: post.image_url || '',
      published: post.published,
    });
    setModal(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...form, slug: form.slug || slugify(form.title) };

    if (editing) {
      await fetch(`/api/admin/posts/${editing.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    setModal(false);
    fetchData();
  }

  async function handleDelete(id: number) {
    if (!confirm('Opravdu smazat?')) return;
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE' });
    fetchData();
  }

  async function togglePublished(id: number) {
    await fetch(`/api/admin/posts/${id}`, { method: 'PATCH' });
    fetchData();
  }

  function formatDate(d: string) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('cs-CZ');
  }

  if (loading) return <div style={{ padding: 32, color: 'var(--text-muted)' }}>Načítání...</div>;

  return (
    <>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>Akce</h1>
        <button className="btn-navy" onClick={openCreate} style={{ borderRadius: 10, padding: '10px 20px', fontSize: 14 }}>
          + Přidat akci
        </button>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--gray)' }}>
              {['NÁZEV', 'DATUM', 'STATUS', 'AKCE'].map((h) => (
                <th key={h} style={{ padding: '12px 16px', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' as const, color: 'var(--text-muted)', textAlign: 'left' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr><td colSpan={4} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>Zatím žádné akce</td></tr>
            )}
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 600 }}>{post.title}</td>
                <td style={{ padding: '14px 16px', fontSize: 14, color: 'var(--text-muted)' }}>{formatDate(post.created_at)}</td>
                <td style={{ padding: '14px 16px' }}>
                  <div
                    onClick={() => togglePublished(post.id)}
                    style={{
                      width: 44, height: 24, borderRadius: 12, cursor: 'pointer', position: 'relative',
                      background: post.published ? 'var(--yellow)' : 'var(--border)', transition: '0.2s',
                    }}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%', background: '#fff',
                      position: 'absolute', top: 2, transition: '0.2s',
                      left: post.published ? 22 : 2,
                    }} />
                  </div>
                </td>
                <td style={{ padding: '14px 16px' }}>
                  <div style={{ display: 'inline-flex', gap: 8 }}>
                    <button onClick={() => openEdit(post)} style={{ background: 'none', border: 'none', color: 'var(--navy)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Upravit</button>
                    <button onClick={() => handleDelete(post.id)} style={{ background: 'none', border: 'none', color: '#e53e3e', fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>Smazat</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, maxWidth: 500, width: '90%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setModal(false)} style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&#x2715;</button>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{editing ? 'Upravit akci' : 'Nová akce'}</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <input
                placeholder="Název"
                value={form.title}
                onChange={(e) => { setForm({ ...form, title: e.target.value, slug: slugify(e.target.value) }); }}
                required
                style={inputStyle}
              />
              <input
                placeholder="Slug"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="Perex"
                value={form.perex || ''}
                onChange={(e) => setForm({ ...form, perex: e.target.value })}
                rows={3}
                style={inputStyle}
              />
              <textarea
                placeholder="Obsah"
                value={form.content || ''}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
                rows={6}
                style={inputStyle}
              />
              <input
                placeholder="URL obrázku"
                value={form.image_url || ''}
                onChange={(e) => setForm({ ...form, image_url: e.target.value })}
                style={inputStyle}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600 }}>Publikováno</span>
                <div
                  onClick={() => setForm({ ...form, published: form.published ? 0 : 1 })}
                  style={{
                    width: 44, height: 24, borderRadius: 12, cursor: 'pointer', position: 'relative',
                    background: form.published ? 'var(--yellow)' : 'var(--border)', transition: '0.2s',
                  }}
                >
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%', background: '#fff',
                    position: 'absolute', top: 2, transition: '0.2s',
                    left: form.published ? 22 : 2,
                  }} />
                </div>
              </div>
              <button type="submit" className="btn-navy" style={{ width: '100%', borderRadius: 10, justifyContent: 'center' }}>
                {editing ? 'Uložit změny' : 'Vytvořit akci'}
              </button>
            </form>
          </div>
        </div>
      )}
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
  resize: 'vertical' as const,
};
