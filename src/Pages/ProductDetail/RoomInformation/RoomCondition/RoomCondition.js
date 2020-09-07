import React from "react";
import styled from "styled-components";
import mixin from "../../../../Styles/mixin";
import Svg from "../../SVG/ProductDetailSvg";

function RoomCondition({ tagTitle, tagDetail }) {
  return (
    <RoomConditionContainer>
      {tagTitle &&
        tagTitle.map((el, idx) => (
          <Item key={el}>
            {ICON_MATCH[el] || ICON_MATCH.default}
            <Description>
              <Title>{el}</Title>
              <Detail>{tagDetail[idx]}</Detail>
            </Description>
          </Item>
        ))}
    </RoomConditionContainer>
  );
}

export default RoomCondition;

const { entireHome, enhancedClean, key, calender, superHost, airBnb } = Svg;

const ICON_MATCH = {
  default: airBnb,
  "집 전체": entireHome,
  "순조로운 체크인 과정": key,
  "환불 정책": calender,
  "깨끗하고 깔끔한 숙소": enhancedClean,
  "슈퍼 호스트": superHost,
};

//style
const RoomConditionContainer = styled.div`
  padding: 48px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const Item = styled.div`
  ${mixin.flexSet("row", "flex-start", "flex-start")}
  margin-top: 24px;
`;

const Description = styled.div`
  margin-left: 16px;
`;

const Title = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontMedium};
`;

const Detail = styled.p`
  color: ${({ theme }) => theme.fontColorGray};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontRegular};
`;
