import styles from '../styles/contact.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p className={styles.intro}>We’d love to hear from you! Reach out to us with your queries or feedback.</p>

        <div className={styles.content}>
          <form className={styles.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className={styles.info}>
            <h3>Contact Details</h3>
            <p><strong>Email:</strong> support@myclothing.in</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> New Delhi, India</p>

            <h3>Working Hours</h3>
            <p>Monday - Saturday: 9 AM – 6 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
