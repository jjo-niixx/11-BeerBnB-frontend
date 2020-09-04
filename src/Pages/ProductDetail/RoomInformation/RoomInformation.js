import React from "react";
import styled from "styled-components";
import InformationHeader from "./InformationHeader/InformationHeader";
import RoomCondition from "./RoomCondition/RoomCondition";
import BedType from "./BedType/BedType";
import Description from "./Description/Description";

export default function RoomInformation({
  title,
  subTitle,
  tagTitle,
  tagDetail,
  bedRoom,
  bedType,
  description,
}) {
  return (
    <RoomInformationContainer>
      <InformationContainer>
        <InformationHeader title={title} subTitle={subTitle} />
        <RoomCondition tagTitle={tagTitle} tagDetail={tagDetail} />
        <Description description={description} />
        <BedType bedRoom={bedRoom} bedType={bedType} />
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
  height: 200vh;
`;

const Reservation = styled.article`
  position: sticky;
  top: 128px;
  width: 35%;
  height: 30vh;
  margin-left: 5%;
  background-color: blue;
`;
