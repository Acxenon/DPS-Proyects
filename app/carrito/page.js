"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import AuthGuard from "@/components/AuthGuard";
import Link from "next/link";
import "./carrito.css";

export default function Carrito() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  return (
    <AuthGuard>
      <div className="cart-container">
        <h2>Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            <h3 className="cart-total">
              Total: <span>${total.toFixed(2)}</span>
            </h3>

            <div className="cart-buttons">
              <button className="btn-clear" onClick={clearCart}>
                Vaciar carrito
              </button>

              <Link href="/factura" className="btn-checkout">
                Finalizar compra
              </Link>
            </div>
          </>
        )}
      </div>
    </AuthGuard>
  );
}
