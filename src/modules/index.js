import { combineReducers } from "redux";
import productDetail from "./ProducDetail/productDetail";
import dayPicker from "./ProducDetail/dayPicker";
import productList from "./ProductList/productList";

const rootReducer = combineReducers({
  productDetail,
  dayPicker,
  productList,
});

export default rootReducer;
