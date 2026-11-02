// Menü ve fiyatlar yalnızca bu dosyada durur.
// Fiyat değişince ilgili satırdaki sayıyı düzenlemek yeterli.
//
// Sıcak/soğuk kategorilerde null = o seçenek yok (tabloda "–" görünür).
// Tek fiyatlı kategorilerde tabloda tek "Fiyat" sütunu görünür.
// aciklama: ürün adının altında küçük yazıyla görünür (isteğe bağlı).

export type SicakSogukUrun = {
  ad: string;
  aciklama?: string;
  sicak: number | null;
  soguk: number | null;
};

export type TekFiyatUrun = {
  ad: string;
  aciklama?: string;
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
      { ad: "Espresso", aciklama: "Yoğun ve kısa, tek shot saf kahve.", sicak: 150, soguk: null },
      { ad: "Double Espresso", aciklama: "Çift shot espresso, daha güçlü ve dolgun.", sicak: 170, soguk: null },
      { ad: "Americano", aciklama: "Espresso ve sıcak su; sade, yumuşak içim.", sicak: 180, soguk: 190 },
      { ad: "Red Eye", aciklama: "Filtre kahveye bir shot espresso eklenir.", sicak: 210, soguk: 210 },
      { ad: "Dead Eye", aciklama: "Filtre kahveye üç shot espresso; en güçlüsü.", sicak: 220, soguk: 220 },
      { ad: "Filter Coffee", aciklama: "Demleme filtre kahve, hafif ve aromatik.", sicak: 180, soguk: 190 },
      { ad: "Cold Brew", aciklama: "Soğuk suda saatlerce demlenmiş, yumuşak ve az asidik.", sicak: null, soguk: 220 },
      { ad: "Türk Kahvesi", aciklama: "Bol köpüklü, geleneksel Türk kahvesi.", sicak: 130, soguk: null },
      { ad: "Double Türk Kahvesi", aciklama: "Büyük fincanda, iki kat Türk kahvesi.", sicak: 150, soguk: null },
    ],
  },
  {
    id: "milk-coffee",
    ad: "Milk Coffee",
    tip: "sicak-soguk",
    urunler: [
      { ad: "White Mocha", aciklama: "Espresso, beyaz çikolata sosu ve süt.", sicak: 210, soguk: 220 },
      { ad: "Pink White Mocha", aciklama: "Beyaz çikolata ve espressoya pembe, meyvemsi bir dokunuş.", sicak: 220, soguk: 230 },
      { ad: "Pink Mocha", aciklama: "Çikolatalı mochanın pembe, meyvemsi yorumu.", sicak: 220, soguk: 230 },
      { ad: "Mocha", aciklama: "Espresso, bitter çikolata sosu ve süt.", sicak: 210, soguk: 220 },
      { ad: "Ice Pistachios Latte", aciklama: "Espresso, Antep fıstığı aroması ve soğuk süt.", sicak: null, soguk: 240 },
      { ad: "Caramel Macchiato", aciklama: "Vanilyalı süt, üstüne espresso ve karamel sos.", sicak: 210, soguk: 220 },
      { ad: "Latte", aciklama: "Espresso ve bol buharlı süt, ince köpükle.", sicak: 180, soguk: 190 },
      { ad: "Vanilla Latte", aciklama: "Espresso, süt ve vanilya şurubu.", sicak: 210, soguk: 220 },
      { ad: "Caramel Latte", aciklama: "Espresso, süt ve karamel şurubu.", sicak: 210, soguk: 220 },
      { ad: "Chai Tea Latte", aciklama: "Baharatlı chai çayı ve süt; kahvesiz, tarçın ve zencefil notalı.", sicak: 210, soguk: 220 },
      { ad: "Toffee Nut Latte", aciklama: "Espresso, süt ve tereyağlı fındık-karamel aroması.", sicak: 210, soguk: 220 },
      { ad: "Coco Pecan Latte", aciklama: "Espresso, süt, hindistan cevizi ve pekan cevizi aroması.", sicak: 220, soguk: 230 },
      { ad: "Salted Caramel Latte", aciklama: "Espresso, süt ve tuzlu karamel; tatlı-tuzlu denge.", sicak: 210, soguk: 220 },
      { ad: "Cookie Latte", aciklama: "Espresso, süt ve kurabiye aroması.", sicak: 230, soguk: 240 },
      { ad: "Cortado", aciklama: "Espresso ve eşit miktarda sıcak süt; kısa ve dengeli.", sicak: 200, soguk: null },
      { ad: "Flat White", aciklama: "Çift shot espresso ve ince, kadifemsi süt köpüğü.", sicak: 200, soguk: 210 },
      { ad: "Irish Latte", aciklama: "Espresso, süt ve Irish krema aroması (alkolsüz).", sicak: 230, soguk: 240 },
      { ad: "Pumpkin Spice Latte", aciklama: "Espresso, süt, bal kabağı ve tarçınlı baharat karışımı.", sicak: 230, soguk: 240 },
    ],
  },
  {
    id: "summer-fresh",
    ad: "Summer Fresh",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Handmade Lemonade", aciklama: "Taze sıkılmış limonla ev yapımı limonata.", fiyat: 210 },
      { ad: "Apple Lemonade", aciklama: "Limonata ve yeşil elma; ekşi ve ferah.", fiyat: 220 },
      { ad: "Purple Pop", aciklama: "Mor renkli, meyveli ve gazlı ferahlatıcı.", fiyat: 240 },
      { ad: "Chilli Mango", aciklama: "Mango ve hafif acı biber; tatlı-acı bir ferahlık.", fiyat: 240 },
      { ad: "Cool Punch", aciklama: "Karışık meyveli, buz gibi punch.", fiyat: 240 },
      { ad: "Mango Dragon", aciklama: "Mango ve ejder meyvesi.", fiyat: 230 },
      { ad: "Cool Lime", aciklama: "Lime ve nane, buz gibi ferahlık.", fiyat: 230 },
      { ad: "Berry Hibiscus", aciklama: "Hibiskus çayı ve orman meyveleri.", fiyat: 230 },
      { ad: "Strawberry Açai", aciklama: "Çilek ve açai meyvesi.", fiyat: 230 },
      { ad: "Sakura Peach", aciklama: "Şeftali ve kiraz çiçeği aroması.", fiyat: 230 },
      { ad: "Pomelo", aciklama: "Pomelo (greyfurt ailesi) ile ekşi-tatlı ferahlatıcı.", fiyat: 230 },
      { ad: "Sorrel Kokteyl", aciklama: "Bancho'nun imza kokteyli (alkolsüz).", fiyat: 250 },
      { ad: "Zeus Kokteyl", aciklama: "Bancho'nun imza kokteyli (alkolsüz).", fiyat: 250 },
      { ad: "Halius Kokteyl", aciklama: "Bancho'nun imza kokteyli (alkolsüz).", fiyat: 250 },
    ],
  },
  {
    id: "frozen",
    ad: "Frozen",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Wild Berries Frozen", aciklama: "Orman meyveleri, buzla blenderdan geçmiş.", fiyat: 240 },
      { ad: "Strawberry Frozen", aciklama: "Çilek ve buz; yoğun ve ferah.", fiyat: 240 },
      { ad: "Passion Frozen", aciklama: "Çarkıfelek meyvesi ve buz.", fiyat: 240 },
      { ad: "Mango Frozen", aciklama: "Mango ve buz.", fiyat: 240 },
      { ad: "Watermelon Frozen", aciklama: "Karpuz ve buz.", fiyat: 240 },
      { ad: "Melon Frozen", aciklama: "Kavun ve buz.", fiyat: 240 },
      { ad: "Pineapple Frozen", aciklama: "Ananas ve buz.", fiyat: 240 },
      { ad: "Raspberry Frozen", aciklama: "Ahududu ve buz.", fiyat: 240 },
      { ad: "Blueberry Frozen", aciklama: "Yaban mersini ve buz.", fiyat: 240 },
    ],
  },
  {
    id: "frappuccino",
    ad: "Frappuccino",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Caramel Frappuccino", aciklama: "Kahve, süt, buz ve karamel; krema ile.", fiyat: 240 },
      { ad: "White Mocha Frappuccino", aciklama: "Kahve, beyaz çikolata, süt ve buz; krema ile.", fiyat: 240 },
      { ad: "Mocha Frappuccino", aciklama: "Kahve, çikolata, süt ve buz; krema ile.", fiyat: 240 },
      { ad: "Espresso Frappuccino", aciklama: "Espresso, süt ve buz; kahvesi bol.", fiyat: 240 },
      { ad: "Strawberry Frappuccino", aciklama: "Çilek, süt ve buz; kahvesiz, krema ile.", fiyat: 240 },
      { ad: "Chai Frappuccino", aciklama: "Chai baharatları, süt ve buz; krema ile.", fiyat: 240 },
    ],
  },
  {
    id: "milkshake",
    ad: "Milkshake",
    tip: "tek-fiyat",
    urunler: [
      { ad: "Caramel Milkshake", aciklama: "Dondurma, süt ve karamel.", fiyat: 240 },
      { ad: "White Mocha Milkshake", aciklama: "Dondurma, süt ve beyaz çikolata.", fiyat: 240 },
      { ad: "Mocha Milkshake", aciklama: "Dondurma, süt, çikolata ve bir tutam kahve.", fiyat: 240 },
      { ad: "Strawberry Milkshake", aciklama: "Dondurma, süt ve çilek.", fiyat: 240 },
      { ad: "Oreo Milkshake", aciklama: "Dondurma, süt ve Oreo bisküvi.", fiyat: 240 },
      { ad: "Banana Milkshake", aciklama: "Dondurma, süt ve muz.", fiyat: 240 },
      { ad: "Vanilla Milkshake", aciklama: "Dondurma, süt ve vanilya.", fiyat: 240 },
      { ad: "Coconut Milkshake", aciklama: "Dondurma, süt ve hindistan cevizi.", fiyat: 240 },
      { ad: "Wild Berry Milkshake", aciklama: "Dondurma, süt ve orman meyveleri.", fiyat: 240 },
    ],
  },
];
