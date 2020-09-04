import React from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import ProductListSvg from "../../../../../ProductListSvg/ProductListSvg";

export default function RefundPolicyModal({
  onCheckItem,
  onFocusItem,
  isItemChecked,
  isItemFocused,
}) {
  return (
    <HeadWrapper>
      <div>유연한 환불 정책을 제공하는 숙소만 검색 결과에 표시</div>
      <HeadBtnBox onClick={onCheckItem} isItemFocused={isItemFocused}>
        <BtnBack
          isItemChecked={isItemChecked}
          onFocus={onFocusItem}
          onBlur={onFocusItem}
        >
          <CircleBtn isItemChecked={isItemChecked}>
            {isItemChecked && ProductListSvg.checkedImg}
          </CircleBtn>
        </BtnBack>
      </HeadBtnBox>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.div`
  ${mixin.flexSet()};
  padding: 12px 4px 20px 0;

  div {
    font-size: 14px;
    font-weight: 400;
  }
`;

const HeadBtnBox = styled.div`
  width: 65px;
  height: 40px;
  margin-left: 25px;
  padding: 2px;
  border: 2px solid
    ${({ isItemFocused }) => (isItemFocused ? "black" : "white")};
  border-radius: 30px;
`;

const BtnBack = styled.button`
  ${mixin.flexSet("row", "flex-start")}
  position: relative;
  width: 48px;
  height: 32px;
  border-radius: 32px;
  background: rgb(176, 176, 176);
  border: 2px solid rgb(176, 176, 176);
  ${({ isItemChecked }) =>
    isItemChecked
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
  ${({ isItemChecked }) =>
    isItemChecked ? "transform: translateX(15px);" : ""}
`;
