"use client";

export default function AdminError({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void _error;
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 800,
        color: 'var(--navy)',
        letterSpacing: '-1px',
      }}>Něco se pokazilo</h2>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-muted)',
        marginTop: '12px',
        lineHeight: 1.7,
      }}>V administraci došlo k chybě. Zkuste to prosím znovu.</p>
      <button
        onClick={() => reset()}
        className="btn-navy"
        style={{ marginTop: '24px' }}
      >
        Zkusit znovu
      </button>
    </div>
  );
}
