import PageHeader from "@/components/ui/PageHeader";
import SpotrebiceContent from "@/components/SpotrebiceContent";

export const metadata = {
  title: "Domácí spotřebiče",
  description: "Kompletní sortiment domácích spotřebičů od značek Electrolux, AEG, Liebherr, Gorenje a dalších. Odvoz, zapojení a záruční servis v ceně.",
};

const products = [
  {
    name: "EW6F428BC PerfectCare",
    brand: "Electrolux",
    category: "Pračky",
    badge: "Novinka" as string | null,
    description: "Pračka s parním programem, 8 kg, 1200 ot/min, energetická třída A",
    bgColor: "var(--gray)",
  },
  {
    name: "FSE63637P ComfortLift",
    brand: "AEG",
    category: "Myčky",
    badge: "Top prodej" as string | null,
    description: "Vestavná myčka s technologií ComfortLift, 13 sad, AirDry",
    bgColor: "var(--navy2)",
  },
  {
    name: "CNsfd 5743",
    brand: "Liebherr",
    category: "Lednice",
    badge: null,
    description: "Kombinovaná chladnička NoFrost, 373 l, energetická třída C",
    bgColor: "#FFF9E0",
  },
  {
    name: "ZCV66050WA",
    brand: "Zanussi",
    category: "Sporáky",
    badge: null,
    description: "Volně stojící sporák, sklokeramická deska, horkovzdušná trouba",
    bgColor: "var(--gray)",
  },
  {
    name: "BPK556320M",
    brand: "AEG",
    category: "Vestavné",
    badge: "Novinka" as string | null,
    description: "Vestavná pyrolytická trouba, SteamBake, 71 l",
    bgColor: "var(--navy2)",
  },
  {
    name: "CafeRomatica 790",
    brand: "Nivona",
    category: "Kávovar",
    badge: "Top prodej" as string | null,
    description: "Automatický kávovar, Aroma Balance System, barevný displej",
    bgColor: "#FFF9E0",
  },
  {
    name: "EW8F169SC UltraCare",
    brand: "Electrolux",
    category: "Pračky",
    badge: "Akce" as string | null,
    description: "Parní pračka 9 kg, UltraCare, 1600 ot/min, Wi-Fi",
    bgColor: "var(--navy2)",
  },
  {
    name: "GI 6770",
    brand: "Gorenje",
    category: "Myčky",
    badge: null,
    description: "Vestavná myčka 16 sad, SmartFlex koše, TotalDry",
    bgColor: "var(--gray)",
  },
  {
    name: "Premium 7783",
    brand: "Mora",
    category: "Sporáky",
    badge: null,
    description: "Plynový sporák s elektrickou troubou, 60 cm, katalytické čištění",
    bgColor: "#FFF9E0",
  },
  {
    name: "In-Nova Smart 52",
    brand: "Faber",
    category: "Vestavné",
    badge: null,
    description: "Vestavný odsavač par, 52 cm, LED osvětlení, 3 rychlosti",
    bgColor: "var(--gray)",
  },
  {
    name: "EEM48321L",
    brand: "Electrolux",
    category: "Myčky",
    badge: "Akce" as string | null,
    description: "Plně vestavná myčka MaxiFlex, 14 sad, QuickSelect",
    bgColor: "var(--navy2)",
  },
  {
    name: "T9DBA68BC AbsoluteCare",
    brand: "AEG",
    category: "Pračky",
    badge: null,
    description: "Sušička s tepelným čerpadlem, 8 kg, ProSense, AbsoluteCare",
    bgColor: "#FFF9E0",
  },
];

export default function SpotrebicePage() {
  return (
    <main>
      <PageHeader
        title="Domácí spotřebiče."
        eyebrow="Spotřebiče"
        description="Nabízíme kompletní sortiment domácích spotřebičů od prémiových značek. Odvoz, zapojení a záruční servis zajistíme za vás."
      />
      <SpotrebiceContent products={products} />
    </main>
  );
}
