import Image from 'next/image';
import styles from '../styles/ProductDetail.module.css';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductDetail({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
  const { addToCart } = useCart(); // ✅ Context ka function

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: selectedSize,
    };
    addToCart(productToAdd);
    alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  if (!product) return null;

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image src={product.image} alt={product.name} width={500} height={500} />
      </div>
      <div className={styles.details}>
        <h2>{product.name}</h2>
        <p className={styles.price}>₹{product.price}</p>
        <p>{product.description}</p>

        <div className={styles.sizes}>
          <p>Select Size:</p>
          {product.sizes?.map((size) => (
            <button
              key={size}
              className={selectedSize === size ? styles.activeSize : ''}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
<button onClick={() => addToCart(product, selectedSize)}>Add to Cart</button>
      </div>
    </div>
  );
}
