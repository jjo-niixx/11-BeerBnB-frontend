import { combineReducers } from "redux";
import productDetail from "./ProducDetail/productDetail";
import dayPicker from "./ProducDetail/dayPicker";

const rootReducer = combineReducers({
  productDetail,
  dayPicker,
});

export default rootReducer;
