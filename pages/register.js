import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Auth.module.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';


export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert('✅ Registered successfully!');
        localStorage.setItem('token', data.token);
        router.push('/');
      } else {
        alert(`❌ ${data.error || 'Registration failed'}`);
      }
    } catch (err) {
      console.error(err);
      alert('❌ Something went wrong!');
    }
  };

  return (
    
    <div className={styles.authContainer}>
      <h2 className={styles.heading}>📝 Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input
            className={styles.input}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input
            className={styles.input}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <FaLock className={styles.icon} />
          <input
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.button}>Signup</button>
      </form>
    </div>
  );
}
