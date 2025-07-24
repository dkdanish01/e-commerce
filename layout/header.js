import Link from 'next/link';
import styles from '../styles/header.module.css';
import { useState } from 'react';


const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      alert(`Searching for: ${search}`);
      // 🔍 later: route to search page or filter products
      setSearch('');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Ecommerce</div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/shop">Shop</Link>
         <Link href="/cart" className={styles.cartLink}>Cart</Link>
         
<Link href="/login">Login</Link>
<Link href="/register">Signup</Link>
      </nav>

      <form className={styles.searchBox} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;
