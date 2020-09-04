import React from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import MovingButton from "../MovingButton/MovingButton";

export default function RefundPolicyModal({
  onCheckRefundPolicy,
  isRefundChecked,
}) {
  return (
    <CheckForRefundPolicy>
      <div>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</div>
      <MovingButton
        onCheckHandler={onCheckRefundPolicy}
        isChecked={isRefundChecked}
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
