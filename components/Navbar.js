"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const { cart } = useCart();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <h1>LogicStore</h1>

      <div className="navbar-links">
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/carrito">Carrito ({cart.length})</Link>
        <button className="logout" onClick={logout}>Salir</button>
      </div>
    </nav>
  );
}
