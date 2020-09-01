import React from "react";
import styled from "styled-components";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";

export default function ProductDetail() {
  return (
    <Main>
      <RoomIntroduce />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
