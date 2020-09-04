import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

export default function ProfileDetail() {
  const [isLoginActive, setIsLoginActive] = useState(false);
  const [isSignupActive, setIsSignupActive] = useState(false);

  const toggleLogin = () => {
    setIsLoginActive(!isLoginActive);
  };

  const toggleSignup = () => {
    setIsSignupActive(!isSignupActive);
  };

  return (
    <PoppedProfile>
      <GoTab onClick={toggleLogin}>로그인</GoTab>
      {isLoginActive && <LoginModal toggleLogin={toggleLogin} />}
      <GoTab onClick={toggleSignup}>회원가입</GoTab>
      {isSignupActive && <SignupModal toggleSignup={toggleSignup} />}
      <GoTab>숙소 호스트 되기</GoTab>
      <GoTab>체험 호스팅하기</GoTab>
      <GoTab>도움말</GoTab>
    </PoppedProfile>
  );
}

const PoppedProfile = styled.div`
  position: absolute;
  top: 46px;
  min-width: 240px;
  margin-top: 34px;
  padding: 8px 0;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
  z-index: 1;
`;

const GoTab = styled.div`
  padding: 12px;
  cursor: pointer;
`;
