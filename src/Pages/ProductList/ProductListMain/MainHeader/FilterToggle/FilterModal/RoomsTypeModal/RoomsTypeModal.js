import React from "react";
import styled from "styled-components";
import ProductListSvg from "../../../../../ProductListSvg/ProductListSvg";
import mixin from "../../../../../../../Styles/mixin";

export default function RoomsTypeModal({
  checkedRoomTypeList,
  roomTypeFilterHandler,
}) {
  return (
    <>
      {ROOMS_TYPE_LIST.map((rooms) => {
        const { id, roomsType, description } = rooms;
        const isChecked = checkedRoomTypeList.includes(id);

        return (
          <CheckBoxContainer key={id} onClick={() => roomTypeFilterHandler(id)}>
            <CheckBox isChecked={isChecked}>
              {isChecked && ProductListSvg.whiteCheckedImg}
            </CheckBox>
            <ContentsWrapper>
              <RoomsType>{roomsType}</RoomsType>
              <Description>{description}</Description>
            </ContentsWrapper>
          </CheckBoxContainer>
        );
      })}
    </>
  );
}

const ROOMS_TYPE_LIST = [
  {
    id: "entire_house",
    roomsType: "집 전체",
    description: "집 전체를 단독으로 사용합니다",
  },
  {
    id: "private_room",
    roomsType: "개인실",
    description:
      "침실은 단독으로 쓰고, 이외의 공간은 호스트나 다른 게스트와 함께 이용할 수도 있습니다.",
  },
  {
    id: "guest_room",
    roomsType: "호텔 객실",
    description: "부티크 호텔, 호스텔 등의 개인실이나 다인실을 이용합니다",
  },
  {
    id: "sharedRoom",
    roomsType: "다인실",
    description:
      "사적 공간 없이, 침실이나 욕실 등을 호스트나 다른 게스트와 함께 이용합니다",
  },
];

const CheckBox = styled.button`
  ${mixin.flexSet()}
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border: 1px solid rgb(176, 176, 176);
  border-radius: 4px;
  color: white;
  ${({ isChecked }) =>
    isChecked
      ? `
      background-color: black;
      border: 1px solid black;
      `
      : ""}
`;

const CheckBoxContainer = styled.div`
  ${mixin.flexSet("row", "flex-start")}
  width: 356px;
  padding: 12px 0 12px 4px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    ${CheckBox} {
      border-color: black;
    }
  }
`;

const ContentsWrapper = styled.div`
  padding: 0 8px 0 12px;
`;

const RoomsType = styled.div`
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 16px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
