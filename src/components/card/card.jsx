import React, { memo } from 'react';
import styles from './card.module.css';

const Card = memo(({ card }) => {
  const { name, 
    company,
    theme, 
    title, 
    email, 
    message, 
    fileName,
    fileURL } = card;
  const imgName = fileName || 'profile'; 
  const imgURL = fileURL || 'https://res.cloudinary.com/dlhxfrssh/image/upload/v1609160812/sample.jpg';
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <div className={styles.avatar}>
        <img className={styles.image} src={imgURL} alt={imgName}/>
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      return styles.gray;
  }
}

export default Card;