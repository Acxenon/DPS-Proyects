"use client";

import { useCart } from "@/context/CartContext";
import AuthGuard from "@/components/AuthGuard";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Factura() {
  const { cart, clearCart } = useCart();
  const router = useRouter();


  // Cliente (login)
  const cliente =
    typeof window !== "undefined"
      ? localStorage.getItem("user") || "Cliente"
      : "Cliente";

  // Fecha y número de factura
  const fecha = new Date();
  const numeroFactura = `FAC-${fecha.getTime()}`;

  // Cálculos
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const IVA = 0.13; // 13%
  const ivaCalculado = subtotal * IVA;
  const total = subtotal + ivaCalculado;

  // Finalizar compra
  const finalizarCompra = () => {
    const confirmacion = confirm(
      "¿Desea finalizar la compra?"
    );

    if (confirmacion) {
      clearCart();
      alert("Compra realizada con éxito. ¡Gracias por su compra!");
      router.push("/productos");
    }
  };

  return (
    <AuthGuard>
      <div className="invoice">
        <h1>Factura</h1>

        {/* Datos generales */}
        <div className="invoice-header">
          <p><strong>N° Factura:</strong> {numeroFactura}</p>
          <p><strong>Fecha:</strong> {fecha.toLocaleString()}</p>
          <p><strong>Cliente:</strong> {cliente}</p>
        </div>

        <hr />

        {/* Detalle */}
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cant.</th>
              <th>Precio</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>${Number(item.price).toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <hr />

        {/* Totales */}
        <div className="invoice-totals">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>IVA (13%): ${ivaCalculado.toFixed(2)}</p>
          <h2>Total a pagar: ${total.toFixed(2)}</h2>
        </div>

        {/* Botón finalizar */}
        <button className="btn-finish" onClick={finalizarCompra}>
          Finalizar compra
        </button>

        <p className="thanks">¡Gracias por su compra!</p>
      </div>
    </AuthGuard>
  );
}
