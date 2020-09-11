import { combineReducers } from "redux";
import productDetail from "./ProducDetail/productDetail";
import dayPicker from "./ProducDetail/dayPicker";
import productList from "./ProductList/productList";
import reviewModal from "./ProducDetail/reviewModal";
import booking from "./ProducDetail/booking";
import guestCount from "./SearchBox/guestCount";
import googleLogin from "../modules/Login/googleLogin";

const rootReducer = combineReducers({
  productDetail,
  dayPicker,
  productList,
  reviewModal,
  booking,
  guestCount,
  googleLogin,
});

export default rootReducer;
