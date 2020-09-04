import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImgSlideMoveBtn from "./ImgSlideMoveBtn/ImgSlideMoveBtn";
import btnSvg from "../../../../ProductListSvg/ProductListSvg";
import CarouselSlide from "./CarouselSlide/CarouselSlide";
import mixin from "../../../../../../Styles/mixin";

export default function MainItemImgSlide({ image_url }) {
  const [activeImg, setActiveImg] = useState(image_url.length);
  const [activeCircle, setActiveCircle] = useState(0);
  const [isAnimationEnd, setIsAnimationEnd] = useState(false);
  const [animationOn, setAnimationOn] = useState(true);
  const newImg = [...image_url, ...image_url, ...image_url];

  useEffect(() => {
    const cardNum = image_url.length;
    const newCardNum = newImg.length;

    if (!animationOn) {
      if (activeImg === 1) setActiveImg(cardNum + 1);
      if (activeImg === cardNum + 1) setIsAnimationEnd(false);
      if (activeImg === newCardNum - 2) setActiveImg(cardNum * 2 - 2);
      if (activeImg === cardNum * 2 - 2) setIsAnimationEnd(false);
    }
    if (activeImg === 1) {
      setTimeout(() => setIsAnimationEnd(true), 200);
    }
    if (activeImg === newCardNum - 2)
      setTimeout(() => setIsAnimationEnd(true), 200);
  }, [activeImg, animationOn, image_url, newImg]);

  useEffect(() => {
    isAnimationEnd ? setAnimationOn(false) : setAnimationOn(true);
  }, [isAnimationEnd]);

  useEffect(() => {
    const cardNum = image_url.length;

    if (activeCircle <= -1) setActiveCircle(cardNum - 1);
    if (activeCircle >= cardNum) setActiveCircle(0);
  }, [activeCircle, image_url]);

  const gotoImgHandler = (idx) => {
    setActiveImg(activeImg + idx);
    setActiveCircle(activeCircle + idx);
  };

  return (
    <ImgSlideContainer>
      <CarouselSlide
        images={newImg}
        activeImg={activeImg}
        animationOn={animationOn}
      />
      {BTN_DATA.map((el, idx) => {
        const { btnName, offset, num } = el;
        return (
          <ImgSlideMoveBtn
            key={idx}
            btnSvg={btnName}
            offset={offset}
            activeImg={activeImg}
            num={num}
            gotoImgHandler={gotoImgHandler}
          />
        );
      })}
      <CircleWrapper>
        {image_url.map((el, idx) => {
          const isPushed = activeCircle === idx;
          return <Circle key={el} isPushed={isPushed} />;
        })}
      </CircleWrapper>
    </ImgSlideContainer>
  );
}

const BTN_DATA = [
  {
    btnName: btnSvg.imgPrevBtn,
    offset: { top: "84px", left: "2px", right: "" },
    num: -1,
  },
  {
    btnName: btnSvg.imgNextBtn,
    offset: { top: "84px", left: "", right: "2px" },
    num: 1,
  },
];

export const ImgSlideContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
`;

const CircleWrapper = styled.div`
  ${mixin.flexSet()}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;

const Circle = styled.span`
  width: 6px;
  height: 6px;
  margin: 10px 2.5px;
  border-radius: 50%;
  background-color: white;
  opacity: ${({ isPushed }) => (isPushed ? "1" : "0.6")};
`;
