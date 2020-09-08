import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { datesChange } from "../../../../modules/ProducDetail/dayPicker";
import { DateRangePicker } from "react-dates";
import { BOOKING_API } from "../../../../config";
import { useParams } from "react-router-dom";
import useBooking from "../../hooks/useBooking";
import moment from "moment";
import Title from "../../ProductDetailComponent/Title";
import ReviewInfo from "../../ProductDetailComponent/ReviewInfo";
import PriceInfo from "./PriceInfo/PriceInfo";
import mixin from "../../../../Styles/mixin";

export default function Reservation() {
  const { id } = useParams();
  const [focusedInput, setFocusedInput] = useState(null);
  const { dateRange } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
  }));
  const { startDate, endDate } = dateRange;
  const dateSelected = startDate && endDate;
  const { price } = useSelector(({ productList }) => {
    const nowIdx = id - 1;
    return {
      price: productList.roomsInfo?.rooms_list?.[nowIdx]?.price,
    };
  });
  const [priceInfo, setPrice] = useState({
    oneDayPrice: Number(price),
    serviceFee: Number(price) * 0.08,
    nightsFee: Math.ceil(Number(price) * 0.07),
  });
  const [bookingStat, attempBooking, confirmBooking] = useBooking();

  const dispatch = useDispatch();
  const onDatesChange = ({ startDate, endDate }) =>
    dispatch(datesChange({ startDate, endDate }));

  const _startDate = moment(startDate).format("YYYY-MM-DD");
  const _endDate = moment(endDate).format("YYYY-MM-DD");
  const numberOfNights = moment(endDate).diff(startDate, "days");
  const { oneDayPrice, serviceFee, nightsFee } = priceInfo;
  const totalPrice = oneDayPrice * numberOfNights + serviceFee + nightsFee;
  const title = dateSelected
    ? `${oneDayPrice} / 박`
    : "요금을 확인하려면 날짜를 입력하세요.";

  const booking = async () => {
    await fetch(BOOKING_API, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("access_token")
          ? sessionStorage.getItem("access_token")
          : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFpcmJuYjFAdGVzdC5jb20ifQ.0guG2ULvWdSbDME3sO5qEzDHTd2-VAdCJ54LVmaOxWY",
        //테스트 위해 디폴트 토큰 설정 추후 삭제 예정
      },
      body: JSON.stringify({
        room_id: id,
        room: id,
        price: Number(price),
        check_in: _startDate,
        check_out: _endDate,
        adult: "4",
        children: "0",
        infants: "0",
        payment_method: "체크 카드",
        total_price: totalPrice,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const message = res.message;
        if (message === "SUCCESS") {
          attempBooking();
        }
      });
  };

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
            showClearDates
          />
        </DateRangeContainer>
        <div>
          <ReservationBtn onClick={booking}>
            <div>{dateSelected ? "예약하기" : "예약 가능 여부 보기"}</div>
          </ReservationBtn>
          {dateSelected && (
            <PriceInfo totalPrice={totalPrice} priceInfo={priceInfo} />
          )}
        </div>
      </Wrapper>
    </Container>
  );
}

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
  position: relative;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  padding: 3px;
  z-index: 9999999999999;

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
  cursor: pointer;
`;
