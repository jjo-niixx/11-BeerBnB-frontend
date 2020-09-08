import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import moment from "moment";
import Fee from "./Fee/Fee";
import mixin from "../../../../../Styles/mixin";

function PriceInfo({ dayPrice }) {
  const { dateRange } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
  }));

  const { startDate, endDate } = dateRange;

  const numberOfNights = moment(endDate).diff(startDate, "days");

  const [price, setPrice] = useState({
    oneDayPrice: dayPrice,
    serviceFee: 0,
    nightsFee: 0,
  });
  const { oneDayPrice, serviceFee, nightsFee } = price;

  useEffect(() => {
    const totalSleepPrice = convertedOneDayPrice * numberOfNights;
    const serviceFee = totalSleepPrice * 0.8;
    const nightsFee = totalSleepPrice * 0.3;
    const newPrice = {
      ...price,
      serviceFee,
      nightsFee,
    };
    setPrice(newPrice);
  }, [endDate]);

  const convertedOneDayPrice = Number(oneDayPrice.replace(",", ""));

  return (
    <Container>
      <Notification>예약 확정 전에는 요금이 청구되지 않습니다.</Notification>
      <Price>
        <div>{`₩ ${oneDayPrice} X ${numberOfNights}박`}</div>
        <div>{`₩ ${convertedOneDayPrice * numberOfNights}`}</div>
      </Price>
      {FEES.map((el) => (
        <Fee key={el} title={el} price={price} />
      ))}
      <TotalPrice>
        <div>총 합계</div>
        <div>{`₩ ${convertedOneDayPrice + serviceFee + nightsFee}`}</div>
      </TotalPrice>
    </Container>
  );
}

export default PriceInfo;

//CONSTANTS
const FEES = ["서비스 수수료", "숙박세와 수수료"];

//style
const Container = styled.div`
  margin-top: 16px;
  text-align: center;
`;

const Notification = styled.div`
  font-size: 14px;
  ${({ theme }) => css`
    font-weight: ${theme.fontRegular};
    color: ${theme.fontColorGray};
  `};
`;

const Price = styled.div`
  ${mixin.flexSet("row", "space-between")};
  margin-top: 24px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 300;
  ${({ theme }) => css`
    color: ${theme.fontColorBlack};
  `};
`;

const TotalPrice = styled.div`
  ${mixin.flexSet("row", "space-between")}
  margin-top: 24px;
  padding: 24px 10px 0 10px;
  border-top: ${({ theme }) => theme.borderSet};
`;
