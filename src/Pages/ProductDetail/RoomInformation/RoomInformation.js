import React from "react";
import styled from "styled-components";
import InformationHeader from "./InformationHeader/InformationHeader";
import RoomCondition from "./RoomCondition/RoomCondition";
import BedType from "./BedType/BedType";
import Description from "./Description/Description";
import Amenities from "./Amenities/Amenities";
import DayPickerContainer from "../../../container/DayPickerContainer";

export default function RoomInformation({
  title,
  subTitle,
  tagTitle,
  tagDetail,
  bedRoom,
  bedType,
  description,
  amenities,
}) {
  return (
    <RoomInformationContainer>
      <InformationContainer>
        <InformationHeader title={title} subTitle={subTitle} />
        <RoomCondition tagTitle={tagTitle} tagDetail={tagDetail} />
        <Description description={description} />
        <BedType bedRoom={bedRoom} bedType={bedType} />
        <Amenities amenities={amenities} />
        <DayPickerContainer />
      </InformationContainer>
      <Reservation></Reservation>
    </RoomInformationContainer>
  );
}

const RoomInformationContainer = styled.section`
  display: flex;
  position: relative;
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 48px;
`;

const InformationContainer = styled.article`
  width: 60%;
`;

const Reservation = styled.article`
  position: sticky;
  top: 170px;
  width: 35%;
  height: 30vh;
  margin-left: 5%;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 16px;
`;
