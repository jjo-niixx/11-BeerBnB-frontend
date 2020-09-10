import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader/MainHeader";
import MainContents from "./MainContents/MainContents";

export default function ProductListMain() {
  return (
    <>
      <MainContainer>
        <MainHeader />
        <MainContents />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.section`
  width: 100%;
  padding: 50px 20px 32px;
`;
