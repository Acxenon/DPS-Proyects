import { useCart } from "@/context/CartContext";
import "./CartItem.css";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div style={{ flex: 1 }}>
        <p>{item.name}</p>
        <p className="price">
          ${item.price * item.quantity}
        </p>

        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
      </div>
    </div>
  );
}
