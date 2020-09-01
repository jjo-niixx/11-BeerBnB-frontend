import React from "react";
import styled from "styled-components";
import mixin from "../../../../Styles/mixin";
import Svg from "../../SVG/ProductDetailSvg";

export default function InteractionBtn({ btnName }) {
  return (
    <InteractionBtnContainer>
      {ICON_MATCH[btnName]}
      <span>{btnName}</span>
    </InteractionBtnContainer>
  );
}

const { share, heart } = Svg;

const ICON_MATCH = {
  공유하기: share,
  저장: heart,
};

const InteractionBtnContainer = styled.button`
  ${({ width, theme }) =>
    `${mixin.flexSet()}
      height: ${width} || 34px;
      padding: 0;
      margin-left: 25px;
      margin-right: 2px;
      font-family: ‘Roboto’,sans-serif;
      font-size: 14px;
      line-height: 100%;
      font-weight: ${theme.fontMedium};`}

  span {
    margin-left: 4px;
    text-decoration: underline;
  }
`;
