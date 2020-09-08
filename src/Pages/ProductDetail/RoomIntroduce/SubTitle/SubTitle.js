import React from "react";
import styled from "styled-components";
import ReviewInfo from "../../ProductDetailComponent/ReviewInfo";
import InteractionBtn from "./InteractionBtn";
import mixin from "../../../../Styles/mixin";
import Svg from "../../SVG/ProductDetailSvg";

function SubTitle({ address }) {
  const { rightArrow } = Svg;
  return (
    <SubTitleContainer>
      <Information>
        <ReviewInfo noMargin={true} />
        <Location>
          <span>{address}</span>
          <SvgWrapper>{rightArrow}</SvgWrapper>
          <span>숙소</span>
        </Location>
      </Information>
      <InteractionArea>
        {BTN_NAME.map((el) => (
          <InteractionBtn btnName={el} key={el} />
        ))}
      </InteractionArea>
    </SubTitleContainer>
  );
}

export default SubTitle;

const BTN_NAME = ["공유하기", "저장"];

const SubTitleContainer = styled.div`
  ${mixin.flexSet("row", "space-between")}
`;

const Information = styled.div`
  ${mixin.flexSet("row", "space-between")}
`;

const Location = styled.div`
  ${mixin.flexSet("row", "space-between")}
  margin-left: 10px;
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
