const UPDATE_GUESTS = "guestCount/UPDATE_ADULT";

export const updateGuests = ({ adult, child, infant }) => ({
  type: UPDATE_GUESTS,
  guests: {
    adult,
    child,
    infant,
  },
});

const INITIAL_STATE = {
  guests: {
    adult: 0,
    child: 0,
    infant: 0,
  },
};

export default function guestCount(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_GUESTS:
      return {
        ...state,
        guests: action.guests,
      };
    default:
      return state;
  }
}
