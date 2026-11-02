"use client";

import { useEffect, useRef, useState } from "react";

type Sonuc = "bos" | "tamam" | "hata";

async function panoyaYaz(metin: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(metin);
    return;
  }
  // HTTPS olmayan bağlantılar ve eski tarayıcılar için
  const alan = document.createElement("textarea");
  alan.value = metin;
  alan.setAttribute("readonly", "");
  alan.style.position = "fixed";
  alan.style.opacity = "0";
  document.body.appendChild(alan);
  alan.select();
  const basarili = document.execCommand("copy");
  alan.remove();
  if (!basarili) throw new Error("Kopyalanamadı");
}

const ETIKETLER: Record<Sonuc, string> = {
  bos: "Kopyala",
  tamam: "Kopyalandı",
  hata: "Kopyalanamadı",
};

export function KopyalaDugmesi({ metin, aciklama }: { metin: string; aciklama: string }) {
  const [sonuc, setSonuc] = useState<Sonuc>("bos");
  const zamanlayici = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(zamanlayici.current), []);

  async function kopyala() {
    try {
      await panoyaYaz(metin);
      setSonuc("tamam");
    } catch {
      setSonuc("hata");
    }
    clearTimeout(zamanlayici.current);
    zamanlayici.current = setTimeout(() => setSonuc("bos"), 2000);
  }

  return (
    <button
      type="button"
      className="dugme dugme-kucuk"
      onClick={kopyala}
      aria-label={sonuc === "bos" ? aciklama : ETIKETLER[sonuc]}
    >
      <span aria-live="polite">{ETIKETLER[sonuc]}</span>
    </button>
  );
}
