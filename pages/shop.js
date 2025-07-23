// pages/shop.js
import ProductCard from '../component/ProductCard';
import dummyProducts from '../data/dummyProducts'; // ✅ Make sure this exists
import styles from '../styles/ShopPage.module.css';

export default function ShopPage() {
  return (
    <div className={styles.container}>
      <h2>All Products</h2>
      <div className={styles.grid}>
        {dummyProducts.map((p) => (
          <ProductCard key={p.id} product={p} /> 
        ))}
      </div>
    </div>
  );
}
 