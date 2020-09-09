import React from "react";
import { useDispatch } from "react-redux";
import { useGetItemData } from "../../hooks/useGetRoomsData";
import { changeLabel } from "../../../../modules/ProductList/productList";
import styled from "styled-components";
import ContentModal from "./ContentModal/ContentModal";
import mixin from "../../../../Styles/mixin";

export default function LabelContent({ newPrice, roomData }) {
  const dispatch = useDispatch();
  const { clickedMapLabel } = useGetItemData("clickedMapLabel");
  const { hoveredAt } = useGetItemData("hoveredAt");
  const { id } = roomData;
  const isClicked = clickedMapLabel === id;
  const isHovered = hoveredAt === id;

  return (
    <ContentWrapper>
      {isClicked && (
        <ContentModal
          isClicked={isClicked}
          roomData={roomData}
          newPrice={newPrice}
        />
      )}
      <LabelStyles
        onClick={(e) => {
          if (!e.target) return;
          dispatch(changeLabel(isClicked ? null : id));
          e.stopPropagation();
        }}
        isClicked={isClicked}
        isHovered={isHovered}
      >
        {newPrice}
      </LabelStyles>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  position: relative;
`;

const LabelStyles = styled.button`
  ${mixin.flexSet};
  position: relative;
  padding: 6px 8px;
  border-radius: 30px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  font-weight: 500;
  z-index: 100;
  transition: all 300ms;
  ${({ isClicked, isHovered }) =>
    isClicked || isHovered
      ? `
      background-color: black;
      color: white;
      transform: scale(1.1);
      z-index: 1000000;
      `
      : `
      background-color: white;
        &:hover {
          position: absolute;
          transform: scale(1.1);
          z-index: 10000;
        }
    `}
`;
