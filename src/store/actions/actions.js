// action: an arrow fn that return an object

//object contains a type (desc) of action, and payload (data)

export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};

export const todoActionAdd = (todoList) => {
  return {
    type: "TODO_ACTION_ADD",
    payload: todoList,
  };
};

export const todoRemove = (todoList) => {
  return {
    type: "TODO_ACTION_REMOVE",
    payload: todoList,
  };
};

/*
create Cart component
add route
display h1
*/
