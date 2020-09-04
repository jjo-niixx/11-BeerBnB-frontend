import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterModal from "./FilterModal/FilterModal";

export default function FilterToggle({
  filterInfo,
  active,
  index,
  onClick,
  updateCheckedList,
  checkedOptions,
  onFilterClick,
}) {
  const [isRefundChecked, setIsRefundChecked] = useState(false);
  const [checkedRoomTypeList, setCheckedRoomTypeList] = useState([]);
  const [activeCleanBtnList, setActiveCleanBtnList] = useState([]);
  const { title, type } = filterInfo;

  useEffect(() => {
    const isOwnRefund = activeCleanBtnList.includes("refundPolicy");

    if (isRefundChecked && !isOwnRefund) {
      setActiveCleanBtnList([...activeCleanBtnList, "refundPolicy"]);
    }
    if (!isRefundChecked && isOwnRefund) {
      const newList = activeCleanBtnList.filter(
        (acitvebtn) => acitvebtn !== "refundPolicy"
      );

      setActiveCleanBtnList(newList);
    }
  }, [isRefundChecked, activeCleanBtnList]);

  useEffect(() => {
    const isOwnRoomType = activeCleanBtnList.includes("roomType");
    const listLen = checkedRoomTypeList.length;

    if (listLen > 0 && !isOwnRoomType) {
      setActiveCleanBtnList([...activeCleanBtnList, "roomType"]);
    }
    if (listLen === 0 && isOwnRoomType) {
      const newList = activeCleanBtnList.filter(
        (acitvebtn) => acitvebtn !== "roomType"
      );

      setActiveCleanBtnList(newList);
    }
  }, [checkedRoomTypeList, activeCleanBtnList]);

  const onCheckRefundPolicy = () => {
    setIsRefundChecked(!isRefundChecked);
  };

  const roomTypeFilterHandler = (id) => {
    const isOwnId = checkedRoomTypeList.includes(id);

    setCheckedRoomTypeList(
      isOwnId
        ? checkedRoomTypeList.filter((checked) => checked !== id)
        : [...checkedRoomTypeList, id]
    );
  };

  const unCheckHandler = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        setIsRefundChecked(!isRefundChecked);
        break;
      case "숙소 유형":
        setCheckedRoomTypeList([]);
        break;
      default:
        break;
    }
  };

  const saveCheckedList = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        updateCheckedList({
          ...checkedOptions,
          refund: isRefundChecked ? "on" : "",
        });
        break;
      case "숙소 유형":
        updateCheckedList({
          ...checkedOptions,
          home_type: checkedRoomTypeList,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <FilterToggleBtn active={active} onClick={onClick}>
        {title}
      </FilterToggleBtn>
      {type === "MODAL" && (
        <ModalWrapper>
          {active && (
            <FilterModal
              index={index}
              filterInfo={filterInfo}
              isRefundChecked={isRefundChecked}
              checkedRoomTypeList={checkedRoomTypeList}
              activeCleanBtnList={activeCleanBtnList}
              onCheckRefundPolicy={onCheckRefundPolicy}
              unCheckHandler={unCheckHandler}
              roomTypeFilterHandler={roomTypeFilterHandler}
              saveCheckedList={saveCheckedList}
              onFilterClick={onFilterClick}
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
