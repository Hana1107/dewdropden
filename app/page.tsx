import Image from "next/image";

export default function Home() {
  return (
    <div className="coming-soon">
      <header className="site-header">
        <div className="logo">
          <Image
            src="/ddd-logo.webp"
            alt="Dewdrop Den"
            width={1000}
            height={1000}
            preload
          />
        </div>
      </header>
      <main className="coming-soon-main">
        <Image
          className="coming-soon-gif"
          src="/coming-soon.gif"
          alt="Website coming soon! To stay updated, check our Instagram: @dewdropden.shop"
          width={560}
          height={560}
          unoptimized
          preload
        />
      </main>
    </div>
  );
}
