// src/components/ProductShowcase.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProductShowcase.module.css';

// Placeholder Images
const fabricImages = [
  { id: 1, src: "fabric-roll-1.jpg", caption: "Premium Grey Cotton Fabric Rolls" },
  { id: 2, src: "fabric-close-up-2.jpg", caption: "100% Cotton, High-Density Weave" },
];

// Animation variant for element reveal on scroll
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const ProductShowcase = () => {
  return (
    <section id="products" className={styles.showcase}>
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { opacity: 1, transition: { duration: 1 } }, hidden: { opacity: 0 } }}
      >
        Our Product: 100% Pure Cotton
      </motion.h2>

      <div className={styles.grid}>
        {fabricImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={itemVariants}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
          >
            {/* Replace with actual image tag */}
            <div className={styles.imagePlaceholder}>
                
            </div>
            <p className={styles.caption}>{image.caption}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;