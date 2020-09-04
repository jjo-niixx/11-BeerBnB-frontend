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

  roomConditionData: {
    title: ["집 전체", "순조로운 체크인 과정", "환불 정책", "슈퍼 호스트"],
    detail: [
      "전원주택 전체를 단독으로 사용하시게 됩니다.",
      "최근 숙박한 게스트 중 100%가 체크인 과정에 별점 5점을 준 숙소입니다.",
      "체크인 30일 전까지 취소하시면 전액이 환불됩니다.",
      "이 호스트는 인증받은 슈퍼 호스트 입니다.",
    ],
  },

  description: {},
};
