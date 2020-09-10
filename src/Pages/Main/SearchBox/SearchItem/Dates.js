import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { DayPickerRangeController } from "react-dates";
import { datesChange } from "../../../../modules/ProducDetail/dayPicker";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";
import mixin from "../../../../Styles/mixin";

export default function Dates() {
  const { dateRange } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
  }));

  const { startDate, endDate } = dateRange;

  const dispatch = useDispatch();

  const onDatesChange = ({ startDate, endDate }) => {
    dispatch(datesChange({ startDate, endDate }));
  };

  const [focusedInput, setFocusInput] = useState("startDate");

  return (
    <Container>
      <DayPickerRangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) =>
          setFocusInput(focusedInput || "startDate")
        }
        initialVisibleMonth={() => moment().add(2, "M")}
        numberOfMonths={2}
      />
    </Container>
  );
}

const Container = styled.div`
  ${mixin.flexSet("column", "flex-start", "flex-start")}
  position: absolute;
  top: 100%;
  left: 0;
  max-height: calc(100vh - 220px);
  margin-top: 12px;
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;

  .CalendarDay {
    border: none;
    font-size: 14px;
    font-weight: 600;
    line-height: 42px;
  }

  .CalendarDay__selected_end {
    background: rgb(34, 34, 34);
    border-radius: 50%;
  }

  .CalendarDay__selected_start {
    background: rgb(34, 34, 34);
    border-radius: 50%;
  }

  .CalendarDay__selected_span {
    color: black;
    background: rgb(247, 247, 247);
  }

  .CalendarDay__hovered_span,
  .CalendarDay__hovered_span:hover {
    background: rgb(247, 247, 247);
    color: black;
    border-radius: 50%;
  }

  .CalendarDay__blocked_out_of_range {
    text-decoration: line-through;
  }
`;
