import Link from "next/link";
import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <h1>
          Bienvenido a <span>LogicStore</span>
        </h1>

        <p>
          Tu tienda en línea especializada en tecnología, software y hardware.
          Encuentra los mejores productos para potenciar tu mundo digital.
        </p>

        <div className="hero-buttons">
          <Link href="/login" className="btn-login">
            Iniciar sesión
          </Link>

          <Link href="/productos" className="btn-products">
            Ver productos
          </Link>
        </div>
      </div>
    </main>
  );
}
