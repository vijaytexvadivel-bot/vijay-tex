// D:\Vijay Tex\vijay-tex\src\components\ContactInfo.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactInfo.module.css'; // You'll create this CSS file later

const ContactInfo = () => {
  const address = "18C, Vadakku Thottam, Paramasivamapalayam, Pallapalayam(po), Tiruppur, Tamil Nadu, India 641663";
  const gst = "33AFUPV1622C1ZH";

  return (
    <motion.section 
      id="contact" 
      className={styles.contact}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Get In Touch</h2>
      <div className={styles.infoContainer}>
        <div className={styles.detail}>
          <p className={styles.label}>Address</p>
          <p className={styles.value}>{address}</p>
        </div>
        <div className={styles.detail}>
          <p className={styles.label}>GST Registration</p>
          <p className={styles.value}>{gst}</p>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;