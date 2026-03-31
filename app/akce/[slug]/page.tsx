import Link from "next/link";
import { notFound } from "next/navigation";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  return { title: post?.title || "Akce" };
}

export default function AkceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "60px 40px 80px",
      }}
    >
      {/* Breadcrumb */}
      <nav
        style={{
          fontSize: 12,
          color: "var(--text-muted)",
        }}
      >
        <Link href="/" style={{ color: "var(--text-muted)" }}>
          Domů
        </Link>
        {" / "}
        <Link href="/akce" style={{ color: "var(--text-muted)" }}>
          Akce
        </Link>
        {" / "}
        <span>{post.title}</span>
      </nav>

      {/* Title */}
      <h1
        style={{
          fontSize: 52,
          fontWeight: 800,
          letterSpacing: -2,
          lineHeight: 1.05,
          maxWidth: 800,
          marginTop: 24,
          color: "var(--navy)",
        }}
      >
        {post.title}
      </h1>

      {/* Date */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "var(--text-muted)",
          display: "block",
          marginTop: 12,
        }}
      >
        {formatCzechDate(post.created_at)}
      </span>

      {/* Image */}
      {post.image_url && (
        <div
          style={{
            height: 400,
            background: "var(--gray)",
            borderRadius: 18,
            marginTop: 32,
            backgroundImage: `url(${post.image_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Content */}
      <div
        style={{
          fontSize: 16,
          lineHeight: 1.85,
          color: "var(--navy)",
          maxWidth: 700,
          marginTop: 40,
        }}
      >
        <p>{post.perex}</p>
      </div>

      {/* Back link */}
      <Link
        href="/akce"
        style={{
          display: "inline-block",
          marginTop: 48,
          fontSize: 13,
          fontWeight: 700,
          color: "var(--navy)",
        }}
      >
        ← Zpět na akce
      </Link>
    </main>
  );
}
