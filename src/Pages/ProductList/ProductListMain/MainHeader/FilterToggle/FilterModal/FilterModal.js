import React from "react";
import useGetRoomsData from "../../../../hooks/useGetRoomsData";
import styled from "styled-components";
import ModalBottom from "./ModalBottom/ModalBottom";
import theme from "../../../../../../Styles/Theme";

export default function FilterModal({ filterInfo, index }) {
  const roomsData = useGetRoomsData();
  const { isRefundChecked, checkedRoomTypes, isInstantChecked } = roomsData;
  const { HeaderModal, isClearBtnOn, title } = filterInfo;
  const isOwnTitle = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        return isRefundChecked;
      case "숙소 유형":
        return checkedRoomTypes.length;
      case "즉시 예약":
        return isInstantChecked;
      default:
        return;
    }
  };

  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <HeaderBox>
        <HeaderModal />
      </HeaderBox>
      <ModalBottom
        title={title}
        index={index}
        isClearBtnOn={isClearBtnOn}
        isOwnTitle={isOwnTitle}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  z-index: 10000;
  min-width: 250px;
  border: ${theme.borderSet};
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
`;

const HeaderBox = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.15);
`;
