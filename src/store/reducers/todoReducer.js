//reducer: a simple fn that receives state and action, and return a new state

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "TODO_ACTION_ADD":
      var copy = [...state];
      copy.push(action.payload);
      return copy;
    case "TODO_ACTION_REMOVE":
      //Filter out tasks and remove requested by id
      return state.filter((t) => t.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
