import { combineReducers } from "redux";
import cartCounterReducer from "./cartCounter";
import cartProductsReducer from "./cartProducts";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  count: cartCounterReducer,
  cart: cartProductsReducer,
  todo: todoReducer,
});

export default rootReducer;
