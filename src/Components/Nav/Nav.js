import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import mixin from "../../Styles/mixin";
import NavSvg from "./NavSvg";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isBtnClicked: false,
    };
  }

  handleBtnClicked = () => {
    const { isBtnClicked } = this.state;
    this.setState({
      isBtnClicked: !isBtnClicked,
    });
  };

  render() {
    const { isBtnClicked } = this.state;
    return (
      <NavContainer>
        <header>
          <Link to="/">{NavSvg.siteLogo}</Link>
          <FormContainer>
            <fieldset>
              <label>숙소</label>
              <label>체험</label>
              <Link to="/">온라인 체험</Link>
            </fieldset>
          </FormContainer>
          {window.scrollY >= 80 && (
            <ReducedSearch>
              <div className="searchTxt">검색 시작하기</div>
              <SearchBtn width="32px" height="32px">
                {NavSvg.searchBtnSmall}
              </SearchBtn>
            </ReducedSearch>
          )}
          <SiteExtra>
            <div className="extraDetail">
              <ExtraDetailBtn>호스트 되기</ExtraDetailBtn>
              <ExtraDetailBtn>
                {NavSvg.translation}
                {NavSvg.translationArrow}
              </ExtraDetailBtn>
            </div>
            <ProfileBtn onClick={this.handleBtnClicked}>
              {NavSvg.profileBtnStroke}
              {NavSvg.profileBtnPerson}
            </ProfileBtn>
            {isBtnClicked && (
              <OnClickedSection>
                <Link to="/">로그인</Link>
                <Link to="/">회원가입</Link>
                <Link to="/">숙소 호스트 되기</Link>
                <Link to="/">체험 호스팅하기</Link>
                <Link to="/">도움말</Link>
              </OnClickedSection>
            )}
          </SiteExtra>
        </header>
        <RoomSearch>
          <SearchItem>
            <ItemTitle>위치</ItemTitle>
            <input placeholder="어디로 여행가세요?"></input>
          </SearchItem>
          <ItemRightBorder />
          <SearchItem>
            <ItemTitle>체크인</ItemTitle>
            <button>날짜 추가</button>
          </SearchItem>
          <ItemRightBorder />
          <SearchItem>
            <ItemTitle>체크아웃</ItemTitle>
            <button>날짜 추가</button>
          </SearchItem>
          <ItemRightBorder />
          <SearchItem>
            <div>
              <ItemTitle>인원</ItemTitle>
              <button>게스트 추가</button>
            </div>
            <SearchBtn left="12px" width="48px" height="48px">
              {NavSvg.searchBtnLarge}
            </SearchBtn>
          </SearchItem>
        </RoomSearch>
      </NavContainer>
    );
  }
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  padding: 0 80px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }

  a {
    color: ${({ theme }) => theme.fontColorBlack};
  }
`;

const SiteExtra = styled.div`
  display: flex;
  align-items: center;

  .extraDetail {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }
`;

const ExtraDetailBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;

  &:hover {
    border-radius: 21px;
    background-color: rgb(239, 239, 239);
  }
`;

const ProfileBtn = styled.button`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 5px;
  padding-left: 12px;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 21px;

  &:hover {
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.2s ease;
  }
`;

const FormContainer = styled.form`
  display: flex;
  max-width: 850px;
  margin: 0 auto;

  label {
    padding: 10px 16px;
  }

  a {
    padding: 10px 16px;
  }
`;

const RoomSearch = styled.div`
  ${mixin.flexCenterAndSetJustify("space-around")}
  max-width: 850px;
  height: 66px;
  margin: 0 auto;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 32px;
`;

const SearchItem = styled.button`
  width: 100%;
  height: 100%;
  padding: 14px 24px;
  text-align: left;

  input {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  button {
    padding: 0;
    color: ${({ theme }) => theme.fontColorGray};
    text-align: left;
  }

  &:nth-of-type(4) {
    ${mixin.flexCenterAndSetJustify("space-between")}
  }

  &:hover {
    border-radius: 32px;
    background-color: rgb(239, 239, 239);
  }
`;

const ItemRightBorder = styled.div`
  border: ${({ theme }) => theme.borderSet};
  height: 32px;
`;

const ItemTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding-bottom: 2px;
`;

const OnClickedSection = styled.div`
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

const ReducedSearch = styled.button`
  ${mixin.flexCenterAndSetJustify("space-between")}
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
  width: 300px;
  height: 48px;
  margin: 0 auto;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 32px;
  background-color: ${({ theme }) => theme.backgroundColorWhite};

  .searchTxt {
    padding: 0 16px;
  }
`;

const SearchBtn = styled.button`
  position: relative;
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pinkColor};
`;

export default Nav;
