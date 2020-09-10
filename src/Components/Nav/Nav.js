import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProfileDetail from "./Components/ProfileDetail";
import SearchBox from "../../Pages/Main/SearchBox/SearchBox";
import mixin from "../../Styles/mixin";
import NavSvg from "./NavSvg";

export default function Nav() {
  const { isLoginActive } = useSelector(
    ({ googleLogin: { isLoginActive } }) => ({
      isLoginActive: isLoginActive,
    })
  );

  const [profile, setProfile] = useState(false);

  const toggleProfile = () => {
    setProfile(!profile);
  };

  return (
    <NavContainer>
      <NavHeader>
        <Link to="/">{NavSvg.siteLogo}</Link>
        <FormContainer>
          <Link to="/productlist">
            <label>숙소</label>
          </Link>
          <Link to="/">
            <label>체험</label>
          </Link>
          <Link to="/">
            <label>온라인 체험</label>
          </Link>
        </FormContainer>
        <ReducedSearch>
          <SearchTxt>검색 시작하기</SearchTxt>
          <SearchBtn top="7px" right="8px" width="32px" height="32px">
            {NavSvg.searchBtnSmall}
          </SearchBtn>
        </ReducedSearch>
        <SiteExtra>
          <ExtraDetail>
            <ExtraBtn>호스트 되기</ExtraBtn>
            <ExtraBtn>
              {NavSvg.translation}
              {NavSvg.translationArrow}
            </ExtraBtn>
          </ExtraDetail>
          <ProfileBtn onClick={toggleProfile}>
            {NavSvg.PoppedProfileBtnStroke}
            {isLoginActive ? NavSvg.myProfile : NavSvg.PoppedProfileBtnPerson}
          </ProfileBtn>
          {profile && <ProfileDetail />}
        </SiteExtra>
      </NavHeader>
      <SearchBox />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  padding: 0 80px;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  z-index: 10010;

  a {
    color: ${({ theme }) => theme.fontColorBlack};
  }
`;

const NavHeader = styled.header`
  ${mixin.flexSet("row", "space-between")};
  position: relative;
  height: 80px;
`;

const SiteExtra = styled.div`
  display: flex;
  align-items: center;
`;

const ExtraDetail = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const ExtraBtn = styled.button`
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
  position: relative;
  left: 50px;
  label {
    padding: 10px 16px;
  }

  a {
    padding: 10px 16px;
  }
`;

const ReducedSearch = styled.button`
  ${mixin.flexSet("row", "space-between")}
  display: none;
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
`;

const SearchTxt = styled.div`
  padding: 0 16px;
`;

const SearchBtn = styled.div`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pinkColor};
`;
