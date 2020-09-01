import React, { Component } from "react";
import styled from "styled-components";

export default class HeaderOption extends Component {
  render() {
    const {
      data: { title, HeaderModal },
      headerOptionClickedAt,
      index,
      gotoHandler,
    } = this.props;
    const isPushed = headerOptionClickedAt === index;
    return (
      <div>
        <OptionTitle
          isPushed={isPushed}
          onClick={() => gotoHandler("headerOption", index)}
        >
          {title}
        </OptionTitle>
        <div>{isPushed && headerOptionClickedAt !== 4 && <HeaderModal />}</div>
      </div>
    );
  }
}

const OptionTitle = styled.div`
  padding: 10px 15px;
  margin: 10px;
  margin-left: 0;
  border: 1px solid ${({ isPushed }) => (isPushed ? "black" : "#b2b2b2")};
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    border-color: black;
  }
`;
