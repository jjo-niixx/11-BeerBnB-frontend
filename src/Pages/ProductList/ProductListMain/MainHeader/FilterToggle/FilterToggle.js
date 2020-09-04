import React, { useState } from "react";
import styled from "styled-components";
import FilterModal from "./FilterModal/FilterModal";

export default function FilterToggle({ filterInfo, active, onClick }) {
  const [isItemChecked, setIsItemChecked] = useState(false);
  const [isItemFocused, setIsItemFocused] = useState(false);

  const onCheckItem = () => {
    setIsItemChecked(!isItemChecked);
  };

  const onFocusItem = () => {
    setIsItemFocused(!isItemFocused);
  };

  return (
    <div>
      <FilterToggleBtn active={active} onClick={onClick}>
        {filterInfo.title}
      </FilterToggleBtn>
      {filterInfo.type === "MODAL" && (
        <ModalWrapper>
          {active && (
            <FilterModal
              filterInfo={filterInfo}
              isItemChecked={isItemChecked}
              isItemFocused={isItemFocused}
              onCheckItem={onCheckItem}
              onFocusItem={onFocusItem}
            />
          )}
        </ModalWrapper>
      )}
    </div>
  );
}

const FilterToggleBtn = styled.button`
  padding: 10px 15px;
  margin: 10px;
  margin-left: 0;
  border: 1px solid #b2b2b2;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  ${({ active }) =>
    active
      ? `
      border: 1px solid black;
      background-color: rgb(247, 247, 247);
      box-shadow: 0 0 0 1px black inset;
  `
      : `
        &:hover {
          border-color: black;
          }
      `}
`;

const ModalWrapper = styled.div`
  position: relative;
`;
