import React, { Component } from "react";
import styled from "styled-components";

export default class MainItemImgSlide extends Component {
  render() {
    return <ImgSlideContainer></ImgSlideContainer>;
  }
}

const ImgSlideContainer = styled.div`
  min-width: 300px;
  height: 200px;
  border: 1px solid gray;
  border-radius: 8px;
  background-color: gray;
  overflow: hidden;
`;
