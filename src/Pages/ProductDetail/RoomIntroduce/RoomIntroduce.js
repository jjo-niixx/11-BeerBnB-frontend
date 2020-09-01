import React, { useState } from "react";
import styled from "styled-components";
import SubTitle from "./SubTitle/SubTitle";
import ImgArea from "./ImgArea/ImgArea";
import mixin from "../../../Styles/mixin";

export default function RoomIntroduce() {
  const [{ title, location, btnName, imgUrl }, setData] = useState(
    INTRODUCE_DATA
  );

  return (
    <RoomIntroduceContainer>
      <RoomIntroduceHeader>
        <Title>{title}</Title>
        <SubTitle location={location} btnName={btnName} />
      </RoomIntroduceHeader>
      <ImgArea imgUrl={imgUrl} />
    </RoomIntroduceContainer>
  );
}

// style

const RoomIntroduceContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 100px;
`;

const RoomIntroduceHeader = styled.div``;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fontBold};
`;

// 상수데이터
// 데이터 형식이 확정되지 않아 일단 레이아웃은 상수데이터 이용해서 구현한 다음 추후 하는 방식으로 변경예정
const INTRODUCE_DATA = {
  title: "Ju's home(2) 공항 9km/ 제주시 바닷가 앞 2층 감성숙소",
  location: "Samyangsam-dong, Cheju, 제주도, 한국",
  btnName: ["공유하기", "저장"],
  imgUrl: [
    "/images/ProductDetail/RoomImg/leftBig.webp",
    "/images/ProductDetail/RoomImg/right1.webp",
    "/images/ProductDetail/RoomImg/right2.webp",
    "/images/ProductDetail/RoomImg/right3.webp",
    "/images/ProductDetail/RoomImg/right4.webp",
  ],
};
