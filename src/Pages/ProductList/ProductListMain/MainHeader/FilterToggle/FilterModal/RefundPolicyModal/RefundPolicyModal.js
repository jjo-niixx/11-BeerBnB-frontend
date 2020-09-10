import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refundToggle } from "../../../../../../../modules/ProductList/productList";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import MovingButton from "../MovingButton/MovingButton";

export default function RefundPolicyModal() {
  const dispatch = useDispatch();
  const { isRefundChecked } = useSelector(
    ({ productList: { isRefundChecked } }) => ({
      isRefundChecked: isRefundChecked,
    })
  );
  const onRefundToggle = () => dispatch(refundToggle(!isRefundChecked));

  return (
    <CheckForRefundPolicy>
      <div>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</div>
      <MovingButton
        isChecked={isRefundChecked}
        onCheckHandler={onRefundToggle}
      />
    </CheckForRefundPolicy>
  );
}

const CheckForRefundPolicy = styled.div`
  ${mixin.flexSet()};
  width: 356px;
  padding: 12px 4px 20px 0;

  div {
    font-size: 14px;
    font-weight: 400;
  }
`;
