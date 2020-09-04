import React from "react";
import styled from "styled-components";

function ImgArea({ imgUrl }) {
  const [firstImg, ...restImg] = imgUrl || [];
  return (
    <ImgAreaContainer>
      <HalfSizeImg alt="room preview" src={firstImg} />
      <QuarterSizeImgWrapper>
        {restImg.map((el) => (
          <QuarterSizeImg key={el} alt="room preview" src={el} />
        ))}
      </QuarterSizeImgWrapper>
    </ImgAreaContainer>
  );
}

export default ImgArea;

const ImgAreaContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  max-height: calc(45vh - 64px);
  border-radius: 12px;
`;

const HalfSizeImg = styled.img`
  flex: 1 0 50%;
  width: 50%;
  border-radius: 12px 0 0 12px;

  &:hover {
    opacity: 0.9;
  }
`;

const QuarterSizeImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 0 50%;
  width: 50%;
  padding-left: 8px;
`;

const QuarterSizeImg = styled.img`
  flex-basis: 50%;
  width: 40%;
  height: 50%;

  &:nth-of-type(n + 3) {
    padding-top: 8px;
  }

  &:nth-of-type(even) {
    padding-left: 8px;
  }

  &:nth-of-type(2) {
    border-radius: 0 12px 0 0;
  }

  &:nth-of-type(4) {
    border-radius: 0 0 12px 0;
  }

  &:hover {
    opacity: 0.9;
  }
`;
