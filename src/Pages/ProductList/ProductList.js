import React, { useState } from "react";
import styled from "styled-components";
import ProductListMain from "./ProductListMain/ProductListMain";
import AsideMap from "./AsideMap/AsideMap";

function ProductList() {
  const [headerOptionClickedAt, setHeaderOptionClickedAt] = useState("");
  const [pageNumClickedAt, setPageNumClickedAt] = useState(1);

  const gotoHandler = (name, idx) => {
    if (name === "headerOption") {
      if (headerOptionClickedAt === idx) {
        setHeaderOptionClickedAt("");
      } else setHeaderOptionClickedAt(idx);
    }
    if (name === "pageNum") {
      if (`${name}ClickedAt` === idx) return;
      setPageNumClickedAt(idx);
    }
    if (name === "nextPrev") {
      setPageNumClickedAt(pageNumClickedAt + idx);
    }
  };
  return (
    <div>
      <EmptyHeaderNav />
      <ProductListWrap>
        <ProductListMain
          headerOptionClickedAt={headerOptionClickedAt}
          pageNumClickedAt={pageNumClickedAt}
          gotoHandler={gotoHandler}
        />
        <AsideMap />
      </ProductListWrap>
    </div>
  );
}

export default ProductList;

const EmptyHeaderNav = styled.div`
  height: 80px;
`;

const ProductListWrap = styled.main`
  display: flex;
`;
