import React from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './editor.module.css';

const Editor = ({ cards, createOrUpdateCard , deleteCard, imageService }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Editor</h1>
      {
        Object.keys(cards).map(key => {
          return (
            <CardEditForm 
            key={key} 
            card={cards[key]} 
            deleteCard={deleteCard}
            createOrUpdateCard={createOrUpdateCard}
            imageService={imageService}
            />
          )})
      }
      <CardAddForm 
      createOrUpdateCard={createOrUpdateCard} 
      imageService={imageService}
      />
    </section>
  )
};

export default Editor;