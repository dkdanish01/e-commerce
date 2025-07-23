import styles from '../styles/footer.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
        Nayaab
        </div>
        <div className={styles.links}>
        <h4>Quick links</h4>
        <a href="/ ">Search</a>
          <a href="/about">About us</a>
          <a href="/shop">Privacy Policy</a>
          <a href="/contact">Contact</a>
          <a href="/contact">Return & Exchange Policy</a>
          <a href="/contact">Shipping Policy</a>
          <a href="/contact">Contact information</a>
          <a href="/contact">Terms of Service</a>
          <a href="/contact">Refund Policy</a>
        </div>
        <div className={styles.links}>
        <h4>Contact Us</h4>
          <a href="/ ">Address: Shop No 3 , Unity Complex</a>
          <a href="/about">Near Gulmohar Garden</a>
          <a href="/shop">Road Andheri (west) Mumbau</a>
          <a href="/contact">support@nayaab.com</a>
        </div>

        <div className={styles.social}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Nayaab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
