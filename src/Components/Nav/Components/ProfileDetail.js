import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "./LoginModal";

export default class ProfileDetail extends Component {
  constructor() {
    super();
    this.state = {
      isModalActive: false,
    };
  }

  handleLogin = () => {
    const { isModalActive } = this.state;
    this.setState({
      isModalActive: !isModalActive,
    });
  };

  handleClose = () => {
    this.setState({
      isModalActive: false,
    });
  };

  render() {
    const { isModalActive } = this.state;
    const { handleLogin, handleClose } = this;
    return (
      <PoppedProfileSection>
        <Link to="/" onClick={handleLogin}>
          로그인
        </Link>
        {isModalActive && <LoginModal handleClose={handleClose} />}
        <Link to="/">회원가입</Link>
        <Link to="/">숙소 호스트 되기</Link>
        <Link to="/">체험 호스팅하기</Link>
        <Link to="/">도움말</Link>
      </PoppedProfileSection>
    );
  }
}

const PoppedProfileSection = styled.div`
  position: absolute;
  top: 46px;
  min-width: 240px;
  max-height: calc(100vh-100px);
  margin-top: 34px;
  padding: 8px 0;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.2s ease;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
  z-index: 2;

  a {
    display: block;
    padding: 12px;
  }
`;
