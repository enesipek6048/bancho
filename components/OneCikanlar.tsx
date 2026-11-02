import { oneCikanlar, type OneCikan } from "@/data/menu";

const SUSLER: Record<OneCikan["cesit"], { x: number; y: number; r: number; renk: string }[]> = {
  fistik: [
    { x: 92, y: 40, r: 4, renk: "#a6d36e" },
    { x: 108, y: 54, r: 5, renk: "#a6d36e" },
    { x: 88, y: 68, r: 4, renk: "#a6d36e" },
    { x: 60, y: 58, r: 5, renk: "#a6d36e" },
    { x: 68, y: 78, r: 4, renk: "#a6d36e" },
    { x: 138, y: 56, r: 4, renk: "#a6d36e" },
    { x: 132, y: 76, r: 5, renk: "#a6d36e" },
    { x: 34, y: 94, r: 4, renk: "#a6d36e" },
    { x: 166, y: 94, r: 4, renk: "#a6d36e" },
  ],
  "orman-meyvesi": [
    { x: 94, y: 42, r: 7, renk: "#173f3a" },
    { x: 110, y: 64, r: 6, renk: "#ffffff" },
    { x: 62, y: 60, r: 6, renk: "#ffffff" },
    { x: 70, y: 82, r: 5, renk: "#173f3a" },
    { x: 138, y: 58, r: 7, renk: "#173f3a" },
    { x: 130, y: 82, r: 5, renk: "#ffffff" },
    { x: 36, y: 96, r: 5, renk: "#173f3a" },
    { x: 164, y: 96, r: 5, renk: "#ffffff" },
  ],
};

function Kruvasan({ cesit }: { cesit: OneCikan["cesit"] }) {
  return (
    <svg className="kruvasan" viewBox="0 0 200 136" aria-hidden="true">
      {/* Hilal gövde: dışta dilimli kenar, içte yay */}
      <path
        d="M14 126 Q10 84 40 62 Q44 32 76 26 Q100 4 124 26 Q156 32 160 62 Q190 84 186 126 Q172 108 150 102 Q136 88 122 90 Q100 82 78 90 Q64 88 50 102 Q28 108 14 126 Z"
        fill="#22c7a9"
        stroke="#173f3a"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Dilim çizgileri */}
      <g fill="none" stroke="#173f3a" strokeWidth="3" strokeLinecap="round">
        <path d="M40 62 Q54 78 50 102" />
        <path d="M76 26 Q86 56 78 90" />
        <path d="M124 26 Q114 56 122 90" />
        <path d="M160 62 Q146 78 150 102" />
      </g>
      {SUSLER[cesit].map((s) => (
        <circle
          key={`${s.x}-${s.y}`}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill={s.renk}
          stroke="#173f3a"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

export function OneCikanlar() {
  return (
    <section id="one-cikanlar" className="bolum one-cikanlar">
      <div className="kap">
        <h2>Öne çıkanlar</h2>
        <ul className="urun-kartlari">
          {oneCikanlar.map((u) => (
            <li key={u.ad} className="urun-karti">
              <Kruvasan cesit={u.cesit} />
              <h3>{u.ad}</h3>
              <p>{u.aciklama}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
