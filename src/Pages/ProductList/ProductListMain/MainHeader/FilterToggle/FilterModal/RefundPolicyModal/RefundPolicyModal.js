import React, { useState } from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import ProductListSvg from "../../../../../ProductListSvg/ProductListSvg";

export default function RefundPolicyModal({
  onCheckRefundPolicy,
  isRefundChecked,
}) {
  const [isItemFocused, setIsItemFocused] = useState(false);

  const onFocusItem = () => {
    setIsItemFocused(!isItemFocused);
  };

  return (
    <CheckForRefundPolicy>
      <div>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</div>
      <CheckBtnBox onClick={onCheckRefundPolicy} isItemFocused={isItemFocused}>
        <BtnWrapper
          isRefundChecked={isRefundChecked}
          onFocus={onFocusItem}
          onBlur={onFocusItem}
        >
          <CircleBtn isRefundChecked={isRefundChecked}>
            {isRefundChecked && ProductListSvg.checkedImg}
          </CircleBtn>
        </BtnWrapper>
      </CheckBtnBox>
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

const CheckBtnBox = styled.div`
  width: 60px;
  height: 40px;
  margin-left: 25px;
  padding: 2px;
  border: 2px solid
    ${({ isItemFocused }) => (isItemFocused ? "black" : "white")};
  border-radius: 30px;
`;

const BtnWrapper = styled.button`
  ${mixin.flexSet("row", "flex-start")}
  position: relative;
  width: 48px;
  height: 32px;
  border-radius: 32px;
  background: rgb(176, 176, 176);
  border: 2px solid rgb(176, 176, 176);
  ${({ isRefundChecked }) =>
    isRefundChecked
      ? ` 
      background: rgb(4, 4, 4);
      border: 2px solid rgb(4, 4, 4);`
      : `
        &:hover {
          border: 2px solid rgb(118, 118, 118);
          background-color: rgb(118, 118, 118);
        }`}
`;

const CircleBtn = styled.div`
  ${mixin.flexSet()}
  position: absolute;
  left: 1px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: white;
  transition: transform 400ms;
  ${({ isRefundChecked }) =>
    isRefundChecked ? "transform: translateX(15px);" : ""}
`;
