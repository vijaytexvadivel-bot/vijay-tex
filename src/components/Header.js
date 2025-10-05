// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Header.module.css';
import logo from '../images/Vijay_tex_logo.png';
const Header = () => {


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Purpose', href: '#Purpose' },
    { name: 'Products', href: '#products' },
    { name: 'Management', href: '#Management' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
    >
      <div className={styles.logoContainer}>
        {/* Replace with your actual logo component/image */}
        <img src={logo} alt="Vijay Tex Logo" className={styles.logo} />
        <span className={styles.companyName}>VIJAY TEX</span>
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            className={styles.navLink}
            whileHover={{ scale: 1.05, color: 'var(--color-green)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {link.name}
          </motion.a>
        ))}
      </nav>
    </motion.header>
  );
};

export default Header;