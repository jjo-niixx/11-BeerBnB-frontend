import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader/MainHeader";
import MainContents from "./MainContents/MainContents";
import AsideMap from "./AsideMap/AsideMap";
import { productListAPI } from "../../../config";

export default function ProductListMain({ activeFilterIndex, onFilterClick }) {
  const [roomsInfoList, setRoomsInfoList] = useState([]);
  const [checkedOptions, setCheckedOptions] = useState({
    refund: "",
    home_type: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const isRefundChecked = checkedOptions.refund?.length;
    const homeTypeList = ["entire_house", "guest_room", "private_room"];

    fetch(
      `${productListAPI}/rooms?${
        isRefundChecked ? `refund="${checkedOptions.refund}"&` : ""
      }${homeTypeList.map((homeType) =>
        checkedOptions.home_type.includes(homeType)
          ? `home_type=${homeType}&`
          : ""
      )}limit=10&offset=${(currentPage - 1) * 10}`
    )
      .then((res) => res.json())
      .then((res) => setRoomsInfoList(res));
  }, [checkedOptions, currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [roomsInfoList]);

  const onChangePage = (idx) => {
    if (currentPage === idx) return;
    setCurrentPage(idx);
  };

  const updateCheckedList = (list) => {
    setCheckedOptions(list);
  };

  return (
    <>
      <MainContainer>
        <MainHeader
          activeFilterIndex={activeFilterIndex}
          onFilterClick={onFilterClick}
          checkedOptions={checkedOptions}
          updateCheckedList={updateCheckedList}
        />
        <MainContents
          currentPage={currentPage}
          roomsInfoList={roomsInfoList}
          onChangePage={onChangePage}
        />
      </MainContainer>
      <AsideMap />
    </>
  );
}

const MainContainer = styled.section`
  width: 100%;
  padding: 50px 20px 32px;
`;
