import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SubTitle from "./SubTitle/SubTitle";
import ImgArea from "./ImgArea/ImgArea";

export default function RoomIntroduce() {
  const { roomInfo } = useSelector(({ productDetail }) => ({
    roomInfo: productDetail.roomInfo,
  }));

  const { title, address, image_url } = roomInfo;

  return (
    <RoomIntroduceContainer>
      <RoomIntroduceHeader>
        <Title>{title}</Title>
        <SubTitle address={address} />
      </RoomIntroduceHeader>
      {image_url && <ImgArea imgUrl={image_url} />}
      {/* 새로고침 초기에 0.1초정도 엑스박스가 보였다가 다시 이미지가 보이는 것 방지하기 위해 조건부 렌더링 */}
    </RoomIntroduceContainer>
  );
}

// style
const RoomIntroduceContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 170px;
`;

const RoomIntroduceHeader = styled.div``;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontBold};
`;
