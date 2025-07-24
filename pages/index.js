import Head from 'next/head';
import { Inter } from 'next/font/google';
import HeroSection from '../component/HeroSection';
import CategoriesSection from '../component/CategoriesSection';
import ProductCard from '../component/ProductCard';

const inter = Inter({ subsets: ['latin'] });

import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Ecommerce Store</title>
        <meta name="description" content="Clothing eCommerce in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <CategoriesSection />

      <div style={{ padding: '40px' }}>
        <h1 style={{ textAlign: 'left' }}>New Arrivals</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          marginTop: '30px'
        }}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
