import React, { Component } from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader/MainHeader";
import MainContents from "./MainContents/MainContents";

export default class ProductListMain extends Component {
  render() {
    const { headerOptionClickedAt, gotoHandler, pageNumClickedAt } = this.props;
    return (
      <MainContainer>
        <MainHeader
          headerOptionClickedAt={headerOptionClickedAt}
          gotoHandler={gotoHandler}
        />
        <MainContents
          pageNumClickedAt={pageNumClickedAt}
          gotoHandler={gotoHandler}
        />
      </MainContainer>
    );
  }
}

const MainContainer = styled.section`
  width: 100%;
  padding: 0 20px;
`;
