import React, { memo, useRef, useState } from 'react';
import styles from './imageFileInput.module.css';

const ImageFileInput = memo(({ name, fileURL, uploadImg, imageService }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const uploadFile = async event => {
    event.preventDefault();
    setLoading(true);
    const files = event.target.files;
    const file = files[0];
    const result = await imageService.upload(file);
    uploadImg(result);
    setLoading(false);
  };

  const handleClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const imgExist = fileURL ? styles.exist : styles.nonExist;

  return (
    <div className={styles.container}>
      <input 
      className={styles.input} 
      type="file" 
      accept="image/*"
      ref={inputRef}
      onChange={uploadFile}
      />
      {
        loading ? 
        <div className={styles.loading}></div> :
        <button className={`${styles.button} ${imgExist}`} onClick={handleClick}>
          { fileURL ? name : 'Image' }
        </button>
      }
    </div>
    
  )
});

export default ImageFileInput;