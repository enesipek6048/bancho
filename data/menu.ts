// Menü ve fiyatlar yalnızca bu dosyada durur.
// Fiyat değişince ilgili satırdaki sayıyı düzenlemek yeterli.
//
// Sıcak/soğuk kategorilerde null = o seçenek yok (tabloda "–" görünür).
// Tek fiyatlı kategorilerde tabloda tek "Fiyat" sütunu görünür.

export type SicakSogukUrun = {
  ad: string;
  sicak: number | null;
  soguk: number | null;
};

export type TekFiyatUrun = {
  ad: string;
  fiyat: number;
};

export type Kategori =
  | { id: string; ad: string; tip: "sicak-soguk"; urunler: SicakSogukUrun[] }
  | { id: string; ad: string; tip: "tek-fiyat"; urunler: TekFiyatUrun[] };

export type OneCikan = {
  ad: string;
  aciklama: string;
  cesit: "fistik" | "orman-meyvesi";
};

export const oneCikanlar: OneCikan[] = [
  {
    ad: "Fıstıklı Kruvasan",
    aciklama: "Çıtır katmanlar, bol fıstık. Yanına bir latte iyi gider.",
    cesit: "fistik",
  },
  {
    ad: "Orman Meyveli Kruvasan",
    aciklama: "Çıtır katmanlar, ekşi-tatlı orman meyveleri. Soğuk kahveyle de olur.",
    cesit: "orman-meyvesi",
  },
];

export const kategoriler: Kategori[] = [
  {
    id: "black-coffee",
    ad: "Black Coffee",
    tip: "sicak-soguk",
    urunler: [
      { ad: "Espresso", sicak: 150, soguk: null },
      { ad: "Double Espresso", sicak: 170, soguk: null },
      { ad: "Americano", sicak: 180, soguk: 190 },
      { ad: "Red Eye", sicak: 210, soguk: 210 },
      { ad: "Dead Eye", sicak: 220, soguk: 220 },
      { ad: "Filter Coffee", sicak: 180, soguk: 190 },
      { ad: "Cold Brew", sicak: null, soguk: 220 },
      { ad: "Türk Kahvesi", sicak: 130, soguk: null },
      { ad: "Double Türk Kahvesi", sicak: 150, soguk: null },
    ],
  },
  {
    id: "milk-coffee",
    ad: "Milk Coffee",
    tip: "sicak-soguk",
    urunler: [
      { ad: "White Mocha", sicak: 210, soguk: 220 },
      { ad: "Pink White Mocha", sicak: 220, soguk: 230 },
      { ad: "Pink Mocha", sicak: 220, soguk: 230 },
      { ad: "Mocha", sicak: 210, soguk: 220 },
      { ad: "Ice Pistachios Latte", sicak: null, soguk: 240 },
      { ad: "Caramel Macchiato", sicak: 210, soguk: 220 },
      { ad: "Latte", sicak: 180, soguk: 190 },
      { ad: "Vanilla Latte", sicak: 210, soguk: 220 },
      { ad: "Caramel Latte", sicak: 210, soguk: 220 },
      { ad: "Chai Tea Latte", sicak: 210, soguk: 220 },
      { ad: "Toffee Nut Latte", sicak: 210, soguk: 220 },
      { ad: "Coco Pecan Latte", sicak: 220, soguk: 230 },
      { ad: "Salted Caramel Latte", sicak: 210, soguk: 220 },
      { ad: "Cookie Latte", sicak: 230, soguk: 240 },
      { ad: "Cortado", sicak: 200, soguk: null },
      { ad: "Flat White", sicak: 200, soguk: 210 },
      { ad: "Irish Latte", sicak: 230, soguk: 240 },
      { ad: "Pumpkin Spice Latte", sicak: 230, soguk: 240 },
    ],
  },
  {
    id: "summer-fresh",
    ad: "Summer Fresh",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Handmade Lemonade", fiyat: 210 },
      { ad: "Apple Lemonade", fiyat: 220 },
      { ad: "Purple Pop", fiyat: 240 },
      { ad: "Chilli Mango", fiyat: 240 },
      { ad: "Cool Punch", fiyat: 240 },
      { ad: "Mango Dragon", fiyat: 230 },
      { ad: "Cool Lime", fiyat: 230 },
      { ad: "Berry Hibiscus", fiyat: 230 },
      { ad: "Strawberry Açai", fiyat: 230 },
      { ad: "Sakura Peach", fiyat: 230 },
      { ad: "Pomelo", fiyat: 230 },
      { ad: "Sorrel Kokteyl", fiyat: 250 },
      { ad: "Zeus Kokteyl", fiyat: 250 },
      { ad: "Halius Kokteyl", fiyat: 250 },
    ],
  },
  {
    id: "frozen",
    ad: "Frozen",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Wild Berries Frozen", fiyat: 240 },
      { ad: "Strawberry Frozen", fiyat: 240 },
      { ad: "Passion Frozen", fiyat: 240 },
      { ad: "Mango Frozen", fiyat: 240 },
      { ad: "Watermelon Frozen", fiyat: 240 },
      { ad: "Melon Frozen", fiyat: 240 },
      { ad: "Pineapple Frozen", fiyat: 240 },
      { ad: "Raspberry Frozen", fiyat: 240 },
      { ad: "Blueberry Frozen", fiyat: 240 },
    ],
  },
  {
    id: "frappuccino",
    ad: "Frappuccino",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Caramel Frappuccino", fiyat: 240 },
      { ad: "White Mocha Frappuccino", fiyat: 240 },
      { ad: "Mocha Frappuccino", fiyat: 240 },
      { ad: "Espresso Frappuccino", fiyat: 240 },
      { ad: "Strawberry Frappuccino", fiyat: 240 },
      { ad: "Chai Frappuccino", fiyat: 240 },
    ],
  },
  {
    id: "milkshake",
    ad: "Milkshake",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Caramel Milkshake", fiyat: 240 },
      { ad: "White Mocha Milkshake", fiyat: 240 },
      { ad: "Mocha Milkshake", fiyat: 240 },
      { ad: "Strawberry Milkshake", fiyat: 240 },
      { ad: "Oreo Milkshake", fiyat: 240 },
      { ad: "Banana Milkshake", fiyat: 240 },
      { ad: "Vanilla Milkshake", fiyat: 240 },
      { ad: "Coconut Milkshake", fiyat: 240 },
      { ad: "Wild Berry Milkshake", fiyat: 240 },
    ],
  },
];
