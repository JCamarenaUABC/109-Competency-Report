//reducer: a simple fn that receives state and action, and return a new state

const cartCounterReducer = (state = 0, action) => {
  //copy

  //modify

  //return a new state
  if (action.type === "INCREMENT_COUNTER") {
    return state + 1;
    //return newState;
  }

  return state;
};

export default cartCounterReducer;
