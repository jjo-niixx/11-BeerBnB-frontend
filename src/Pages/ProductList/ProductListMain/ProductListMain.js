import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader/MainHeader";
import MainContents from "./MainContents/MainContents";

export default function ProductListMain({ isMapOpen }) {
  return (
    <MainContainer isMapOpen={isMapOpen}>
      <MainHeader />
      <MainContents />
    </MainContainer>
  );
}

const MainContainer = styled.section`
  @media (min-width: 1128px) {
    width: ${({ isMapOpen }) => (isMapOpen ? "840px" : "100%")};
    padding: 50px 20px 32px;
  }

  @media (min-width: 744px) {
    min-width: 547px;
  }
`;
