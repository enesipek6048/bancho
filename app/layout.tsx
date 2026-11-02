import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Unbounded } from "next/font/google";
import type { ReactNode } from "react";
import { isletme } from "@/data/isletme";
import { siteUrl } from "@/lib/site";
import "./globals.css";

// latin-ext: ş, ğ, ı, İ ve ₺ karakterleri için gerekli.
const unbounded = Unbounded({
  subsets: ["latin", "latin-ext"],
  variable: "--font-baslik",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-metin",
  display: "swap",
});

const baslik = "Bancho Coffee | Niksar Kahve & Kruvasan";
const aciklama =
  "Niksar Atatürk Bulvarı'nda bambu duvarlı, samimi bir kahve ve kruvasan durağı. Her gün 10:00 – 00:00 açık. Menü, fiyatlar ve yol tarifi burada.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: baslik,
  description: aciklama,
  alternates: { canonical: "/" },
  icons: { icon: "/simge.png", apple: "/simge.png" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "/",
    siteName: isletme.ad,
    title: baslik,
    description: aciklama,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${isletme.ad} logosu` }],
  },
  twitter: {
    card: "summary_large_image",
    title: baslik,
    description: aciklama,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#22c7a9",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr" className={`${unbounded.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
