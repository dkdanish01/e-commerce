import '../styles/globals.css';
import Header from '../layout/header';
import Footer from '../layout/footer';
import { CartProvider } from '../context/CartContext';
import '../styles/Auth.module.css';
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>  {/* ✅ Wrap here */}
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </CartProvider>
  );
}
