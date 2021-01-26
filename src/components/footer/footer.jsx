import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.ref}>Based on FireBase</h1>
    </footer>
  );
});

export default Footer;