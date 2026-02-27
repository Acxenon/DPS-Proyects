import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
