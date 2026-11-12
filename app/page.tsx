import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <nav>
        <ul>
          <li>
            <a href="/search">
              <img
                className="search-icon"
                src="/search.png"
                alt="search"
                height="15"
              />
            </a>
          </li>
          <li>
            <a href="/home">
              <img className="logo" src="/ddd-logo.png" alt="logo" />
            </a>
          </li>
          <li>
            <a href="/home">
              <img
                className="camera-icon"
                src="/camera.png"
                alt="instagram-link"
              />
            </a>
          </li>
          <li>
            <a href="/home">
              <img className="bag-icon" src="/bag.png" alt="shopping-cart" />
            </a>
          </li>
        </ul>
      </nav>
      <h1>Welcome to Next.js!</h1>
    </main>
  );
}
