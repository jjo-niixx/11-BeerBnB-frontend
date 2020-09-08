import React from "react";
import styled, { css } from "styled-components";
import mixin from "../../../../../../Styles/mixin";

function Fee({ title, price: { serviceFee, nightsFee } }) {
  return (
    <Container>
      <div>{title}</div>
      <div>
        {title === "서비스 수수료" ? `₩ ${serviceFee}` : `₩ ${nightsFee}`}
      </div>
    </Container>
  );
}

export default Fee;

const Container = styled.div`
  ${mixin.flexSet("row", "space-between")};
  margin-top: 24px;
  padding: 0 10px;
  font-size: 16px;
  font-weight: 300;
  ${({ theme }) => css`
    color: ${theme.fontColorBlack};
  `};

  div:first-child {
    text-decoration: underline;
  }
`;
