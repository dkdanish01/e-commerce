import styles from '../styles/Hero.module.css';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>New Season Arrivals</h1>
        <p>Check out all the latest trends</p>
        <Link href="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
