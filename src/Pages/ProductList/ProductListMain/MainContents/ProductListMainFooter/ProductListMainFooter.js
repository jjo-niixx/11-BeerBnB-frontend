import React, { Component } from "react";
import styled from "styled-components";
import ProductListPageBtn from "./ProductListPageBtn/ProductListPageBtn";
import FooterNextPrevBtnSvg from "./FooterNextPrevBtn/FooterNextPrevBtn";
import ProductListSvg from "../../../ProductListSvg/ProductListSvg";
import mixin from "../../../../../Styles/mixin";

export default class ProductListMainFooter extends Component {
  render() {
    const { currentPage, onChangePage } = this.props;

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === tempData[tempData.length - 1];

    return (
      <FooterContainer>
        <WrapFooterPageBtn>
          {!isFirstPage && (
            <FooterNextPrevBtnSvg
              onClick={() => onChangePage(currentPage - 1)}
              btnSvg={ProductListSvg.prevBtn}
            />
          )}
          {tempData.map((pageNum) => (
            <ProductListPageBtn
              pageNum={pageNum}
              key={pageNum}
              onClick={() => onChangePage(pageNum)}
              active={pageNum === currentPage}
            />
          ))}
          {!isLastPage && (
            <FooterNextPrevBtnSvg
              onClick={() => onChangePage(currentPage + 1)}
              btnSvg={ProductListSvg.nextBtn}
            />
          )}
        </WrapFooterPageBtn>
        <PageDescription>숙소 300개 이상 중 1-20</PageDescription>
        <AddDescription>
          추가 수수료가 부과됩니다. 세금도 부과될 수 있습니다.
        </AddDescription>
      </FooterContainer>
    );
  }
}

const tempData = [1, 2, 3, 4, 5];

const FooterContainer = styled.div`
  ${mixin.flexSet("column")};
`;

const WrapFooterPageBtn = styled.div`
  display: flex;
  margin: 30px 0 10px;
`;

const PageDescription = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
`;

const AddDescription = styled.div`
  color: ${({ theme }) => theme.fontColorGray};
  font-size: 12px;
`;
