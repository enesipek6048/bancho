"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { kategoriler, type Kategori } from "@/data/menu";

const SEKMELER = [
  { id: "tumu", ad: "Tümü" },
  ...kategoriler.map((k) => ({ id: k.id, ad: k.ad })),
];

function Fiyat({ deger }: { deger: number | null }) {
  if (deger === null) {
    return (
      <>
        <span aria-hidden="true">–</span>
        <span className="gizli">Yok</span>
      </>
    );
  }
  return <>{deger} ₺</>;
}

function KategoriTablosu({ kategori }: { kategori: Kategori }) {
  const baslikId = `kategori-${kategori.id}`;
  return (
    <div className="kategori">
      <h3 id={baslikId}>{kategori.ad}</h3>
      <table aria-labelledby={baslikId}>
        <thead>
          <tr>
            <th scope="col">Ürün</th>
            {kategori.tip === "sicak-soguk" ? (
              <>
                <th scope="col" className="fiyat">
                  Sıcak
                </th>
                <th scope="col" className="fiyat">
                  Soğuk
                </th>
              </>
            ) : (
              <th scope="col" className="fiyat">
                Fiyat
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {kategori.tip === "sicak-soguk"
            ? kategori.urunler.map((u) => (
                <tr key={u.ad}>
                  <th scope="row">{u.ad}</th>
                  <td className="fiyat">
                    <Fiyat deger={u.sicak} />
                  </td>
                  <td className="fiyat">
                    <Fiyat deger={u.soguk} />
                  </td>
                </tr>
              ))
            : kategori.urunler.map((u) => (
                <tr key={u.ad}>
                  <th scope="row">{u.ad}</th>
                  <td className="fiyat">
                    <Fiyat deger={u.fiyat} />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export function FiyatListesi() {
  const [aktif, setAktif] = useState("tumu");
  const sekmeRefleri = useRef<(HTMLButtonElement | null)[]>([]);

  const gorunen = aktif === "tumu" ? kategoriler : kategoriler.filter((k) => k.id === aktif);

  function klavye(e: KeyboardEvent, indeks: number) {
    const son = SEKMELER.length - 1;
    const hedefler: Record<string, number> = {
      ArrowRight: indeks === son ? 0 : indeks + 1,
      ArrowLeft: indeks === 0 ? son : indeks - 1,
      Home: 0,
      End: son,
    };
    const hedef = hedefler[e.key];
    if (hedef === undefined) return;
    e.preventDefault();
    setAktif(SEKMELER[hedef].id);
    sekmeRefleri.current[hedef]?.focus();
  }

  return (
    <section id="fiyatlar" className="bolum fiyatlar">
      <div className="kap">
        <h2>Fiyat listesi</h2>
        <div className="sekmeler" role="tablist" aria-label="Menü kategorileri">
          {SEKMELER.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                sekmeRefleri.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`sekme-${s.id}`}
              aria-selected={aktif === s.id}
              aria-controls="fiyat-paneli"
              tabIndex={aktif === s.id ? 0 : -1}
              className="sekme"
              onClick={() => setAktif(s.id)}
              onKeyDown={(e) => klavye(e, i)}
            >
              {s.ad}
            </button>
          ))}
        </div>
        <div
          id="fiyat-paneli"
          role="tabpanel"
          aria-labelledby={`sekme-${aktif}`}
          className={aktif === "tumu" ? "kategori-izgara" : "kategori-tek"}
        >
          {gorunen.map((k) => (
            <KategoriTablosu key={k.id} kategori={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
