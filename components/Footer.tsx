import { isletme } from "@/data/isletme";

export function Footer() {
  return (
    <footer className="alt">
      <div className="kap alt-ic">
        <p className="alt-ad">{isletme.ad}</p>
        <p>{isletme.slogan}</p>
      </div>
    </footer>
  );
}
