import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/card.module.css';

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.slug}`} passHref>
      <div className={styles.card}>
        <Image src={product.image} alt={product.name} width={300} height={300} />
        <h3>{product.name}</h3>
        <p className={styles.price}>₹{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </Link> 
  );
}