# Bancho Coffee

Bancho Coffee (Niksar / Tokat) tanıtım sitesi. Next.js App Router + TypeScript.

## Çalıştırma

```bash
npm install
npm run dev
```

## Sık yapılan değişiklikler

| Ne değişti? | Düzenlenecek dosya |
| --- | --- |
| Ürün, fiyat, kategori | `data/menu.ts` |
| Adres, telefon, saat, Instagram | `data/isletme.ts` |
| Logo | `public/logo.png` dosyasının üzerine yaz |

## Yayına alma

Vercel'de depoyu içe aktarmak yeterli; ek ayar gerekmez. Özel alan adı bağlanırsa
Open Graph ve JSON-LD adresleri için `NEXT_PUBLIC_SITE_URL` ortam değişkenini
(ör. `https://banchocoffee.com`) tanımla.
