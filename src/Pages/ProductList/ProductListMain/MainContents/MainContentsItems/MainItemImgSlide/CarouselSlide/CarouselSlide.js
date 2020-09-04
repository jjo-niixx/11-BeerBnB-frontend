import React from "react";
import styled from "styled-components";

export default function CarouselSlide({ images, activeImg, animationOn }) {
  return (
    <ImgWrapper activeImg={activeImg} animationOn={animationOn}>
      {images.map((el, idx) => (
        <ItemImg src={el} key={idx} />
      ))}
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  ${({ activeImg }) => `transform: translateX(-${100 * activeImg}%)`};
  ${({ animationOn }) => (animationOn ? `transition: transform 200ms` : "")};
`;

const ItemImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
