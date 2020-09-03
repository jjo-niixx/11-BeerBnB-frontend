import React, { useState, useEffect } from "react";
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
  ExtraAction,
  ExtraSection,
} from "./ReusableStyle";

export default function LoginModal({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginBtn = (e) => {
    console.log("checked");
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <div onClick={handleClose}>{NavSvg.modalClose}</div>
          로그인
          <div></div>
        </ModalHeader>
        <ModalContent>
          <FullWideBtn
            margin="8px"
            borderColor="transparent"
            background="rgb(69, 104, 178)"
            color="rgb(255, 255, 255)"
          >
            {NavSvg.facebookLogo}
            페이스북 계정으로 로그인
          </FullWideBtn>
          <FullWideBtn
            borderColor="rgb(118, 118, 118)"
            background="rgb(255, 255, 255)"
            color="rgb(72, 72, 72)"
          >
            {NavSvg.googleLogo}
            구글 계정으로 로그인
          </FullWideBtn>
          <OrBorder>
            <span>또는</span>
          </OrBorder>
          <InfoSection>
            <ErrorBox>
              <div>{NavSvg.loginValidationError}</div>
              <span>
                이 이메일 주소와 연결된 계정이 없습니다. 다른 이메일 주소를
                사용해 보세요.
              </span>
            </ErrorBox>
            <div>
              <InfoInput
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="이메일 주소"
              ></InfoInput>
              {NavSvg.emailInput}
              {!email.includes("@") && (
                <ErrorTxt>이메일을 입력하세요.</ErrorTxt>
              )}
            </div>
            <div>
              <InfoInput
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="비밀번호"
              ></InfoInput>
              {NavSvg.password}
              {password.length < 8 && (
                <ErrorTxt>비밀번호는 최소 8자 이상이어야 합니다.</ErrorTxt>
              )}
            </div>
            <ExtraAction display="block" marginLeft="auto">
              비밀번호 보기
            </ExtraAction>
            <div>
              <ExtraAction>전화번호로 로그인</ExtraAction>&nbsp;·&nbsp;
              <ExtraAction>비밀번호를 잊으셨나요?</ExtraAction>
            </div>
            <FullWideBtn
              onClick={handleLoginBtn}
              borderColor="#FF5A5F"
              background="#FF5A5F"
              color="rgb(255, 255, 255)"
            >
              로그인
            </FullWideBtn>
          </InfoSection>
          <ExtraSection>
            <span>에어비앤비 계정이 없으세요?</span>
            <ExtraAction>회원가입</ExtraAction>
          </ExtraSection>
          <GoBack>
            {NavSvg.goBack}
            <ExtraAction>뒤로</ExtraAction>
          </GoBack>
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  );
}

const InfoSection = styled.form`
  width: 100%;

  div {
    position: relative;
  }
`;

const ErrorBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 16px;

  div {
    width: 48px;
    height: 100%;
    padding: 16px 0px 16px 12px;
    border-style: solid;
    border-width: 2px 0px 2px 2px;
    border-radius: 8px 0px 0px 8px;
    background-color: rgb(252, 100, 45);
    border-color: rgb(252, 100, 45);
  }

  span {
    width: 100%;
    padding: 20px 8px;
    border-style: solid;
    border-width: 2px 2px 2px 0px;
    border-radius: 0px 8px 8px 0px;
    border-color: rgb(235, 235, 235);
    font-size: 14px;
  }
`;

const ErrorTxt = styled.div`
  margin-top: -8px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #d93900;
`;

const InfoInput = styled.input`
  display: inline-block;
  width: ${({ width }) => (width ? width : "100%")};
  margin-bottom: 16px;
  padding: 11px;
  line-height: 24px;
  font-size: 16px;
  border: 1px solid #ebebeb;
  border-radius: 4px;

  &:focus {
    border: 1px solid #008489;
  }
`;

const GoBack = styled.div`
  ${mixin.flexSet("row", "flex-start", "center")}
  margin-top: 24px;

  button {
    margin-bottom: 0;
  }
`;
