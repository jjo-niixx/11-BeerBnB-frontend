import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterModal from "./FilterModal/FilterModal";

export default function FilterToggle({ filterInfo, active, onClick }) {
  const [isRefundPolicyChedcked, setIsRefundPolicyChedcked] = useState(false);
  const [checkedRoomTypeList, setCheckedRoomTypeList] = useState([]);
  const [activeCleanBtnList, setActiveCleanBtnList] = useState([]);
  const { title, type } = filterInfo;

  useEffect(() => {
    const isOwnRefundPolicy = activeCleanBtnList.includes("refundPolicy");

    if (isRefundPolicyChedcked && !isOwnRefundPolicy) {
      setActiveCleanBtnList([...activeCleanBtnList, "refundPolicy"]);
    }
    if (!isRefundPolicyChedcked && isOwnRefundPolicy) {
      const newList = activeCleanBtnList.filter(
        (acitvebtn) => acitvebtn !== "refundPolicy"
      );

      setActiveCleanBtnList(newList);
    }
  }, [isRefundPolicyChedcked, activeCleanBtnList]);

  useEffect(() => {
    const isOwnRoomType = activeCleanBtnList.includes("roomType");

    if (checkedRoomTypeList.length > 0 && !isOwnRoomType) {
      setActiveCleanBtnList([...activeCleanBtnList, "roomType"]);
    }
    if (checkedRoomTypeList.length === 0 && isOwnRoomType) {
      const newList = activeCleanBtnList.filter(
        (acitvebtn) => acitvebtn !== "roomType"
      );

      setActiveCleanBtnList(newList);
    }
  }, [checkedRoomTypeList, activeCleanBtnList]);

  const onCheckRefundPolicy = () => {
    setIsRefundPolicyChedcked(!isRefundPolicyChedcked);
  };

  const roomTypeFilterHandler = (id) => {
    const idIndex = checkedRoomTypeList.indexOf(id);

    if (idIndex === -1) {
      setCheckedRoomTypeList([...checkedRoomTypeList, id]);
    } else {
      const checkedList = [...checkedRoomTypeList];
      checkedList.splice(idIndex, 1);

      setCheckedRoomTypeList(checkedList);
    }
  };

  const unCheckHandler = (name) => {
    switch (name) {
      case "유연한 환불 정책":
        setIsRefundPolicyChedcked(!isRefundPolicyChedcked);
        break;
      case "숙소 유형":
        setCheckedRoomTypeList([]);
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
              filterInfo={filterInfo}
              isRefundPolicyChedcked={isRefundPolicyChedcked}
              checkedRoomTypeList={checkedRoomTypeList}
              activeCleanBtnList={activeCleanBtnList}
              onCheckRefundPolicy={onCheckRefundPolicy}
              unCheckHandler={unCheckHandler}
              roomTypeFilterHandler={roomTypeFilterHandler}
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
