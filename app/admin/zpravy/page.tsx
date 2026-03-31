'use client';

import { useState, useEffect, useCallback } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  topic: string | null;
  message: string;
  read: number;
  created_at: string;
}

export default function ZpravyPage() {
  const [items, setItems] = useState<Message[]>([]);
  const [selected, setSelected] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/messages');
      if (res.ok) setItems(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  async function markAsRead(id: number) {
    await fetch(`/api/admin/messages/${id}`, { method: 'PATCH' });
    fetchData();
  }

  async function handleDelete(id: number) {
    if (!confirm('Opravdu smazat?')) return;
    await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
    if (selected?.id === id) setSelected(null);
    fetchData();
  }

  function openMessage(msg: Message) {
    setSelected(msg);
    if (!msg.read) markAsRead(msg.id);
  }

  function formatDate(d: string) {
    if (!d) return '—';
    return new Date(d).toLocaleDateString('cs-CZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  const unreadCount = items.filter((m) => !m.read).length;

  if (loading) return <div style={{ padding: 32, color: 'var(--text-muted)' }}>Načítání...</div>;

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 800 }}>
          Zprávy
          {unreadCount > 0 && (
            <span style={{ marginLeft: 12, fontSize: 13, fontWeight: 700, background: 'var(--yellow)', color: 'var(--navy)', padding: '3px 10px', borderRadius: 20, verticalAlign: 'middle' }}>
              {unreadCount} nové
            </span>
          )}
        </h1>
      </div>

      <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'var(--gray)' }}>
              {['', 'DATUM', 'JMÉNO', 'EMAIL', 'TÉMA', 'AKCE'].map((h) => (
                <th key={h} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>Žádné zprávy</td></tr>
            )}
            {items.map((msg) => (
              <tr
                key={msg.id}
                onClick={() => openMessage(msg)}
                style={{
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  background: msg.read ? 'transparent' : 'rgba(245,194,0,0.04)',
                  fontWeight: msg.read ? 400 : 600,
                }}
              >
                <td style={{ ...tdStyle, width: 32, textAlign: 'center' }}>
                  {!msg.read && (
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--yellow)', margin: '0 auto' }} />
                  )}
                </td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)', fontSize: 13, whiteSpace: 'nowrap' }}>{formatDate(msg.created_at)}</td>
                <td style={tdStyle}>{msg.name}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{msg.email}</td>
                <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{msg.topic || '—'}</td>
                <td style={tdStyle} onClick={(e) => e.stopPropagation()}>
                  <div style={{ display: 'inline-flex', gap: 8 }}>
                    {!msg.read && (
                      <button onClick={() => markAsRead(msg.id)} style={btnEdit}>Přečteno</button>
                    )}
                    <button onClick={() => handleDelete(msg.id)} style={btnDel}>Smazat</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Detail modal */}
      {selected && (
        <div style={overlay}>
          <div style={modalCard}>
            <button onClick={() => setSelected(null)} style={closeBtn}>&#x2715;</button>
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Zpráva od {selected.name}</h2>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
              {formatDate(selected.created_at)} &middot; {selected.email}
              {selected.phone && <> &middot; {selected.phone}</>}
            </div>
            {selected.topic && (
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 8 }}>
                Téma: {selected.topic}
              </div>
            )}
            <div style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-wrap', color: 'var(--navy)' }}>
              {selected.message}
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
              <a
                href={`mailto:${selected.email}?subject=Re: ${selected.topic || 'Zpráva z webu'}`}
                className="btn-navy"
                style={{ borderRadius: 10, justifyContent: 'center', flex: 1, textAlign: 'center', textDecoration: 'none' }}
              >
                Odpovědět emailem
              </a>
              <button
                onClick={() => { handleDelete(selected.id); setSelected(null); }}
                style={{ ...btnDel, padding: '10px 20px', border: '1px solid #e53e3e', borderRadius: 10, fontSize: 14 }}
              >
                Smazat
              </button>
            </div>
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
