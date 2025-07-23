import { useRouter } from 'next/router';
import products from '../../data/dummyProducts';
import ProductDetail from '../../component/ProductDetail';

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product) return <p>Loading...</p>;

  return <ProductDetail product={product} />;
}


const addToCart = () => {
  const existing = JSON.parse(localStorage.getItem('cart')) || [];

  const itemExists = existing.find(item => item.slug === product.slug);
  if (itemExists) {
    itemExists.quantity += 1;
  } else {
    existing.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(existing));
  alert('Added to cart!');
};
