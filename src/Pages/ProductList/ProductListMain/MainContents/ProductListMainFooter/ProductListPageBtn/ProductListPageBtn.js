import React, { Component } from "react";
import styled from "styled-components";
import mixin from "../../../../../../Styles/mixin";

export default class ProductListPageBtn extends Component {
  render() {
    const { pageNum, pageNumClickedAt, gotoHandler } = this.props;
    const isPushed = pageNum === pageNumClickedAt;
    return (
      <PageBtnContainer
        isPushed={isPushed}
        onClick={() => gotoHandler("pageNum", pageNum)}
      >
        {pageNum}
      </PageBtnContainer>
    );
  }
}

const PageBtnContainer = styled.div`
  ${mixin.flexSet()};
  width: 32px;
  height: 32px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: ${({ isPushed }) => (isPushed ? "black" : "white")};
  color: ${({ isPushed }) => (isPushed ? "white" : "black")};
  cursor: ${({ isPushed }) => (isPushed ? "default" : "pointer")};

  &:hover {
    text-decoration: ${({ isPushed }) => (isPushed ? "none" : "underline")};
  }
`;
