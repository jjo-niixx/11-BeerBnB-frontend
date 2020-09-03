import React, { Component } from "react";
import styled from "styled-components";
import mixin from "../../../Styles/mixin";
import NavSvg from "../NavSvg";
import {
  ModalContainer,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  FullWideBtn,
  OrBorder,
  InfoInput,
  ExtraAction,
  ExtraSection,
} from "./ReusableStyle";

class SignupModalEmail extends Component {
  render() {
    return (
      <ModalContainer>
        <ModalWrapper>
          <ModalHeader>
            <div>{NavSvg.modalClose}</div>
            회원 가입
            <div></div>
          </ModalHeader>
          <ModalContent>
            <SocialSignup>
              <ExtraAction noMargin>페이스북</ExtraAction>
              또는
              <ExtraAction noMargin>구글</ExtraAction>로 회원 가입하세요.
            </SocialSignup>
            <OrBorder>
              <span>또는</span>
            </OrBorder>
            <InfoSection>
              <div>
                <InfoInput placeholder="이메일 주소"></InfoInput>
                {NavSvg.emailInput}
              </div>
              <div>
                <InfoInput placeholder="이름(예: 길동)"></InfoInput>
                {NavSvg.person}
              </div>
              <div>
                <InfoInput placeholder="성(예: 홍)"></InfoInput>
                {NavSvg.person}
              </div>
              <div>
                <InfoInput placeholder="비밀번호 설정하기"></InfoInput>
                {NavSvg.passwordInvisable}
              </div>
            </InfoSection>
            <ValidationSection>
              <div>
                {NavSvg.validationNotPassed}
                <span>비밀번호 보안 수준:</span>
                <span>약함</span>
              </div>
              <div>
                {NavSvg.validationNotPassed}
                <span>
                  비밀번호에 본인 이름이나 이메일 주소를 포함할 수 없습니다.
                </span>
              </div>
              <div>
                {NavSvg.validationNotPassed}
                <span>최소 8자</span>
              </div>
              <div>
                {NavSvg.validationNotPassed}
                <span>숫자나 기호를 포함하세요</span>
              </div>
            </ValidationSection>
            <SignupInfoBirth>
              <h3>생일</h3>
              <p>
                만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
                에어비앤비 이용자에게 공개되지 않습니다.
              </p>
              <BirthSelect width="41.6%">
                <option>월</option>
                <option value="1">1월</option>
                <option value="2">2월</option>
              </BirthSelect>
              <BirthSelect width="25%">
                <option>일</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </BirthSelect>
              <BirthSelect width="33.3%">
                <option>년</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </BirthSelect>
            </SignupInfoBirth>
            <div>
              <p>
                에어비앤비의 회원 전용 할인, 추천 여행 정보, 프로모션 및 정책
                변경사항을 이메일로 보내드립니다. 계정 관리의 환경설정 또는
                프로모션 알림에서 언제든지 메시지 수신을 거부할 수 있습니다.
              </p>
              <UserAgreement>
                <input type="checkbox"></input>
                <p>에어비앤비에서 보내는 마케팅 메시지를 받고 싶지 않습니다.</p>
              </UserAgreement>
            </div>
            <FullWideBtn
              borderColor="transparent"
              background="#ff5a5f"
              color="#fff"
            >
              가입하기
            </FullWideBtn>
            <ExtraSection>
              <span>이미 에어비앤비 계정이 있나요?</span>
              <ExtraAction>로그인</ExtraAction>
            </ExtraSection>
          </ModalContent>
        </ModalWrapper>
      </ModalContainer>
    );
  }
}

const SocialSignup = styled.div`
  text-align: center;
`;

const InfoSection = styled.form`
  width: 100%;

  div {
    position: relative;
  }
`;

const ValidationSection = styled.div`
  margin-bottom: 16px;
`;

const SignupInfoBirth = styled.div`
  margin-bottom: 16px;

  h3 {
    line-height: 1.375em;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontBold};
  }

  p {
    margin-top: 8px;
    margin-bottom: 16px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontRegular};
    line-height: 1.28571em;
  }
`;

const BirthSelect = styled.select`
  width: ${({ width }) => width};
  padding: 11px;
  padding-right: 40px;
  line-height: 24px;
  font-size: 16px;
  border: 1px solid #ebebeb;
`;

const UserAgreement = styled.div`
  ${mixin.flexSet("row", "flex-start", "center")}
  margin: 20px 0;
`;

export default SignupModalEmail;
