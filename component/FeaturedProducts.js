import styles from '../styles/FeaturedProducts.module.css';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Denim Jacket',
    price: '₹2,499',
    image: '/products/p1.jpg',
  },
  {
    id: 2,
    name: 'Floral Dress',
    price: '₹1,799',
    image: '/products/p2.jpg',
  },
  {
    id: 3,
    name: 'Kids Hoodie',
    price: '₹1,299',
    image: '/products/p3.jpg',
  },
  {
    id: 4,
    name: 'White Sneakers',
    price: '₹2,999',
    image: '/products/p4.jpg',
  },
  {
    id: 5,
    name: 'Casual Shirt',
    price: '₹1,499',
    image: '/products/p5.jpg',
  },
  {
    id: 6,
    name: 'Ladies Handbag',
    price: '₹2,199',
    image: '/products/p6.jpg',
  },
];

const FeaturedProducts = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Featured Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <Image src={product.image} alt={product.name} width={300} height={300} />
            <h3>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
