import React from "react";
import styled from "styled-components";
import InformationHeader from "./InformationHeader/InformationHeader";
import RoomCondition from "./RoomCondition/RoomCondition";

export default function RoomInformation({ roomInfo }) {
  const { headerData, roomConditionData } = roomInfo;
  return (
    <RoomInformationContainer>
      <InformationContainer>
        <InformationHeader headerData={headerData} />
        <RoomCondition roomConditionData={roomConditionData} />
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
