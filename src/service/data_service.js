import { firebaseDataBase } from "./firebase";

class DataService {
  saveCard(userId, card) {
    firebaseDataBase //
      .ref(`${userId}/cards/${card.id}`)
      .set(card);
  }
  
  removeCard(userId, card) {
    firebaseDataBase //
      .ref(`${userId}/cards/${card.id}`)
      .remove();
  }

  readCard(userId, callBack) {
    const ref = firebaseDataBase //
                  .ref(`${userId}/cards`);
    ref.on("value", snapshot => {
      const cards = snapshot.val(); // type of card => object
      cards && callBack(cards);
    });
    return () => ref.off();
  }
}

// 'value'가 아니라 'child_add'를 써서 문제가 있었던 것 같음..

export default DataService;