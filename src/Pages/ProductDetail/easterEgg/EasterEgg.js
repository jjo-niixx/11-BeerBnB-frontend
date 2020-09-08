import React from "react";
import styled from "styled-components";
import useBooking from "../hooks/useBooking";
import Title from "../ProductDetailComponent/Title";
import mixin from "../../../Styles/mixin";

function EasterEgg() {
  const [bookingStat, attempBooking, _, cancelBooking] = useBooking();
  return (
    <Container onClick={cancelBooking}>
      <Title
        marginBottom="30px"
        title={"다들 프로젝트 기간 고생 많으셨습니다!!"}
      />
      <img src="/Images/ProductDetail/BeerBnB.JPG" alt="Beer BnB Good" />
    </Container>
  );
}

export default EasterEgg;

const Container = styled.picture`
  ${mixin.flexSet("column")}
  position: fixed;
  top: 150px;
  height: calc(100vh - 150px);
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 9999999999999;
  h2 {
    color: #ff385c;
    font-size: 50px;
    font-weight: ${({ theme }) => theme.fontBold};
  }
  img {
    width: 80vw;
    height: 80vh;
    object-fit: cover;
  }
`;
