const FILTER_TOGGLE = "productList/FILTER_TOGGLE";
const GET_ROOMSINFO = "productList/GET_ROOMSINFO";
const UPDATE_CHECKEDLIST = "productList/UPDATE_CHECKEDLIST";
const CHANGE_PAGE = "productList/CHANGE_PAGE";
const REFUND_TOGGLE = "productList/REFUND_TOGGLE";
const UPDATE_CHECKEDTYPES = "productList/UPDATE_CHECKEDTYPES";
const INSTANT_TOGGLE = "productList/INSTANT_TOGGLE";

export const filterToggle = (activeFilter) => ({
  type: FILTER_TOGGLE,
  activeFilter,
});

export const getRoomsInfo = (roomsInfo) => ({
  type: GET_ROOMSINFO,
  roomsInfo,
});

export const updateCheckedList = (checkedOptions) => ({
  type: UPDATE_CHECKEDLIST,
  checkedOptions,
});

export const changePage = (currentPage) => ({
  type: CHANGE_PAGE,
  currentPage,
});

export const refundToggle = (isRefundChecked) => ({
  type: REFUND_TOGGLE,
  isRefundChecked,
});

export const updateCheckedTypes = (checkedRoomTypes) => ({
  type: UPDATE_CHECKEDTYPES,
  checkedRoomTypes,
});

export const instantToggle = (isInstantChecked) => ({
  type: INSTANT_TOGGLE,
  isInstantChecked,
});

const intialState = {
  activeFilter: null,
  roomsInfo: [],
  checkedOptions: {
    refund: "",
    home_type: "",
  },
  currentPage: 1,
  isRefundChecked: false,
  checkedRoomTypes: [],
  isInstantChecked: false,
};

export default function productList(state = intialState, action) {
  switch (action.type) {
    case FILTER_TOGGLE:
      return {
        ...state,
        activeFilter: action.activeFilter,
      };
    case GET_ROOMSINFO:
      return {
        ...state,
        roomsInfo: action.roomsInfo,
      };
    case UPDATE_CHECKEDLIST:
      return {
        ...state,
        checkedOptions: action.checkedOptions,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case REFUND_TOGGLE:
      return {
        ...state,
        isRefundChecked: action.isRefundChecked,
      };
    case UPDATE_CHECKEDTYPES:
      return {
        ...state,
        checkedRoomTypes: action.checkedRoomTypes,
      };
    case INSTANT_TOGGLE:
      return {
        ...state,
        isInstantChecked: action.isInstantChecked,
      };
    default:
      return state;
  }
}
