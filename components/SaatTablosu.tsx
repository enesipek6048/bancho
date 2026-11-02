"use client";

import { isletme } from "@/data/isletme";
import { useDurum } from "@/lib/saat";

export function SaatTablosu() {
  const durum = useDurum();

  return (
    <table className="saatler">
      <caption className="gizli">Haftalık çalışma saatleri</caption>
      <tbody>
        {isletme.saatler.map((s, i) => {
          const bugun = durum?.gunIndeksi === i;
          return (
            <tr key={s.gun} className={bugun ? "bugun" : undefined} aria-current={bugun ? "date" : undefined}>
              <th scope="row">
                {s.gun}
                {bugun && <span className="bugun-etiket">Bugün</span>}
              </th>
              <td>
                {s.acilis} – {s.kapanis}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
