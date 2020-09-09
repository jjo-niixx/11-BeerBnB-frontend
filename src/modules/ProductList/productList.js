const FILTER_TOGGLE = "productList/FILTER_TOGGLE";
const GET_ROOMSINFO = "productList/GET_ROOMSINFO";
const UPDATE_CHECKEDLIST = "productList/UPDATE_CHECKEDLIST";
const CHANGE_PAGE = "productList/CHANGE_PAGE";
const REFUND_TOGGLE = "productList/REFUND_TOGGLE";
const UPDATE_CHECKEDTYPES = "productList/UPDATE_CHECKEDTYPES";
const INSTANT_TOGGLE = "productList/INSTANT_TOGGLE";
const CHANGE_HOVER = "productList/CHANGE_HOVER";
const CHANGE_LABEL = "productList/CHANGE_LABEL";
const MAP_OPEN_TOGGLE = "productList/MAP_OPEN_TOGGLE";
const GET_REVIEWINFO = "productList/GET_REVIEWINFO";

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

export const changeHover = (hoveredAt) => ({
  type: CHANGE_HOVER,
  hoveredAt,
});

export const changeLabel = (clickedMapLabel) => ({
  type: CHANGE_LABEL,
  clickedMapLabel,
});

export const mapOpenToggle = (isMapOpen) => ({
  type: MAP_OPEN_TOGGLE,
  isMapOpen,
});

export const getReviewInfo = (reviewInfo) => ({
  type: GET_REVIEWINFO,
  reviewInfo,
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
  hoveredAt: null,
  clickedMapLabel: null,
  isMapOpen: true,
  reviewInfo: {},
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
    case CHANGE_HOVER:
      return {
        ...state,
        hoveredAt: action.hoveredAt,
      };
    case CHANGE_LABEL:
      return {
        ...state,
        clickedMapLabel: action.clickedMapLabel,
      };
    case GET_REVIEWINFO:
      return {
        ...state,
        reviewInfo: action.reviewInfo,
      };
    case MAP_OPEN_TOGGLE:
      return {
        ...state,
        isMapOpen: action.isMapOpen,
      };
    default:
      return state;
  }
}
