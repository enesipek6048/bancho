const TABELALAR = [
  "Bambu duvarlar",
  "Dekoratif tabelalar",
  "Gece yarısına kadar açık",
  "Samimi ortam",
];

export function Hakkimizda() {
  return (
    <section id="hakkimizda" className="hakkimizda">
      <div className="kap hakkimizda-metin">
        <h2>Niksar&apos;ın kahve molası</h2>
        <p>
          Sabah ilk kahven, öğlen tatlı bir kruvasan, akşam arkadaşlarla uzun bir sohbet.
          Bancho&apos;da günün her saati için bir bahane var. Kapımız her gün sabah 10&apos;dan
          gece yarısına kadar açık.
        </p>
      </div>
      <div className="duvar">
        <ul className="kap tabelalar">
          {TABELALAR.map((t) => (
            <li key={t} className="tabela">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
