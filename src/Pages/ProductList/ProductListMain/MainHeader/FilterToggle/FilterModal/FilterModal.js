import React from "react";
import styled from "styled-components";
import ModalBottom from "./ModalBottom/ModalBottom";
import theme from "../../../../../../Styles/Theme";

export default function FilterModal({
  filterInfo,
  isRefundPolicyChedcked,
  onCheckRefundPolicy,
  checkedRoomTypeList,
  roomTypeFilterHandler,
  unCheckHandler,
  activeCleanBtnList,
}) {
  const { HeaderModal, isClearBtnOn, title, id } = filterInfo;
  const isOwnTitle = activeCleanBtnList.includes(id);

  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <HeaderBox>
        <HeaderModal
          onCheckRefundPolicy={onCheckRefundPolicy}
          isRefundPolicyChedcked={isRefundPolicyChedcked}
          checkedRoomTypeList={checkedRoomTypeList}
          roomTypeFilterHandler={roomTypeFilterHandler}
        />
      </HeaderBox>
      <ModalBottom
        title={title}
        unCheckHandler={unCheckHandler}
        isRefundPolicyChedcked={isRefundPolicyChedcked}
        isClearBtnOn={isClearBtnOn}
        isOwnTitle={isOwnTitle}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  z-index: 100;
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
