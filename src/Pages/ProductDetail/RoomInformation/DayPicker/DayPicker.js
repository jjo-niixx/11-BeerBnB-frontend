import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  datesChange,
  focusChange,
} from "../../../../modules/ProducDetail/dayPicker";
import styled from "styled-components";
import moment from "moment";
import "react-dates/initialize";
import { DayPickerRangeController as RangeController } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Title from "../../ProductDetailComponent/Title";
import mixin from "../../../../Styles/mixin";

function DayPicker({}) {
  const {
    dateRange: { startDate, endDate },
    focusedInput,
  } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
    focusedInput: dayPicker.focusedInput,
  }));

  const { roomInfo } = useSelector(({ productDetail }) => ({
    roomInfo: productDetail.roomInfo,
  }));

  const dispatch = useDispatch();

  const onDatesChange = ({ startDate, endDate }) =>
    dispatch(datesChange({ startDate, endDate }));

  const onFocusChange = (focusedInput) => dispatch(focusChange(focusedInput));

  const formatedStartDate = moment(startDate).format("YYYY-MM-DD");
  const formatedEndDate = moment(endDate).format("YYYY-DD-MM");
  // 추후 formatedStartDate와 formatedEndDate 통해서 엔드포인트 호출하는 로직 구성 예정

  const calcDate = moment(endDate).diff(startDate, "days");

  const location = roomInfo.address?.slice(0, roomInfo.address.indexOf(","));

  const title = calcDate
    ? `${location}에서의 ${calcDate}박`
    : !startDate
    ? "체크인 날짜를 선택해 주세요"
    : "체크아웃 날짜를 선택해 주세요";

  return (
    <Container>
      <Title title={title} marginBottom="20px" />
      <SubTitle>여행 날짜를 선택해 정확한 금액을 확인해보세요</SubTitle>
      <RangeController
        startDate={startDate}
        endDate={endDate}
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={onFocusChange}
        numberOfMonths={2}
        daySize={42}
        noBorder
        hideKeyboardShortcutsPanel={true}
        isOutsideRange={(day) => moment().diff(day) >= 0}
      />
    </Container>
  );
}

export default DayPicker;

const Container = styled.div`
  ${mixin.flexSet("column", "flex-start", "flex-start")}
  padding: 48px 0;
  border-bottom: ${({ theme }) => theme.borderSet};

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

const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.fontColorGray};
`;
