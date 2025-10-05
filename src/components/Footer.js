// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const address = "18C, Vadakku Thottam, Paramasivamapalayam, Pallapalayam(po), Tiruppur, Tamil Nadu, India 641663";
  const gst = "33AFUPV1622C1ZH";

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoGroup}>
          <h3>VIJAY TEX</h3>
          <p className={styles.productNote}>Producers of Premium 100% Grey Cotton Fabric</p>
        </div>
        
        <div className={styles.infoGroup}>
          <h4>Address</h4>
          <p>{address}</p>
        </div>
        
        <div className={styles.infoGroup}>
          <h4>Legal Details</h4>
          <p>GSTIN: {gst}</p>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Vijay Tex. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;