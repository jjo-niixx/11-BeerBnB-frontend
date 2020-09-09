import React from "react";
import { useGetItemData } from "../../hooks/useGetRoomsData";
import styled from "styled-components";
import MainContentsItems from "./MainContentsItems/MainContentsItems";
import ProductListMainFooter from "./ProductListMainFooter/ProductListMainFooter";
import MiniContents from "./MiniContents/MiniContents";
import mixin from "../../../../Styles/mixin";

export default function MainContents() {
  const { roomsInfo } = useGetItemData("roomsInfo");
  const { currentPage } = useGetItemData("currentPage");
  const { isMapOpen } = useGetItemData("isMapOpen");

  return (
    <article>
      <ContentsHeader>
        <WrapTripImg>
          <img
            width="40"
            height="40"
            alt=""
            src="https://a0.muscache.com/airbnb/static/packages/icon-uc-suitcase.2b1ee4bb.gif"
          />
        </WrapTripImg>
        <WrapTripDescription>
          <RemainingDayText>여행이 1일 남았습니다.</RemainingDayText>
          <FilterRecommend>
            지금 바로 예약할 수 있는 숙소를 보려면 즉시 예약 필터를 사용하세요.
          </FilterRecommend>
        </WrapTripDescription>
      </ContentsHeader>
      {roomsInfo.rooms_list?.map((roomInfo, index) =>
        isMapOpen ? (
          <MainContentsItems key={roomInfo.id + index} roomInfo={roomInfo} />
        ) : (
          <MiniContents key={roomInfo.id + index} roomInfo={roomInfo} />
        )
      )}
      <ProductListMainFooter currentPage={currentPage} roomsInfo={roomsInfo} />
    </article>
  );
}

const ContentsHeader = styled.div`
  ${mixin.flexSet("row", "flex-start")};
  padding: 20px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const WrapTripImg = styled.div`
  height: 45px;
`;

const WrapTripDescription = styled.div`
  display: flex;
  margin-left: 16px;
`;

const RemainingDayText = styled.div`
  margin-right: 8px;
  font-size: 14px;
  font-weight: bold;
`;

const FilterRecommend = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.fontColorGray};
`;
