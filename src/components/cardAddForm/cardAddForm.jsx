import React, { useRef, useState } from 'react';
import styles from './cardAddForm.module.css';
import Button from '../button/button';
import ImageFileInput from '../imageFileInput/imageFileInput';

const CardAddForm = ({ createOrUpdateCard, imageService }) => {
  const [img, setImg] = useState({ fileName: null , fileURL: null });
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value || '';
    const company = companyRef.current.value || '';
    const theme = themeRef.current.value;
    const title = titleRef.current.value || '';
    const email = emailRef.current.value || '';
    const message = messageRef.current.value || '';
    const data = {
      id: Date.now(), 
      name, 
      company, 
      theme, 
      title, 
      email, 
      message,
      ...img,
    };
    createOrUpdateCard(data);
    formRef.current.reset();
  }

  const uploadImg = file => {
    const fileName = file.original_filename;
    const fileURL = file.url;
    setImg({ fileName, fileURL });
  };
  
  return (
    <form ref={formRef} className={styles.form}>
      <input className={styles.input} type="text" name="name" placeholder="name" ref={nameRef}/>
      <input className={styles.input} type="text" name="company" placeholder="company" ref={companyRef}/>
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input className={styles.input} type="text" name="title" placeholder="title" ref={titleRef}/>
      <input className={styles.input} type="text" name="email" placeholder="email" ref={emailRef}/>
      <textarea className={styles.textarea} name="message" placeholder="message" ref={messageRef}/>
      <ImageFileInput uploadImg={uploadImg} imageService={imageService}/>
      <Button name={'Add'} onClick={onSubmit}/>
    </form>
  );
};

export default CardAddForm;