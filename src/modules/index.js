import { combineReducers } from "redux";
import productDetail from "./ProducDetail/productDetail";
import dayPicker from "./ProducDetail/dayPicker";
import productList from "./ProductList/productList";
import reviewModal from "./ProducDetail/reviewModal";
import booking from "./ProducDetail/booking";

const rootReducer = combineReducers({
  productDetail,
  dayPicker,
  productList,
  reviewModal,
  booking,
});

export default rootReducer;
