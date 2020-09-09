import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterSvg from "./FooterSvg";

export default function Footer() {
  return (
    <FooterContainer>
      <ContentsWrapper>
        <Section>
          <InfoHead>소개</InfoHead>
          <InfoListGroup>
            {infoListGroup.information.map((el, idx) => {
              return (
                <Link key={idx} to="/">
                  <InfoList>{el}</InfoList>
                </Link>
              );
            })}
          </InfoListGroup>
        </Section>
        <Section>
          <InfoHead>커뮤니티</InfoHead>
          <InfoListGroup>
            {infoListGroup.communinty.map((el, idx) => {
              return (
                <Link key={idx} to="/">
                  <InfoList>{el}</InfoList>
                </Link>
              );
            })}
          </InfoListGroup>
        </Section>
        <Section>
          <InfoHead>호스팅하기</InfoHead>
          <InfoListGroup>
            {infoListGroup.hosting.map((el, idx) => {
              return (
                <Link key={idx} to="/">
                  <InfoList>{el}</InfoList>
                </Link>
              );
            })}
          </InfoListGroup>
        </Section>
        <Section>
          <InfoHead>에어비앤비 지원</InfoHead>
          <InfoListGroup>
            {infoListGroup.support.map((el, idx) => {
              return (
                <Link key={idx} to="/">
                  <InfoList>{el}</InfoList>
                </Link>
              );
            })}
          </InfoListGroup>
        </Section>
      </ContentsWrapper>
      <ExtraSection>
        <>
          © 2020 Airbnb, Inc. All rights reserved
          <Dot>·</Dot>
          <Link to="/">개인정보 처리방침</Link>
          <Dot>·</Dot>
          <Link to="/">이용약관</Link>
          <Dot>·</Dot>
          <Link to="/">사이트맵</Link>
          <Dot>·</Dot>
          <Link to="/">한국의 변경된 환불 정책</Link>
        </>
        <>
          <SNSBox>
            <Link to="/">{FooterSvg.facebook}</Link>
            <Link to="/">{FooterSvg.twitter}</Link>
            <Link to="/">{FooterSvg.instagram}</Link>
            <Link to="/">{FooterSvg.naverBlog}</Link>
            <Link to="/">{FooterSvg.naverPost}</Link>
          </SNSBox>
        </>
      </ExtraSection>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  padding: 0 80px;
  border-top: ${({ theme }) => theme.borderSet};
  background-color: ${({ theme }) => theme.backgroundColorGray};
`;

const ContentsWrapper = styled.div`
  display: flex;
  margin: 0 -12px;
  padding: 48px 0;
`;

const Section = styled.section`
  margin-right: auto;
  padding: 0 12px;
`;

const InfoHead = styled.h4`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontBold};
`;

const InfoListGroup = styled.ul`
  display: block;

  a:hover {
    text-decoration: underline;
  }
`;

const InfoList = styled.li`
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  color: ${({ theme }) => theme.fontColorBlack};
  font-size: 14px;
  line-height: 18px;
  margin-top: 16px;
`;

const ExtraSection = styled.section`
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: ${({ theme }) => theme.borderSet};

  a {
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-size: 14px;
    line-height: 18px;
    color: ${({ theme }) => theme.fontColorBlack};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Dot = styled.span`
  width: 19px;
  text-align: center;
`;

const SNSBox = styled.div`
  margin-left: auto;
`;

const infoListGroup = {
  information: [
    "에어비앤비 이용 방법",
    "뉴스룸",
    "에어비앤비 플러스",
    "에어비앤비 Luke",
    "호텔투나잇",
    "에어비앤비 비즈니스 프로그램",
    "올림픽",
    "채용정보",
  ],
  communinty: [
    "다양성 및 소속감",
    "접근성",
    "에어비앤비 어소시에이트",
    "구호 인력을 위한 숙소",
  ],
  hosting: [
    "숙소 호스팅",
    "온라인 체험 호스팅하기",
    "체험 호스팅하기",
    "브라이언 체스키 CEO의 메시지",
    "책임감 있는 호스팅",
    "Open Homes",
    "자료 센터",
    "커뮤니티 센터",
  ],
  support: [
    "코로나19 관련 업데이트",
    "도움말 센터",
    "예약 취소 옵션",
    "에어비앤비 이웃 민원 지원",
    "신뢰와 안전",
  ],
};
