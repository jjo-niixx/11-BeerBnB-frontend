import React from "react";
import { useDispatch } from "react-redux";
import { filterToggle } from "../../../../../modules/ProductList/productList";
import { useGetItemData } from "../../../hooks/useGetRoomsData";
import styled from "styled-components";
import FilterModal from "./FilterModal/FilterModal";

export default function FilterToggle({ filterInfo, index }) {
  const dispatch = useDispatch();
  const { activeFilter } = useGetItemData("activeFilter");

  const onFilterToggle = (index) => dispatch(filterToggle(index));

  const { title, type } = filterInfo;
  const active = index === activeFilter;

  return (
    <div>
      <FilterToggleBtn
        active={active}
        onClick={(e) => {
          e.stopPropagation();
          if (active) onFilterToggle(null);
          else onFilterToggle(index);
        }}
      >
        {title}
      </FilterToggleBtn>
      {type === "MODAL" && (
        <ModalWrapper>
          {active && <FilterModal index={index} filterInfo={filterInfo} />}
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
