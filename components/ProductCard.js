import { useCart } from "@/context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <button
        className="btn-add"
        onClick={() => addToCart(product)}
        >
        🛒 Agregar al carrito
    </button>
    </div>
  );
}
