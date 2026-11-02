"use client";

import { useEffect, useState } from "react";
import { isletme } from "@/data/isletme";

const GUN_INDEKSI: Record<string, number> = {
  Mon: 0,
  Tue: 1,
  Wed: 2,
  Thu: 3,
  Fri: 4,
  Sat: 5,
  Sun: 6,
};

const GUN_DAKIKA = 24 * 60;

export type Durum = {
  gunIndeksi: number; // 0 = Pazartesi
  acik: boolean;
  metin: string; // "Kapanış 00:00" veya "Açılış 10:00"
};

function dakikaya(saat: string) {
  const [s, d] = saat.split(":").map(Number);
  return s * 60 + d;
}

// Ziyaretçinin cihaz saat dilimi ne olursa olsun Türkiye saatini verir.
function turkiyeZamani(an: Date) {
  const parcalar = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Istanbul",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(an);
  const al = (tip: string) => parcalar.find((p) => p.type === tip)?.value ?? "";
  return {
    gunIndeksi: GUN_INDEKSI[al("weekday")],
    dakika: (Number(al("hour")) % 24) * 60 + Number(al("minute")),
  };
}

function aralik(gunIndeksi: number) {
  const { acilis, kapanis } = isletme.saatler[gunIndeksi];
  const bas = dakikaya(acilis);
  let son = dakikaya(kapanis);
  if (son <= bas) son += GUN_DAKIKA; // gece yarısına veya ertesi güne sarkan kapanış
  return { bas, son };
}

export function durumHesapla(an: Date): Durum {
  const { gunIndeksi, dakika } = turkiyeZamani(an);
  const bugun = aralik(gunIndeksi);
  const dunIndeksi = (gunIndeksi + 6) % 7;
  const dun = aralik(dunIndeksi);

  // Dünkü vardiya bu güne sarkmış olabilir (ör. kapanış 01:00 yapılırsa).
  if (dakika + GUN_DAKIKA < dun.son) {
    return {
      gunIndeksi,
      acik: true,
      metin: `Kapanış ${isletme.saatler[dunIndeksi].kapanis}`,
    };
  }
  if (dakika >= bugun.bas && dakika < bugun.son) {
    return {
      gunIndeksi,
      acik: true,
      metin: `Kapanış ${isletme.saatler[gunIndeksi].kapanis}`,
    };
  }
  const sonrakiIndeks = dakika < bugun.bas ? gunIndeksi : (gunIndeksi + 1) % 7;
  return {
    gunIndeksi,
    acik: false,
    metin: `Açılış ${isletme.saatler[sonrakiIndeks].acilis}`,
  };
}

// Sunucuda null döner; böylece statik HTML ile tarayıcı çıktısı çakışmaz.
export function useDurum(): Durum | null {
  const [durum, setDurum] = useState<Durum | null>(null);

  useEffect(() => {
    const guncelle = () => setDurum(durumHesapla(new Date()));
    guncelle();
    const zamanlayici = setInterval(guncelle, 30_000);
    return () => clearInterval(zamanlayici);
  }, []);

  return durum;
}
