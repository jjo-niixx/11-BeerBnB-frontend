import React from "react";
import styled from "styled-components";
import ModalBottom from "./ModalBottom/ModalBottom";
import theme from "../../../../../../Styles/Theme";

export default function FilterModal({
  filterInfo,
  isItemChecked,
  isItemFocused,
  onCheckItem,
  onFocusItem,
}) {
  const { HeaderModal, isClearBtnOn } = filterInfo;

  return (
    <ModalContainer onClick={(e) => e.stopPropagation()}>
      <HeaderBox>
        <HeaderModal
          onCheckItem={onCheckItem}
          onFocusItem={onFocusItem}
          isItemChecked={isItemChecked}
          isItemFocused={isItemFocused}
        />
      </HeaderBox>
      <ModalBottom
        checkHandler={onCheckItem}
        isItemChecked={isItemChecked}
        isClearBtnOn={isClearBtnOn}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  position: absolute;
  width: 360px;
  border: ${theme.borderSet};
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
`;

const HeaderBox = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(118, 118, 118, 0.15);
`;
