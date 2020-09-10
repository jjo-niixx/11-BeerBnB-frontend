import React, { useState } from "react";
import SignupModalEmail from "./SignupModalEmail";
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
import GoogleSignIn from "./GoogleSignIn/GoogleSignIn";
import NavSvg from "../NavSvg";

export default function SignupModal({ toggleSignup }) {
  const [isSignupEmailActive, setIsSignupEmailActive] = useState(false);

  const handleSignupEmail = () => {
    setIsSignupEmailActive(!isSignupEmailActive);
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <div onClick={toggleSignup}>{NavSvg.modalClose}</div>
          회원가입
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
            페이스북 계정으로 회원 가입
          </FullWideBtn>
          <GoogleSignIn />
          <OrBorder>
            <span>또는</span>
          </OrBorder>
          <div onClick={handleSignupEmail}>
            <FullWideBtn background="#FF5A5F" color="rgb(255, 255, 255)">
              {NavSvg.email}
              이메일로 회원 가입
            </FullWideBtn>
          </div>
          {isSignupEmailActive && (
            <SignupModalEmail handleSignupEmail={handleSignupEmail} />
          )}
          <ExtraSection>
            <span>이미 에어비앤비 계정이 있나요?</span>
            <ExtraAction>로그인</ExtraAction>
          </ExtraSection>
        </ModalContent>
      </ModalWrapper>
    </ModalContainer>
  );
}
