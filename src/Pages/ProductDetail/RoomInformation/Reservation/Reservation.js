import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { datesChange } from "../../../../modules/ProducDetail/dayPicker";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import Title from "../../ProductDetailComponent/Title";
import ReviewInfo from "../../ProductDetailComponent/ReviewInfo";
import PriceInfo from "./PriceInfo/PriceInfo";
import mixin from "../../../../Styles/mixin";

export default function Reservation() {
  const [focusedInput, setFocusedInput] = useState(null);
  const { dateRange } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
  }));
  const { startDate, endDate } = dateRange;
  const dateSelected = startDate && endDate;
  const dispatch = useDispatch();
  const title = dateSelected
    ? `${ONEDAY_PRICE} / 박`
    : "요금을 확인하려면 날짜를 입력하세요.";
  const onDatesChange = ({ startDate, endDate }) =>
    dispatch(datesChange({ startDate, endDate }));

  return (
    <Container>
      <Wrapper>
        <Header>
          <Title title={title} />
          <ReviewInfo />
        </Header>
        <DateRangeContainer>
          <DateRangePicker
            startDate={startDate}
            startDateId="startDate"
            endDate={endDate}
            endDateId="endDate"
            onDatesChange={onDatesChange}
            focusedInput={focusedInput}
            onFocusChange={setFocusedInput}
            daySize={42}
            hideKeyboardShortcutsPanel={true}
            isOutsideRange={(day) => moment().diff(day) >= 0}
            customArrowIcon={<div></div>}
            anchorDirection={"right"}
            startDatePlaceholderText={"체크인"}
            endDatePlaceholderText={"체크아웃"}
            block
            noBorder
          />
        </DateRangeContainer>
        <div>
          <ReservationBtn>
            <div>{dateSelected ? "예약하기" : "예약 가능 여부 보기"}</div>
          </ReservationBtn>
          {dateSelected && <PriceInfo dayPrice={ONEDAY_PRICE} />}
        </div>
      </Wrapper>
    </Container>
  );
}

const ONEDAY_PRICE = "78,000";
// 나중에 1박 가격 백엔드에서 보내주는 로직 완성되면 스토어에 담아서 사용하는 방식으로 수정 예정

const Container = styled.article`
  width: 35%;
  margin-left: 5%;
  h2 {
    word-break: keep-all;
  }
`;

const Wrapper = styled.div`
  position: sticky;
  top: 170px;
  padding: 24px;
  margin-bottom: 24px;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;

const Header = styled.header`
  ${mixin.flexSet("row", "space-between")}
  margin-bottom: 28px;
`;

const DateRangeContainer = styled.div`
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  padding: 3px;

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

  .DateInput {
    width: 50%;
  }

  .DateInput_input {
    &::placeholder {
      font: inherit;
      color: ${({ theme }) => theme.fontColorBlack};
      font-weight: ${({ theme }) => theme.fontMedium};
    }
  }
`;

const ReservationBtn = styled.div`
  padding: 14px 24px;
  margin-top: 16px;
  border-radius: 8px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontMedium};
`;
