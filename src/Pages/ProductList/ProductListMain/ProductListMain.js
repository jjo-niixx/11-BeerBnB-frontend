import React, { Component } from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader/MainHeader";
import MainContents from "./MainContents/MainContents";

export default class ProductListMain extends Component {
  render() {
    const {
      activeFilterIndex,
      onFilterClick,
      currentPage,
      onChangePage,
    } = this.props;
    return (
      <MainContainer>
        <MainHeader
          activeFilterIndex={activeFilterIndex}
          onFilterClick={onFilterClick}
        />
        <MainContents currentPage={currentPage} onChangePage={onChangePage} />
      </MainContainer>
    );
  }
}

const MainContainer = styled.section`
  width: 100%;
  padding: 50px 20px 32px;
`;
