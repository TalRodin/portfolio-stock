import * as actions from './authTypes';

// Add a todo
export const addSymbol = data => async (
  dispatch,
  getState,
  { getFirestore, getFirebase }
) => {
  const firestore = getFirestore();
  const userId = getState().firebase.auth.uid;
  dispatch({ type: actions.BUY_START });
  try {
    const res = await firestore
      .collection('todos')
      .doc(userId)
      .get();
    console.log(res.data())
    const newSymbol = {
      id: new Date().valueOf(),
      symbol: data.symbol,
      quantity:data.quantity,
      price:data.price
    };
    if (!res.data()) {
      firestore
        .collection('todos')
        .doc(userId)
        .set({
          todos: [newSymbol],
        });
    } else {
      firestore
        .collection('todos')
        .doc(userId)
        .update({
          todos: [...res.data().todos, newSymbol],
        });
    }
    dispatch({ type: actions.BUY_SUCCESS });
    return true;
  } catch (err) {
    dispatch({ type: actions.BUY_FAIL, payload: err.message });
  }
};

