import React from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";

export default function ModalBottom({
  isClearBtnOn,
  unCheckHandler,
  title,
  isOwnTitle,
}) {
  return (
    <BottomBox>
      <ButtonWrapper isClearBtnOn={isClearBtnOn}>
        {isClearBtnOn && (
          <CleanBtn
            onClick={() => unCheckHandler(title)}
            disabled={!isOwnTitle}
          >
            지우기
          </CleanBtn>
        )}
        <SaveBtn>저장</SaveBtn>
      </ButtonWrapper>
    </BottomBox>
  );
}

const BottomBox = styled.div`
  padding: 12px 14px;
`;

const ButtonWrapper = styled.div`
  ${({ isClearBtnOn }) =>
    isClearBtnOn
      ? mixin.flexSet("row", "space-between")
      : mixin.flexSet("row", "flex-end")};
  margin: 5px 0;
`;

const CleanBtn = styled.button`
  text-decoration: underline;
  font-size: 16px;
  font-weight: 600;
  padding: 0;

  &:disabled {
    opacity: 0.7;
    cursor: no-drop;
  }
`;

const SaveBtn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: rgb(34, 34, 34);
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
