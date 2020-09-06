import React from "react";
import styled from "styled-components";

function Title({ title, marginBottom }) {
  return <TitleName marginBottom={marginBottom}>{title}</TitleName>;
}

export default Title;

const TitleName = styled.h2`
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};
  font-size: 22px;
  font-weight: 600;
`;
