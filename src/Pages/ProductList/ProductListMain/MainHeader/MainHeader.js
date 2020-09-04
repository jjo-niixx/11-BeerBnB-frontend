import React from "react";
import styled from "styled-components";
import FilterToggle from "./FilterToggle/FilterToggle";
import RefundPolicyModal from "./FilterToggle/FilterModal/RefundPolicyModal/RefundPolicyModal";
import RoomsTypeModal from "./FilterToggle/FilterModal/RoomsTypeModal/RoomsTypeModal";
import PaymentModal from "./FilterToggle/FilterModal/PaymentModal/PaymentModal";
import BedroomModal from "./FilterToggle/FilterModal/BedroomModal/BedroomModal";

export default function MainHeader({
  activeFilterIndex,
  onFilterClick,
  updateCheckedList,
  checkedOptions,
}) {
  return (
    <article>
      <StayPeriod>300개 이상의 숙소 · 9월 2일 - 9월 16일</StayPeriod>
      <StaySpotTitle>서울의 숙소</StaySpotTitle>
      <HeaderOptionContainer>
        {FILTER_INFO_LIST.map((filterInfo, index) => {
          const isActiveFilter = index === activeFilterIndex;

          return (
            <FilterToggle
              key={index}
              filterInfo={filterInfo}
              active={isActiveFilter}
              index={index}
              onClick={(e) => onFilterClick(e, index)}
              updateCheckedList={updateCheckedList}
              checkedOptions={checkedOptions}
              onFilterClick={onFilterClick}
            />
          );
        })}
      </HeaderOptionContainer>
    </article>
  );
}

const StayPeriod = styled.div`
  font-size: 14px;
`;

const StaySpotTitle = styled.div`
  margin: 10px 0;
  font-size: 30px;
`;

const HeaderOptionContainer = styled.div`
  display: flex;
`;

const FILTER_INFO_LIST = [
  {
    id: "refundPolicy",
    title: "유연한 환불 정책",
    type: "MODAL",
    HeaderModal: RefundPolicyModal,
    isClearBtnOn: true,
  },
  {
    id: "roomType",
    title: "숙소 유형",
    type: "MODAL",
    HeaderModal: RoomsTypeModal,
    isClearBtnOn: true,
  },
  {
    id: "payMent",
    title: "요금",
    type: "MODAL",
    HeaderModal: PaymentModal,
    isClearBtnOn: true,
  },
  {
    id: "bedRoom",
    title: "침실과 침대",
    type: "MODAL",
    HeaderModal: BedroomModal,
    isClearBtnOn: false,
  },
  { id: "addFilter", title: "필터 추가하기", type: "POPUP" },
];
