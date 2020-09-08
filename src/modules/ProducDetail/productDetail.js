const RECEIVE_ROOMINFO = "productDetail/RECEIVE_ROOMINFO";
const RECEIVE_AMENITIES = "productDetail/RECEIVE_AMENITIES";
const RECEIVE_REVIEWS = "productDetail/RECEIVE_REVIEWS";

export const receiveRoomInfo = (roomInfo) => ({
  type: RECEIVE_ROOMINFO,
  roomInfo,
});

export const receiveAmenities = (amenities) => ({
  type: RECEIVE_AMENITIES,
  amenities,
});

export const receiveReviews = (reviews) => ({
  type: RECEIVE_REVIEWS,
  reviews,
});

const intialState = {
  roomInfo: {},
  amenities: {},
  reviews: {},
};

export default function productDetail(state = intialState, action) {
  switch (action.type) {
    case RECEIVE_ROOMINFO:
      return {
        ...state,
        roomInfo: action.roomInfo,
      };
    case RECEIVE_AMENITIES:
      return {
        ...state,
        amenities: action.amenities,
      };
    case RECEIVE_REVIEWS:
      return {
        ...state,
        reviews: action.reviews,
      };
    default:
      return state;
  }
}
