import React from "react";
import styled from "styled-components";
import InteractionBtn from "./InteractionBtn";
import mixin from "../../../../Styles/mixin";
import Svg from "../../SVG/ProductDetailSvg";

function SubTitle({ address }) {
  const { rightArrow } = Svg;
  return (
    <SubTitleContainer>
      <Location>
        <span>{address}</span>
        <SvgWrapper>{rightArrow}</SvgWrapper>
        <span>숙소</span>
      </Location>
      <InteractionArea>
        {BTN_NAME.map((el) => (
          <InteractionBtn btnName={el} key={el} />
        ))}
      </InteractionArea>
    </SubTitleContainer>
  );
}

export default SubTitle;

const SubTitleContainer = styled.div`
  ${mixin.flexSet("row", "space-between")}
`;

const Location = styled.div`
  ${mixin.flexSet()}
  font-size: 14px;
  color: ${(props) => props.theme.fontColorGray};

  span:first-of-type {
    &:hover {
      padding-bottom: 3px;
      margin-bottom: -4px;
      border-bottom: 1px solid ${({ theme }) => theme.fontColorGray};
    }
  }
`;

const SvgWrapper = styled.div`
  padding: 0 8px;
`;

const InteractionArea = styled.div`
  ${mixin.flexSet()}
  height: 100%;
`;

const BTN_NAME = ["공유하기", "저장"];
