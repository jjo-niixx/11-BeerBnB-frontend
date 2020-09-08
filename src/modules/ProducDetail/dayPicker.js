import moment from "moment";
import "moment/locale/ko";

moment.locale("ko");

const DATES_CHANGE = "dayPicker/DATES_CHANGE";
const FOCUS_CHANGE = "dayPicker/FOCUS_CHANGE";

export const datesChange = ({ startDate, endDate }) => ({
  type: DATES_CHANGE,
  dateRange: {
    startDate,
    endDate,
  },
});

export const focusChange = (focusedInput) => ({
  type: FOCUS_CHANGE,
  focusedInput,
});

const INITIAL_STATE = {
  dateRange: {
    startDate: null,
    endDate: null,
  },
  focusedInput: "startDate",
};

export default function dayPicker(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATES_CHANGE:
      return {
        ...state,
        dateRange: action.dateRange,
      };
    case FOCUS_CHANGE:
      return {
        ...state,
        focusedInput: !action.focusedInput ? "startDate" : action.focusedInput,
      };
    default:
      return state;
  }
}
