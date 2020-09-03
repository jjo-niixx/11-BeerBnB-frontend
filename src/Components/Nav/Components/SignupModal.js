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

export default function SignupModal({ handleClose }) {
  return (
    <ModalContainer>
      <ModalWrapper>
        <ModalHeader>
          <div>{NavSvg.modalClose}</div>
          회원가입
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
            페이스북 계정으로 회원 가입
          </FullWideBtn>
          <FullWideBtn
            borderColor="rgb(118, 118, 118)"
            background="rgb(255, 255, 255)"
            color="rgb(72, 72, 72)"
          >
            {NavSvg.googleLogo}
            구글 계정으로 회원가입
          </FullWideBtn>
          <OrBorder>
            <span>또는</span>
          </OrBorder>
          <FullWideBtn background="#FF5A5F" color="rgb(255, 255, 255)">
            {NavSvg.email}
            이메일로 회원 가입
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
