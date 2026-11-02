// İşletme bilgileri yalnızca bu dosyada durur.

export type GunSaati = {
  gun: string;
  acilis: string; // "SS:DD"
  kapanis: string; // "00:00" gece yarısı demek; açılıştan küçükse ertesi güne sarkar
};

// Sıra Pazartesi'den Pazar'a olmalı; saat hesabı ve JSON-LD bu sıraya göre çalışır.
const saatler: GunSaati[] = [
  { gun: "Pazartesi", acilis: "10:00", kapanis: "00:00" },
  { gun: "Salı", acilis: "10:00", kapanis: "00:00" },
  { gun: "Çarşamba", acilis: "10:00", kapanis: "00:00" },
  { gun: "Perşembe", acilis: "10:00", kapanis: "00:00" },
  { gun: "Cuma", acilis: "10:00", kapanis: "00:00" },
  { gun: "Cumartesi", acilis: "10:00", kapanis: "00:00" },
  { gun: "Pazar", acilis: "10:00", kapanis: "00:00" },
];

export const isletme = {
  ad: "Bancho Coffee",
  slogan: "Coffee & Croissant",
  adres: {
    acikAdres: "Kültür Mah. Atatürk Bulvarı No: 262/14",
    postaKodu: "60600",
    ilce: "Niksar",
    il: "Tokat",
    ulkeKodu: "TR",
  },
  telefon: "0542 594 33 09",
  telefonUluslararasi: "+905425943309",
  eposta: "banchocoffee@gmail.com",
  instagram: "https://www.instagram.com/banchocoffee/",
  instagramKullanici: "@banchocoffee",
  haritaLinki:
    "https://www.google.com/maps/search/?api=1&query=Bancho+Coffee+Atat%C3%BCrk+Bulvar%C4%B1+262+Niksar+Tokat",
  saatler,
};

export const tamAdres = `${isletme.adres.acikAdres}, ${isletme.adres.postaKodu} ${isletme.adres.ilce} / ${isletme.adres.il}`;
