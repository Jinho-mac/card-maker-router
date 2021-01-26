import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';
import styles from './cardEditForm.module.css';

const CardEditForm = ({ card, deleteCard, createOrUpdateCard, imageService }) => {
  const { name, 
    company,
    theme, 
    title, 
    email, 
    message,
    fileURL } = card;

  const dropCard = e => {
    e.preventDefault();
    deleteCard(card);
  };

  const onChange = e => {
    e.preventDefault();
    const target = e.currentTarget;
    createOrUpdateCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const uploadImg = file => {
    const fileName = file.original_filename;
    const fileURL = file.url;
    createOrUpdateCard({
      ...card,
      fileName,
      fileURL,
    });
  };

  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" name="name" value={name} onChange={onChange}/>
      <input className={styles.input} type="text" name="company" value={company} onChange={onChange}/>
      <select className={styles.select} name="theme" value={theme} onChange={onChange}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" value={title} onChange={onChange}/>
      <input className={styles.input} type="text" name="email" value={email} onChange={onChange}/>
      <textarea className={styles.textarea} name="message" value={message} onChange={onChange}/>
      <ImageFileInput name={name} fileURL={fileURL} uploadImg={uploadImg} imageService={imageService}/>
      <Button name={'Delete'} onClick={dropCard}/>
    </form>
  );
};

export default CardEditForm;