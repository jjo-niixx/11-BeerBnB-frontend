import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterToggle,
  getRoomsInfo,
} from "../../modules/ProductList/productList";
import styled from "styled-components";
import ProductListMain from "./ProductListMain/ProductListMain";
import AsideMap from "./AsideMap/AsideMap";
import { productListAPI } from "../../config";

export default function ProductList() {
  const dispatch = useDispatch();
  const { checkedOptions, currentPage } = useSelector(
    ({ productList: { checkedOptions, currentPage } }) => ({
      checkedOptions: checkedOptions,
      currentPage: currentPage,
    })
  );

  useEffect(() => {
    const isRefundChecked = checkedOptions.refund?.length;
    const homeTypeList = ["entire_house", "guest_room", "private_room"];

    fetch(
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

    window.scrollTo({ top: 0 });
  }, [checkedOptions, currentPage]);

  return (
    <div onClick={() => dispatch(filterToggle(null))}>
      <SpaceForNav />
      <ProductListWrap>
        <ProductListMain />
        <div>
          <AsideMap />
        </div>
      </ProductListWrap>
    </div>
  );
}

const SpaceForNav = styled.div`
  height: 150px;
`;

const ProductListWrap = styled.main`
  display: flex;
`;
