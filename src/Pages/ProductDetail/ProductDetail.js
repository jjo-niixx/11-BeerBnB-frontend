import React from "react";
import styled from "styled-components";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";
import RoomInformation from "./RoomInformation/RoomInformation";

export default function ProductDetail() {
  return (
    <Main>
      <RoomIntroduce />
      <RoomInformation roomInfo={ROOM_INFO} />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;

const ROOM_INFO = {
  headerData: {
    titleData: "Juyoung님이 호스팅하는 전원주택 전체",
    subtitleData: ["최대인원 4명", "침실 1개", "침대 1개", "욕실 1개"],
    avatarUrl: "/images/ProductDetail/wecodeimg.png",
  },
  roomCondition: {},
  description: {},
};
