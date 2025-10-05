// D:\Vijay Tex\vijay-tex\src\components\Infrastructure.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Infrastructure.module.css'; // You'll create this CSS file later

// Animation variant for element reveal on scroll (reused from ProductShowcase)
const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

const Infrastructure = () => {
  // 3 images of machinery: replace with your actual images
  const machineryImages = [
    { id: 1, src: "loom-1.jpg", caption: "High-Speed Shuttleless Looms" },
    { id: 2, src: "factory-floor.jpg", caption: "Modern Production Facility" },
    { id: 3, src: "winding-machine.jpg", caption: "Precise Yarn Preparation" },
  ];

  return (
    <section id="infrastructure" className={styles.infrastructure}>
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      >
        Precision in Every Thread
      </motion.h2>

      <div className={styles.grid}>
        {machineryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={itemVariants}
            transition={{ delay: index * 0.2 }}
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

export default Infrastructure;