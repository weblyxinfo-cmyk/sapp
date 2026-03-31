import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '120px',
        fontWeight: 800,
        color: 'var(--border)',
        letterSpacing: '-5px',
        lineHeight: 1,
      }}>404</div>
      <h1 style={{
        fontSize: '32px',
        fontWeight: 800,
        color: 'var(--navy)',
        marginTop: '16px',
        letterSpacing: '-1px',
      }}>Stránka nenalezena</h1>
      <p style={{
        fontSize: '15px',
        color: 'var(--text-muted)',
        marginTop: '12px',
        lineHeight: 1.7,
        maxWidth: '400px',
      }}>Omlouváme se, ale stránka kterou hledáte neexistuje nebo byla přesunuta.</p>
      <Link
        href="/"
        className="btn-navy"
        style={{ marginTop: '32px' }}
      >
        Zpět na hlavní stránku
      </Link>
    </div>
  );
}
