import { isletme } from "@/data/isletme";

export function Footer() {
  return (
    <footer className="alt">
      <div className="kap alt-ic">
        <p className="alt-ad">{isletme.ad}</p>
        <p>{isletme.slogan}</p>
      </div>
      <div className="kap alt-imza">
        <p>
          © {new Date().getFullYear()} {isletme.ad}
        </p>
        <p>
          Web sitesi:{" "}
          <a href="https://www.creasiv.com/" target="_blank" rel="noopener">
            Creasiv
          </a>
        </p>
      </div>
    </footer>
  );
}
