"use client";

import { isletme } from "@/data/isletme";
import { useDurum } from "@/lib/saat";

export function AcikDurumu() {
  const durum = useDurum();
  const { acilis, kapanis } = isletme.saatler[0];

  if (!durum) {
    // İlk çizim ve JavaScript'siz görünüm: saatler yine de okunur.
    return (
      <p className="durum">
        <span className="durum-nokta" aria-hidden="true" />
        <span>
          {acilis} – {kapanis}
        </span>
      </p>
    );
  }

  return (
    <p className={durum.acik ? "durum durum-acik" : "durum"} role="status">
      <span className="durum-nokta" aria-hidden="true" />
      <strong>{durum.acik ? "Şu an açığız" : "Şu an kapalıyız"}</strong>
      <span>{durum.metin}</span>
    </p>
  );
}
