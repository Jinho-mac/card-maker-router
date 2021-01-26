import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CardAddForm from '../cardAddForm/cardAddForm';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ authService, imageService, dataService }) => {
  const historyState = useHistory().state;
  const [cards, setCards] = useState();
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  const onLogout = useCallback(() => {
    authService.logout()
  }, [authService]);

  
  const createOrUpdateCard = card => {
    setCards(() => {
      const _cards = {...cards};
      _cards[card.id] = card;
      return _cards;
    })
    dataService.saveCard(userId, card);
  };

  const deleteCard = card => {
    setCards(() => {
      const _cards = {...cards};
      delete _cards[card.id];
      return _cards;
    })
    dataService.removeCard(userId, card);
  };

  useEffect(() => authService.onAuthChange(user => {
    if (user) {
      setUserId(user.uid);
    } else {
      history.push('/');
    }
  }), [authService, history]);

  useEffect(() => {
    if (!userId) {
      return; 
    }
    const stopSync = dataService //
                      .readCard(userId, item => {
                        setCards(item)
                      });
    return () => stopSync();
  }, [dataService, userId]);

  return (
    <section className={styles.container}>
      <Header OnLogout={onLogout} />
      <div className={styles.editorAndPreview}>
        { 
          cards ? 
          <Editor 
          cards={cards} 
          createOrUpdateCard={createOrUpdateCard} 
          deleteCard={deleteCard} 
          imageService={imageService}
          /> :
          <CardAddForm 
          createOrUpdateCard={createOrUpdateCard} 
          imageService={imageService}
          />
        }
        {
          cards && <Preview cards={cards}/>
        }
      </div>
      <Footer />
    </section>
  )
};

export default Maker;