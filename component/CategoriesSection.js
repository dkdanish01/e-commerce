import styles from '../styles/CategoriesSection.module.css';
import Link from 'next/link';
import Image from 'next/image';


const categories = [
  {
    title: 'Men',
    image: '/images/men.jpg',
    link: '/shop?category=men',
  },
  {
    title: 'Women',
    image: '/images/women.jpg',
    link: '/shop?category=women',
  },
  {
    title: 'Kids',
    image: '/images/kids.jpg',
    link: '/shop?category=kids',
  },
];

const CategoriesSection = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.heading}>Shop by Category</h2>
      <div className={styles.grid}>
        {categories.map((cat, index) => (
          <div key={index} className={styles.card}>
    
    <Image
  src="/images/men.jpg"
  alt="Men"
  width={300}
  height={400}
  priority
/>
<Image
  src="/images/women.jpg"
  alt="Women"
  width={300}
  height={400}
  priority
/>
<Image
  src="/images/kids.jpg"
  alt="Kids"
  width={300}
  height={400}
  priority
/>



            <div className={styles.overlay}>
              <h3>{cat.title}</h3>
              <Link href={cat.link}>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
