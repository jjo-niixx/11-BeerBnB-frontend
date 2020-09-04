import React, { useState } from "react";
import styled from "styled-components";
import ProductListMain from "./ProductListMain/ProductListMain";

function ProductList() {
  const [activeFilterIndex, setActiveFilterIndex] = useState(null);

  const onFilterClick = (e, idx) => {
    // 현재 active 상태인 토글을 다시 클릭하면 끄도록 처리함
    setActiveFilterIndex(activeFilterIndex === idx ? null : idx);
    e.stopPropagation();
  };

  return (
    <div onClick={() => setActiveFilterIndex(null)}>
      <SpaceForNav />
      <ProductListWrap>
        <ProductListMain
          activeFilterIndex={activeFilterIndex}
          onFilterClick={onFilterClick}
        />
      </ProductListWrap>
    </div>
  );
}

export default ProductList;

const SpaceForNav = styled.div`
  height: 150px;
`;

const ProductListWrap = styled.main`
  display: flex;
`;
