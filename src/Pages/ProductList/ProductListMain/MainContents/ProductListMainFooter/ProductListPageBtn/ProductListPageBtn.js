import React, { Component } from "react";
import styled from "styled-components";
import mixin from "../../../../../../Styles/mixin";

export default class ProductListPageBtn extends Component {
  render() {
    const { onClick, pageNum, active } = this.props;
    return (
      <PageBtnContainer active={active} onClick={onClick}>
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
  background-color: ${({ active }) => (active ? "black" : "white")};
  color: ${({ active }) => (active ? "white" : "black")};
  cursor: ${({ active }) => (active ? "default" : "pointer")};

  &:hover {
    text-decoration: ${({ active }) => (active ? "none" : "underline")};
  }
`;
