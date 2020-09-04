import React, { useState } from "react";
import styled from "styled-components";
import ProductListMain from "./ProductListMain/ProductListMain";
import AsideMap from "./AsideMap/AsideMap";

function ProductList() {
  const [activeFilterIndex, setActiveFilterIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onFilterClick = (e, idx) => {
    // 현재 active 상태인 토글을 다시 클릭하면 끄도록 처리함
    setActiveFilterIndex(activeFilterIndex === idx ? null : idx);
    e.stopPropagation();
  };

  const onChangePage = (idx) => {
    if (currentPage === idx) return;
    setCurrentPage(idx);
  };

  return (
    <div onClick={() => setActiveFilterIndex(null)}>
      <SpaceForNav />
      <ProductListWrap>
        <ProductListMain
          activeFilterIndex={activeFilterIndex}
          currentPage={currentPage}
          onFilterClick={onFilterClick}
          onChangePage={onChangePage}
        />
        <AsideMap />
      </ProductListWrap>
    </div>
  );
}

export default ProductList;

const SpaceForNav = styled.div`
  height: 80px;
`;

const ProductListWrap = styled.main`
  display: flex;
`;
