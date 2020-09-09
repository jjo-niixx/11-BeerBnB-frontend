import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterToggle,
  getRoomsInfo,
  mapOpenToggle,
} from "../../modules/ProductList/productList";
import { useGetItemData } from "./hooks/useGetRoomsData";
import styled, { keyframes } from "styled-components";
import ProductListMain from "./ProductListMain/ProductListMain";
import AsideMap from "./AsideMap/AsideMap";
import { productListAPI } from "../../config";
import ProductListSvg from "./SVG/ProductListSvg";
import mixin from "../../Styles/mixin";

export default function ProductList() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { checkedOptions } = useGetItemData("checkedOptions");
  const { currentPage } = useGetItemData("currentPage");
  const { isMapOpen } = useGetItemData("isMapOpen");

  useEffect(() => {
    fetchData();
  }, [checkedOptions, currentPage]);

  async function fetchData() {
    const isRefundChecked = checkedOptions.refund?.length;
    const homeTypeList = ["entire_house", "guest_room", "private_room"];

    window.scrollTo({ top: 0 });

    setLoading(true);
    await fetch(
      `${productListAPI}/rooms?${
        isRefundChecked ? `refund="${checkedOptions.refund}"&` : ""
      }${homeTypeList
        .map((homeType) =>
          checkedOptions.home_type.includes(homeType)
            ? `home_type=${homeType}&`
            : ""
        )
        .join("")}limit=10&offset=${(currentPage - 1) * 10}`
    )
      .then((res) => res.json())
      .then((res) => dispatch(getRoomsInfo(res)));
    setLoading(false);
  }

  return (
    <div onClick={() => dispatch(filterToggle(null))}>
      <SpaceForNav />
      <ProductListWrap>
        <ProductListMain isMapOpen={isMapOpen} />
        {isMapOpen && (
          <MapContainer>
            <AsideMap />
          </MapContainer>
        )}
        {!isMapOpen && (
          <OpenMapButton
            onClick={(e) => {
              if (!e.target) return;
              dispatch(mapOpenToggle(true));
            }}
          >
            <span>{ProductListSvg.mapImg}</span>지도 표시하기
          </OpenMapButton>
        )}
      </ProductListWrap>
      {loading && (
        <LoadingWrapper>
          <div>
            <img alt="loadingImg" src="/Images/ProductList/pizza.png" />
          </div>
        </LoadingWrapper>
      )}
    </div>
  );
}

const SpaceForNav = styled.div`
  height: 150px;
`;

const ProductListWrap = styled.main`
  display: flex;
  position: relative;
`;

const MapContainer = styled.aside`
  @media (min-width: 1128px) {
    position: sticky;
    top: 150px;
    flex: 1;
    height: calc(100vh - 150px);
  }

  @media (max-width: 1128px) {
    display: none;
  }
`;

const OpenMapButton = styled.button`
  position: absolute;
  top: 150px;
  right: 50px;
  ${mixin.flexSet}
  padding: 13px 10px;
  border-radius: 10px;
  font-size: 14px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  span {
    margin-right: 10px;
  }
`;

const rolling = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100000000;
  background-color: rgba(0, 0, 0, 0.3);

  div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      width: 300px;
      height: 300px;
      animation: ${rolling} 800ms infinite linear;
    }
  }
`;
