import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ OnLogout}) => {
  return (
    <header className={styles.header}>
      { OnLogout && 
        <button className={styles.logout} onClick={OnLogout}>
          LogOut
        </button>
      }
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default Header;