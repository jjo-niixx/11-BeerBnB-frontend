import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import InformationHeader from "./InformationHeader/InformationHeader";
import RoomCondition from "./RoomCondition/RoomCondition";
import BedType from "./BedType/BedType";
import Description from "./Description/Description";
import Amenities from "./Amenities/Amenities";
import DayPicker from "./DayPicker/DayPicker";
import Reservation from "./Reservation/Reservation";

export default function RoomInformation() {
  const { roomInfo } = useSelector(({ productDetail }) => ({
    roomInfo: productDetail.roomInfo,
  }));

  const {
    sub_title,
    max_personnal,
    bed_room,
    bed,
    bath_room,
    tag_title,
    tag_detail,
    description,
    bedRoom,
    bedType,
  } = roomInfo;

  return (
    <RoomInformationContainer>
      <InformationContainer>
        <InformationHeader
          subTitle={sub_title}
          roomInformation={[max_personnal, bed_room, bed, bath_room]}
        />
        <RoomCondition tagTitle={tag_title} tagDetail={tag_detail} />
        <Description description={description} />
        <BedType bedRoom={bedRoom} bedType={bedType} />
        <Amenities />
        <DayPicker />
      </InformationContainer>
      <Reservation />
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
