import { FiyatListesi } from "@/components/FiyatListesi";
import { Footer } from "@/components/Footer";
import { Giris } from "@/components/Giris";
import { Hakkimizda } from "@/components/Hakkimizda";
import { Header } from "@/components/Header";
import { IsletmeSemasi } from "@/components/IsletmeSemasi";
import { OneCikanlar } from "@/components/OneCikanlar";
import { Ziyaret } from "@/components/Ziyaret";

export default function Page() {
  return (
    <>
      <IsletmeSemasi />
      <Header />
      <main>
        <Giris />
        <Hakkimizda />
        <OneCikanlar />
        <FiyatListesi />
        <Ziyaret />
      </main>
      <Footer />
    </>
  );
}
