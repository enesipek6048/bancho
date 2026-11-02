import { KopyalaDugmesi } from "@/components/KopyalaDugmesi";
import { SaatTablosu } from "@/components/SaatTablosu";
import { isletme, tamAdres } from "@/data/isletme";

export function Ziyaret() {
  return (
    <section id="ziyaret" className="bolum ziyaret">
      <div className="kap">
        <h2>Ziyaret</h2>
        <div className="ziyaret-izgara">
          <div className="ziyaret-bilgi">
            <dl>
              <div>
                <dt>Adres</dt>
                <dd>
                  <address>{tamAdres}</address>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd className="telefon-satiri">
                  <a href={`tel:${isletme.telefonUluslararasi}`}>{isletme.telefon}</a>
                  <KopyalaDugmesi metin={isletme.telefon} aciklama="Telefon numarasını kopyala" />
                </dd>
              </div>
              <div>
                <dt>E-posta</dt>
                <dd>
                  <a href={`mailto:${isletme.eposta}`}>{isletme.eposta}</a>
                </dd>
              </div>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={isletme.instagram} target="_blank" rel="noopener noreferrer">
                    {isletme.instagramKullanici}
                  </a>
                </dd>
              </div>
            </dl>
            <a className="dugme dugme-ana" href={isletme.haritaLinki} target="_blank" rel="noopener noreferrer">
              Haritada aç
            </a>
          </div>
          <div className="saat-karti">
            <h3>Çalışma saatleri</h3>
            <SaatTablosu />
          </div>
        </div>
      </div>
    </section>
  );
}
