const ATTEMP = "ATTEMP";
const CONFIRM = "CONFIRM";
const CANCEL = "CANCEL";
const BOOKING_ATTEMP = "booking/BOOKING_ATTEMP";
const BOOKING_CONFIRMED = "booking/BOOKING_COMFIRMED";
const BOOKING_CANCEL = "booking/BOOKING_CANCEL";

export const bookingAttemp = () => ({
  type: BOOKING_ATTEMP,
});

export const bookingConfirmed = () => ({
  type: BOOKING_CONFIRMED,
});

export const bookingCancel = () => ({
  type: BOOKING_CANCEL,
});

const INITIAL_STATE = {
  bookingStatus: CANCEL,
};

export default function booking(state = INITIAL_STATE, action) {
  switch (action.type) {
    case BOOKING_ATTEMP:
      return {
        ...state,
        bookingStatus: ATTEMP,
      };
    case BOOKING_CONFIRMED:
      return {
        ...state,
        bookingStatus: CONFIRM,
      };
    case BOOKING_CANCEL:
      return {
        ...state,
        bookingStatus: CANCEL,
      };
    default:
      return state;
  }
}
