import React from "react";
import styled, { keyframes } from "styled-components";
import Svg from "../SVG/ProductDetailSvg";

function Spinner() {
  return <Container>{Svg.spinner}</Container>;
}

export default Spinner;

const spin = keyframes`
 from {
   transform: rotate(0deg);
 }
 to {
   transform: rotate(360deg);
 }
`;

const Container = styled.div`
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    z-index: 999;
    animation: ${spin} 800ms infinite linear;
  }
`;
