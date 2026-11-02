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
        <h2>Niksar&apos;da bambu duvarlı bir köşe</h2>
        <p>
          Duvarlar bambu, her köşede bir tabela var. Kahveni al, kruvasanını seç, acelen yoksa
          otur. Gece yarısına kadar buradayız; akşamın sonunu da bizde bitirebilirsin.
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
