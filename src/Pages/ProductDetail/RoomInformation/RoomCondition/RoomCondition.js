import React from "react";
import styled from "styled-components";
import mixin from "../../../../Styles/mixin";
import iconMatch from "../../IconMatch/IconMatch";

function RoomCondition({ tagTitle, tagDetail }) {
  return (
    <RoomConditionContainer>
      {tagTitle?.map((el, idx) => (
        <Item key={el}>
          {iconMatch[el] || iconMatch.default}
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
