import { combineReducers } from "redux";
import productDetail from "./ProducDetail/productDetail";
import dayPicker from "./ProducDetail/dayPicker";
import productList from "./ProductList/productList";
import reviewModal from "./ProducDetail/reviewModal";

const rootReducer = combineReducers({
  productDetail,
  dayPicker,
  productList,
  reviewModal,
});

export default rootReducer;
