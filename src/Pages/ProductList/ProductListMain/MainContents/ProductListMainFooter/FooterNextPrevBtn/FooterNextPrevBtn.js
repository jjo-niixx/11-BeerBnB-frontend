import React, { Component } from "react";
import styled from "styled-components";
import mixin from "../../../../../../Styles/mixin";

export default class FooterNextPrevBtn extends Component {
  render() {
    const { btnSvg, onClick } = this.props;
    return (
      <BtnSvgContainer onClick={onClick}>
        <WrapBtnSvg>{btnSvg}</WrapBtnSvg>
      </BtnSvgContainer>
    );
  }
}

const BtnSvgContainer = styled.button`
  ${mixin.flexSet()};
  width: 32px;
  height: 32px;
  margin: 0 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 300ms, background-color 300ms;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const WrapBtnSvg = styled.span`
  width: 16px;
  height: 16px;
`;
