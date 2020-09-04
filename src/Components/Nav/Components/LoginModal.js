import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import {
  ModalContainer,
  ModalWrapper,
  ModalHeader,
  ModalContent,
  FullWideBtn,
  OrBorder,
  InfoSection,
  InfoInput,
  ExtraAction,
  ExtraSection,
} from "./ReusableStyle";
import { signInAPI } from "../../../config";
import mixin from "../../../Styles/mixin";
import NavSvg from "../NavSvg";

export default function LoginModal({ toggleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const toggleLoginBtn = (e) => {
    var exptext = /^[A-Za-z0-9_]+@[A-Za-z0-9]+\.[A-Za-z0-9]+/;
    if (!email) return alert("이메일이 필요합니다.");
    else if (!exptext.test(email)) return alert("이메일을 입력하세요.");
    else if (!password) return alert("비밀번호를 입력하세요.");
    else if (password.length < 8)
      return alert(
        "비밀번호는 최소 8자 이상이어야 합니다. 다시 시도해 주세요."
      );

    if (exptext.test(email) && password.length >= 8) {
      fetch(`${signInAPI}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.access_token) {
            alert("로그인에 성공했습니다.");
            sessionStorage.setItem("access_token", res.access_token);
            history.push("/");
          } else {
            alert("이메일 및 비밀번호를 확인하세요.");
          }
        });
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <div onClick={toggleLogin}>{NavSvg.modalClose}</div>
          로그인
          <div />
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
          <InfoSection onSubmit={(e) => e.preventDefault()}>
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
                name="email"
                placeholder="이메일 주소"
              ></InfoInput>
              {NavSvg.emailInput}
            </div>
            <div>
              <InfoInput
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="비밀번호"
              ></InfoInput>
              {NavSvg.password}
            </div>
            <ExtraAction display="block" marginLeft="auto">
              비밀번호 보기
            </ExtraAction>
            <div>
              <ExtraAction>전화번호로 로그인</ExtraAction>&nbsp;·&nbsp;
              <ExtraAction>비밀번호를 잊으셨나요?</ExtraAction>
            </div>
            <div onClick={toggleLoginBtn}>
              <FullWideBtn
                borderColor="#FF5A5F"
                background="#FF5A5F"
                color="rgb(255, 255, 255)"
              >
                로그인
              </FullWideBtn>
            </div>
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

const GoBack = styled.div`
  ${mixin.flexSet("row", "flex-start", "center")}
  margin-top: 24px;

  button {
    margin-bottom: 0;
  }
`;
