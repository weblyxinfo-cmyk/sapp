import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "SAPP Pribram — Domaci spotrebice & kuchyne",
    template: "%s | SAPP Pribram",
  },
  description:
    "Specializovana prodejna domacich spotrebicu a kuchynske studio v Pribrami. Odvoz a zapojeni zdarma, vlastni zarucni servis.",
  openGraph: {
    locale: "cs_CZ",
    type: "website",
    siteName: "SAPP Pribram",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={plusJakarta.variable}>
      <body className={`${plusJakarta.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SAPP Příbram",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nádražní 15",
                "postalCode": "261 01",
                "addressLocality": "Příbram",
                "addressCountry": "CZ"
              },
              "telephone": "+420318625333",
              "email": "sapp@sapp.cz",
              "url": "https://www.sapp.cz",
              "openingHours": "Mo-Fr 08:00-17:00"
            })
          }}
        />
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
