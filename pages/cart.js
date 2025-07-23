import { useCart } from '../context/CartContext';
import Image from 'next/image';
export default function CartPage() {
  const { cartItems, removeFromCart, isLoaded } = useCart();

  if (!isLoaded) return <p>Loading cart...</p>; // 👈 Wait for client to load

  if (cartItems.length === 0) return <p style={{ padding: '40px' }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={`${item.slug}-${item.size}`}>
        <Image src={item.image} alt={item.name} width={150} height={150} />

          <h3>{item.name}</h3>
          <p>Price: ₹{item.price}</p>
          <p>Size: {item.size}</p>
          <p>Qty: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.slug, item.size)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
