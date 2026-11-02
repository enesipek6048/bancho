"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { isletme } from "@/data/isletme";
import logo from "@/public/logo.png";

const BAGLANTILAR = [
  { href: "#giris", ad: "Giriş" },
  { href: "#hakkimizda", ad: "Hakkımızda" },
  { href: "#one-cikanlar", ad: "Öne çıkanlar" },
  { href: "#fiyatlar", ad: "Fiyat listesi" },
  { href: "#ziyaret", ad: "Ziyaret" },
];

export function Header() {
  const [acik, setAcik] = useState(false);

  useEffect(() => {
    if (!acik) return;
    const kapat = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAcik(false);
    };
    window.addEventListener("keydown", kapat);
    return () => window.removeEventListener("keydown", kapat);
  }, [acik]);

  return (
    <header className="ust">
      <div className="ust-ic">
        <a href="#giris" className="ust-logo" onClick={() => setAcik(false)}>
          <Image src={logo} alt={`${isletme.ad} ana sayfa`} sizes="160px" priority />
        </a>
        <button
          type="button"
          className="menu-dugme"
          aria-expanded={acik}
          aria-controls="ana-menu"
          onClick={() => setAcik((a) => !a)}
        >
          {acik ? "Kapat" : "Menü"}
        </button>
        <nav id="ana-menu" className={acik ? "ana-menu acik" : "ana-menu"} aria-label="Ana menü">
          <ul>
            {BAGLANTILAR.map((b) => (
              <li key={b.href}>
                <a href={b.href} onClick={() => setAcik(false)}>
                  {b.ad}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
