import styles from '../styles/about.module.css';

const AboutSection = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About MyClothing</h1>
        <p className={styles.intro}>
          Welcome to <strong>MyClothing</strong> – where fashion meets comfort.
          Founded in 2023, we are a homegrown clothing brand based in India,
          committed to bringing trendy, affordable, and quality fashion to everyone.
        </p>

        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower individuals with fashion that feels good and
            looks great. We believe in inclusivity, sustainability, and innovation.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ 100% quality-checked materials</li>
            <li>✔ Fast delivery across India</li>
            <li>✔ New arrivals every week</li>
            <li>✔ Easy returns and customer support</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Our Story</h2>
          <p>
            What started as a small shop in Delhi has now grown into a nationwide
            online store serving thousands of happy customers. We’re proud to be
            one of India’s fastest-growing clothing brands.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Contact Us</h2>
          <p>Email: support@myclothing.in</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: New Delhi, India</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
