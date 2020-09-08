import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { datesChange, focusChange } from "../modules/ProducDetail/dayPicker";
import DayPicker from "../Pages/ProductDetail/RoomInformation/DayPicker/DayPicker";

export default function DayPickerContainer(props) {
  const { dateRange, focusedInput } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
    focusedInput: dayPicker.focusedInput,
  }));

  const dispatch = useDispatch();
  const onDatesChange = useCallback(
    ({ startDate, endDate }) => dispatch(datesChange({ startDate, endDate })),
    [dispatch]
  );

  const onFocusChange = useCallback(
    (focusedInput) => dispatch(focusChange(focusedInput)),
    [dispatch]
  );

  const { startDate, endDate } = dateRange;
  return (
    <DayPicker
      {...props}
      startDate={startDate}
      endDate={endDate}
      onDatesChange={onDatesChange}
      focusedInput={focusedInput}
      onFocusChange={onFocusChange}
    />
  );
}
