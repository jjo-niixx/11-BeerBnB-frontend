import React, { useState } from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import ProductListSvg from "../../../../../SVG/ProductListSvg";

export default function MovingButton({ onCheckHandler, isChecked }) {
  const [isItemFocused, setIsItemFocused] = useState(false);

  return (
    <CheckBtnBox onClick={onCheckHandler} isItemFocused={isItemFocused}>
      <BtnWrapper
        isChecked={isChecked}
        onFocus={() => setIsItemFocused(!isItemFocused)}
        onBlur={() => setIsItemFocused(!isItemFocused)}
      >
        <CircleBtn isChecked={isChecked}>
          {isChecked && ProductListSvg.checkedImg}
        </CircleBtn>
      </BtnWrapper>
    </CheckBtnBox>
  );
}

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
  ${({ isChecked }) =>
    isChecked
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
  ${({ isChecked }) => (isChecked ? "transform: translateX(15px);" : "")}
`;
