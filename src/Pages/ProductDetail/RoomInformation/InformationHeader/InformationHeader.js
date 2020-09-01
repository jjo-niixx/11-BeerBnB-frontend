import React from "react";
import styled from "styled-components";
import mixin from "../../../../Styles/mixin";

function InformationHeader({
  headerData: { titleData, subtitleData, avatarUrl },
}) {
  return (
    <InformationHeaderContainer>
      <TitleWrapper>
        <Title>{titleData}</Title>
        <SubTitle>
          {subtitleData.map((el) => (
            <div key={el}>
              <span>{el}</span>
              <Dot>·</Dot>
            </div>
          ))}
        </SubTitle>
      </TitleWrapper>
      <picture>
        <Avatar alt="avatar of host" src={avatarUrl} />
      </picture>
    </InformationHeaderContainer>
  );
}

export default InformationHeader;

const InformationHeaderContainer = styled.div`
  ${mixin.flexSet("row", "space-between")}
  padding-bottom: 24px;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const TitleWrapper = styled.div`
  ${mixin.flexSet("column", "space-between", "flex-start")}
  height: 56px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
`;

const Dot = styled.span`
  margin: 0 5px;
`;

const SubTitle = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 350;

  div:last-of-type {
    ${Dot} {
      display: none;
    }
  }
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  object-fit: cover;
  border-radius: 50%;
`;
