import { isletme } from "@/data/isletme";
import { kategoriler } from "@/data/menu";
import { siteUrl } from "@/lib/site";

// isletme.saatler ile aynı sıra: Pazartesi → Pazar
const SCHEMA_GUNLERI = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function fiyatAraligi() {
  const fiyatlar = kategoriler.flatMap((k) =>
    k.tip === "tek-fiyat"
      ? k.urunler.map((u) => u.fiyat)
      : k.urunler.flatMap((u) => [u.sicak, u.soguk]),
  );
  const sayilar = fiyatlar.filter((f): f is number => f !== null);
  return `₺${Math.min(...sayilar)}–₺${Math.max(...sayilar)}`;
}

export function IsletmeSemasi() {
  const sema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "@id": `${siteUrl}/#isletme`,
    name: isletme.ad,
    slogan: isletme.slogan,
    url: siteUrl,
    image: `${siteUrl}/logo.png`,
    logo: `${siteUrl}/logo.png`,
    telephone: isletme.telefonUluslararasi,
    email: isletme.eposta,
    priceRange: fiyatAraligi(),
    servesCuisine: ["Kahve", "Kruvasan"],
    hasMenu: `${siteUrl}/#fiyatlar`,
    hasMap: isletme.haritaLinki,
    sameAs: [isletme.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: isletme.adres.acikAdres,
      postalCode: isletme.adres.postaKodu,
      addressLocality: isletme.adres.ilce,
      addressRegion: isletme.adres.il,
      addressCountry: isletme.adres.ulkeKodu,
    },
    openingHoursSpecification: isletme.saatler.map((s, i) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SCHEMA_GUNLERI[i],
      opens: s.acilis,
      closes: s.kapanis,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(sema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
