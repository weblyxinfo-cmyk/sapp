import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata = {
  title: "Akce a novinky",
  description: "Aktuální akce, slevy a novinky z prodejny SAPP Příbram. Zvýhodněné nabídky na domácí spotřebiče a kuchyně.",
};

const posts = [
  {
    id: 1,
    title: "Jarní sleva 20 % na pračky Electrolux",
    slug: "jarni-sleva-pracky-electrolux",
    perex:
      "Využijte limitovanou jarní akci na vybrané modely praček Electrolux řady PerfectCare. Akce platí do konce dubna 2026.",
    image_url: null as string | null,
    published: 1,
    created_at: "2026-03-15",
  },
  {
    id: 2,
    title: "Nové kuchyňské studio otevřeno",
    slug: "nove-kuchynske-studio-otevreno",
    perex:
      "Rozšířili jsme naši prodejnu o moderní kuchyňské studio s 3D vizualizací. Přijďte se podívat a nechte si zdarma navrhnout kuchyni snů.",
    image_url: null as string | null,
    published: 1,
    created_at: "2026-02-01",
  },
  {
    id: 3,
    title: "Vánoční akce — kávovar Nivona se slevou",
    slug: "vanocni-akce-kavovar-nivona",
    perex:
      "K automatickým kávovarům Nivona CafeRomatica získáte sadu šálků a 1 kg zrnkové kávy zdarma. Platí do vyprodání zásob.",
    image_url: null as string | null,
    published: 1,
    created_at: "2025-11-20",
  },
];

function formatCzechDate(dateStr: string): string {
  const months = [
    "ledna",
    "února",
    "března",
    "dubna",
    "května",
    "června",
    "července",
    "srpna",
    "září",
    "října",
    "listopadu",
    "prosince",
  ];
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day}. ${month} ${year}`;
}

export default function AkcePage() {
  return (
    <main>
      <PageHeader eyebrow="Akce & novinky" title="Co je u nás nového." />

      <section
        style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px 80px" }}
      >
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              border: "1px solid var(--border)",
              borderRadius: 16,
              overflow: "hidden",
              padding: 40,
              marginBottom: 20,
              transition: "0.2s",
            }}
            className="hover:-translate-y-[2px] hover:shadow-lg"
          >
            {post.image_url && (
              <div
                style={{
                  height: 200,
                  background: "var(--gray)",
                  borderRadius: 12,
                  marginBottom: 24,
                  backgroundImage: `url(${post.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}

            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {formatCzechDate(post.created_at)}
            </span>

            <h2
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: -1,
                lineHeight: 1.15,
                marginTop: 8,
                color: "var(--navy)",
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 1.75,
                marginTop: 12,
              }}
            >
              {post.perex}
            </p>

            <Link
              href={`/akce/${post.slug}`}
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "var(--navy)",
                borderBottom: "2px solid var(--yellow)",
                display: "inline-flex",
                marginTop: 18,
              }}
            >
              Číst dále →
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
