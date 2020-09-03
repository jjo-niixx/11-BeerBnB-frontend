import React from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";

export default function ImgSlideMoveBtn({
  offset,
  btnSvg,
  gotoImgHandler,
  num,
}) {
  return (
    <BtnSvgContainer position={offset} onClick={() => gotoImgHandler(num)}>
      <WrapBtnSvg>{btnSvg}</WrapBtnSvg>
    </BtnSvgContainer>
  );
}

export const BtnSvgContainer = styled.button`
  ${mixin.flexSet()};
  position: absolute;
  ${({ position: { top, left, right } }) => {
    return `
    top: ${top};
    left: ${left};
    right: ${right};
    `;
  }}
  z-index: 20;
  width: 32px;
  height: 32px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 0;
  transition: background-color 200ms, opacity 200ms, transform 200ms;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const WrapBtnSvg = styled.span`
  ${mixin.flexSet()}
  width: 16px;
  height: 16px;
`;
