// Mutlak adresler (Open Graph görseli, JSON-LD) için sitenin kök adresi.
// Vercel'de VERCEL_PROJECT_PRODUCTION_URL otomatik gelir; özel alan adı için
// NEXT_PUBLIC_SITE_URL tanımlanabilir.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
