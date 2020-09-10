import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  filterToggle,
  refundToggle,
  updateCheckedList,
  updateCheckedTypes,
} from "../../../../../../../modules/ProductList/productList";
import mixin from "../../../../../../../Styles/mixin";

export default function ModalBottom({ isClearBtnOn, title, isOwnTitle }) {
  const dispatch = useDispatch();
  const { isRefundChecked, checkedOptions, checkedRoomTypes } = useSelector(
    ({
      productList: { isRefundChecked, checkedOptions, checkedRoomTypes },
    }) => ({
      isRefundChecked: isRefundChecked,
      checkedOptions: checkedOptions,
      checkedRoomTypes: checkedRoomTypes,
    })
  );

  const onUpdateChecked = (checkedList) =>
    dispatch(updateCheckedList(checkedList));

  const unCheckHandler = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        dispatch(refundToggle(!isRefundChecked));
        break;
      case "숙소 유형":
        dispatch(updateCheckedTypes([]));
        break;
      default:
        break;
    }
  };

  const saveCheckedList = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        onUpdateChecked({
          ...checkedOptions,
          refund: isRefundChecked ? "on" : "",
        });
        break;
      case "숙소 유형":
        onUpdateChecked({
          ...checkedOptions,
          home_type: checkedRoomTypes,
        });
        break;
      default:
        break;
    }
  };

  return (
    <BottomBox>
      <ButtonWrapper isClearBtnOn={isClearBtnOn}>
        {isClearBtnOn && (
          <CleanBtn
            onClick={() => unCheckHandler(title)}
            disabled={!isOwnTitle(title)}
          >
            지우기
          </CleanBtn>
        )}
        <SaveBtn
          onClick={(e) => {
            e.stopPropagation();
            saveCheckedList(title);
            dispatch(filterToggle([]));
          }}
        >
          저장
        </SaveBtn>
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
