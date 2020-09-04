import React from "react";
import styled from "styled-components";
import Title from "../../ProductDetailComponent/Title";
import mixin from "../../../../Styles/mixin";

function InformationHeader({ subTitle, roomInformation }) {
  return (
    <InformationHeaderContainer>
      <TitleWrapper>
        <Title title={subTitle} />
        <SubTitle>
          {roomInformation.map((el, idx) => (
            <div key={idx}>
              <span>{el}</span>
              <Dot>·</Dot>
            </div>
          ))}
        </SubTitle>
      </TitleWrapper>
      <picture>
        <Avatar alt="avatar of host" src={AVATAR_URL} />
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

const AVATAR_URL = "/images/ProductDetail/wecodeimg.png";
// 호스트 개인 정보라서 크롤링하기 제한되어서 위코드 아바타로 대체
