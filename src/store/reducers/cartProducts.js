//reducer

const cartProductsReducer = (state = [], action) => {
  //if(){}
  /*  if (action.type === "ADD_PRODUCT") {
    var copy = [...state];
    copy.push(action.payload);
    return copy;
  } else if (action.type === "REMOVE_PRODUCT") {
    return state.filter((pc) => pc.product.id !== action.payload.id);
  }
  return state;
*/

  var alreradyThere = false;

  /*if (state.filter((pc) => pc.product.id === action.payload.id)) {
    alreradyThere = true;
  }*/

  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state];

      for (let i = 0; i < copy.length; i++) {
        var item = copy[i];
        if (action.payload.product.id === item.product.id) {
          alreradyThere = true;
          item.quantity += action.payload.quantity;
          //item.quantity = action.payload.quantity + item.quantity;
        }
      }

      if (!alreradyThere) {
        copy.push(action.payload);
      }

      //send the current cart (copy) to the server

      //copy.push(action.payload);
      return copy;

    case "REMOVE_PRODUCT":
      //return state.filter((pc) => pc.product.id !== action.payload.product.id);
      return state.filter((pc) => pc.product.id !== action.payload.product.id);

    default:
      return state;
  }
};

export default cartProductsReducer;
