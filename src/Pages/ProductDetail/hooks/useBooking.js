import { useSelector, useDispatch } from "react-redux";
import {
  bookingAttemp,
  bookingConfirmed,
  bookingCancel,
} from "../../../modules/ProducDetail/booking";

function useBooking() {
  const { bookingStatus } = useSelector(({ booking }) => ({
    bookingStatus: booking.bookingStatus,
  }));
  const dispatch = useDispatch();

  const attempBooking = () => {
    dispatch(bookingAttemp());
  };

  const confirmBooking = () => {
    dispatch(bookingConfirmed());
  };

  const cancelBooking = () => {
    dispatch(bookingCancel());
  };

  return [bookingStatus, attempBooking, confirmBooking, cancelBooking];
}

export default useBooking;
