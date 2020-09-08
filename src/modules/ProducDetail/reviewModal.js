const MODAL_CHANGE = "reviewModal/MODAL_CHANGE";
const GET_REVIEW_LIST = "reviewModal/GET_REVIEW_LIST";
const ADD_REVIEW_LIST = "reviewModal/CHANGE_REVIEW_LIST";

export const modalChanges = () => ({
  type: MODAL_CHANGE,
});

export const getReviewList = (reviewList) => ({
  type: GET_REVIEW_LIST,
  reviewList,
});

export const addReviewList = (reviewList) => ({
  type: ADD_REVIEW_LIST,
  reviewList,
});

const INITAIL_STATE = {
  modalStatus: false,
  reviewList: [],
};

export default function reviewModal(state = INITAIL_STATE, action) {
  switch (action.type) {
    case MODAL_CHANGE:
      return {
        ...state,
        modalStatus: !state.modalStatus,
      };
    case GET_REVIEW_LIST:
      return {
        ...state,
        reviewList: action.reviewList,
      };

    case ADD_REVIEW_LIST:
      return {
        ...state,
        reviewList: [...state.reviewList, ...action.reviewList],
      };

    default:
      return state;
  }
}
