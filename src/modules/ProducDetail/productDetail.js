const RECEIVE_ROOMINFO = "productDetail/RECEIVE_ROOMINFO";
const RECEIVE_AMENITIES = "productDetail/RECEIVE_AMENITIES";

export const receiveRoomInfo = (roomInfo) => ({
  type: RECEIVE_ROOMINFO,
  roomInfo,
});

export const receiveAmenities = (amenities) => ({
  type: RECEIVE_AMENITIES,
  amenities,
});

const intialState = {
  roomInfo: {},
  amenities: {},
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
    default:
      return state;
  }
}
