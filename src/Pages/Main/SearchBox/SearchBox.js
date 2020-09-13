import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { datesChange } from "../../../modules/ProducDetail/dayPicker";
import Location from "./SearchItem/Location";
import Dates from "./SearchItem/Dates";
import Guest from "./SearchItem/Guest";
import NavSvg from "../../../Components/Nav/NavSvg";
import mixin from "../../../Styles/mixin";

export default function SearchBox() {
  const { dateRange } = useSelector(({ dayPicker }) => ({
    dateRange: dayPicker.dateRange,
  }));
  const { startDate, endDate } = dateRange;

  const { guests } = useSelector(({ guestCount: { guests } }) => ({
    guests: guests,
  }));
  const { adult, child, infant } = guests;

  const [locationInput, setLocationInput] = useState("");
  const [isActive, setIsActive] = useState({
    location: false,
    date: false,
    guest: false,
  });

  const toggleLocation = () => {
    setIsActive({ ...isActive, location: !isActive.location });
  };

  const toggleDates = () => {
    setIsActive({ ...isActive, date: !isActive.date });
  };

  const toggleGuest = () => {
    setIsActive({ ...isActive, guest: !isActive.guest });
  };

  const handleInput = (e) => {
    setLocationInput(e.target.value);

    if (locationInput.length) {
      setIsActive({ ...isActive, location: true });
    }
  };

  const filteredInput = DestinationList.filter((item) =>
    item.includes(locationInput)
  );

  let guestNum;
  if (adult === 0 && child === 0 && infant === 0) {
    guestNum = `게스트 추가`;
  } else if (infant === 0) {
    guestNum = `게스트 ${adult + child}명`;
  } else if (infant !== 0) {
    guestNum = `게스트 ${adult + child}명, 유아 ${infant}명`;
  }

  const _startDate = moment(startDate).format("YYYY-MM-DD");
  const _endDate = moment(endDate).format("YYYY-MM-DD");

  return (
    <RoomSearch>
      <SearchItem>
        <ItemTitle>위치</ItemTitle>
        <input
          onClick={toggleLocation}
          onChange={handleInput}
          placeholder="어디로 여행가세요?"
        />
        {isActive.location && <Location filteredInput={filteredInput} />}
      </SearchItem>
      <ItemRightBorder />
      <SearchItem>
        <ItemTitle>체크인</ItemTitle>
        <input readOnly onClick={toggleDates} value={_startDate} />
        {isActive.date && <Dates />}
      </SearchItem>
      <ItemRightBorder />
      <SearchItem>
        <ItemTitle>체크아웃</ItemTitle>
        <input readOnly value={_endDate} />
      </SearchItem>
      <ItemRightBorder />
      <SearchItem>
        <div>
          <ItemTitle>인원</ItemTitle>
          <button onClick={toggleGuest}>{guestNum}</button>
        </div>
        <Link to="/productlist">
          <SearchBtn top="7px" right="12px" width="48px" height="48px">
            {NavSvg.searchBtnLarge}
          </SearchBtn>
        </Link>
        {isActive.guest && <Guest />}
      </SearchItem>
    </RoomSearch>
  );
}

const RoomSearch = styled.div`
  ${mixin.flexSet("row", "space-around")}
  max-width: 850px;
  height: 66px;
  margin: 0 auto;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 32px;
`;

const SearchItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 14px 24px;
  text-align: left;

  input,
  button {
    padding: 0;
    border: none;
    color: ${({ theme }) => theme.fontColorGray};
    cursor: pointer;
  }

  &:nth-of-type(4) {
    ${mixin.flexSet("row", "space-between")}
  }

  &:hover {
    border-radius: 32px;
    background-color: rgb(239, 239, 239);
  }
`;

const ItemRightBorder = styled.div`
  border: ${({ theme }) => theme.borderSet};
  height: 32px;
`;

const ItemTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding-bottom: 2px;
`;

const SearchBtn = styled.button`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pinkColor};
`;

const DestinationList = [
  "제주도",
  "제주도 서귀포시",
  "제주시, 제주특별자치도",
  "제주 애월읍 곽지과물해변",
  "제주도 서귀포시 성산읍",
];
