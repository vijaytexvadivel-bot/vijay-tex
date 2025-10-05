// D:\Vijay Tex\vijay-tex\src\components\HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css'; // You'll create this CSS file later

const HeroSection = () => {
  return (
    <motion.section 
      id="home" 
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Established in 2013 by Mr. Vadivel S. G., Vijay Tex began with 50 looms dedicated to producing a single, standard quality of 100% pure grey cotton fabric. Through the founder’s diligent leadership and hard work, we have scaled our operations to over 500 looms, enabling us to consistently deliver multiple premium qualities of 100% cotton fabric today. Our scale allows us to achieve a total weekly production capacity exceeding 250,000 meters across all our qualities.
    </motion.section>
  );
};

export default HeroSection;