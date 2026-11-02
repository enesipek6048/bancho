import Image from "next/image";
import type { CSSProperties } from "react";
import { AcikDurumu } from "@/components/AcikDurumu";
import { isletme } from "@/data/isletme";
import logo from "@/public/logo.png";

// [boy %, göreli genişlik]
const KAMISLAR = [
  [60, 1],
  [86, 1.25],
  [44, 0.85],
  [100, 1.3],
  [68, 1],
  [92, 1.2],
  [52, 0.9],
  [78, 1.1],
  [36, 0.8],
  [96, 1.3],
  [64, 1],
];

export function Giris() {
  return (
    <section id="giris" className="giris">
      <div className="giris-metin">
        <Image
          src={logo}
          alt={`${isletme.ad} logosu`}
          className="giris-logo"
          sizes="(min-width: 900px) 160px, 112px"
          priority
        />
        <h1>Kahven hazır, kruvasanın sıcak.</h1>
        <AcikDurumu />
        <div className="dugmeler">
          <a className="dugme dugme-ana" href={isletme.haritaLinki} target="_blank" rel="noopener noreferrer">
            Yol tarifi
          </a>
          <a className="dugme" href={isletme.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="kamislar" aria-hidden="true">
        {KAMISLAR.map(([boy, en], i) => (
          <span
            key={i}
            className={[
              "kamis",
              i % 3 === 1 && "kamis-turkuaz",
              i % 4 === 1 && "kamis-yaprakli",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ "--boy": `${boy}%`, "--en": en, "--sira": i } as CSSProperties}
          >
            <i />
          </span>
        ))}
      </div>
    </section>
  );
}
