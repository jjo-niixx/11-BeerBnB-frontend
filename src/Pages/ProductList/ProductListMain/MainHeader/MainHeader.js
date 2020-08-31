import React, { Component } from "react";
import styled from "styled-components";
import HeaderOption from "./HeaderOption/HeaderOption";
import RefundPolicyModal from "./HeaderOption/RefundPolicyModal/RefundPolicyModal";
import RoomsTypeModal from "./HeaderOption/RoomsTypeModal/RoomsTypeModal";
import PaymentModal from "./HeaderOption/PaymentModal/PaymentModal";
import BedroomModal from "./HeaderOption/BedroomModal/BedroomModal";

export default class MainHeader extends Component {
  render() {
    const { headerOptionClickedAt, gotoHandler } = this.props;
    return (
      <article>
        <StayPeriod>300개 이상의 숙소 · 9월 2일 - 9월 16일</StayPeriod>
        <StaySpotTitle>서울의 숙소</StaySpotTitle>
        <HeaderOptionContainer>
          {HEADER_OPTION_DATA.map((el, idx) => (
            <HeaderOption
              key={idx}
              data={el}
              index={idx}
              headerOptionClickedAt={headerOptionClickedAt}
              gotoHandler={gotoHandler}
            />
          ))}
        </HeaderOptionContainer>
      </article>
    );
  }
}

const StayPeriod = styled.div`
  font-size: 14px;
`;

const StaySpotTitle = styled.div`
  margin: 10px 0;
  font-size: 30px;
`;

const HeaderOptionContainer = styled.div`
  display: flex;
`;

const HEADER_OPTION_DATA = [
  { title: "유연한 환불 정책", HeaderModal: RefundPolicyModal },
  { title: "숙소 유형", HeaderModal: RoomsTypeModal },
  { title: "요금", HeaderModal: PaymentModal },
  { title: "침실과 침대", HeaderModal: BedroomModal },
  { title: "필터 추가하기" },
];
