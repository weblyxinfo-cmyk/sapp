export const dynamic = 'force-dynamic';

interface DashboardCard {
  title: string;
  count: string;
  subtitle: string;
}

const cards: DashboardCard[] = [
  { title: 'Produkty', count: '12', subtitle: 'aktivních produktů' },
  { title: 'Akce', count: '3', subtitle: 'publikovaných článků' },
  { title: 'Zprávy', count: '0', subtitle: 'nepřečtených zpráv' },
  { title: 'Recenze', count: '3', subtitle: 'zobrazených recenzí' },
];

export default function AdminDashboardPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: 'var(--navy)',
            marginBottom: 8,
          }}
        >
          Dashboard
        </h1>
        <p
          style={{
            fontSize: 15,
            color: 'var(--text-muted)',
            fontWeight: 400,
          }}
        >
          Vítejte v administraci SAPP
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          maxWidth: 720,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 28,
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                letterSpacing: '1px',
                marginBottom: 12,
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: 48,
                fontWeight: 800,
                color: 'var(--navy)',
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {card.count}
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'var(--text-muted)',
                fontWeight: 400,
              }}
            >
              {card.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
