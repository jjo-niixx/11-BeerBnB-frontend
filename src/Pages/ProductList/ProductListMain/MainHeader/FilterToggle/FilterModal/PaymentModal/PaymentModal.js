import React from "react";
import styled from "styled-components";
import MinMaxPrice from "./MinMaxPrice/MinMaxPrice";
import mixin from "../../../../../../../Styles/mixin";

export default function PaymentModal() {
  return (
    <PaymentFilter>
      <Description>평균 1박 요금은 ₩108,184입니다</Description>
      <div>
        <div>
          <img alt="payment" src="/Images/ProductList/payment.png" />
        </div>
        <PriceRange>
          <MinMaxPrice title="최저요금" initialNum="12000" />
          <span />
          <MinMaxPrice title="최고요금" initialNum="100000" />
        </PriceRange>
      </div>
    </PaymentFilter>
  );
}

const PaymentFilter = styled.div`
  padding-top: 10px;
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.fontColorGray};
  margin-bottom: 20px;
`;

const PriceRange = styled.div`
  ${mixin.flexSet()}
  padding: 0 10px;

  span {
    width: 8px;
    height: 1px;
    background-color: black;
  }
`;
