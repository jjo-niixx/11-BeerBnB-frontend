import React, { Component } from "react";
import styled from "styled-components";
import ProductListPageBtn from "./ProductListPageBtn/ProductListPageBtn";
import FooterNextPrevBtnSvg from "./FooterNextPrevBtn/FooterNextPrevBtnSvg";
import ProductListSvg from "../../../ProductListSvg/ProductListSvg";
import mixin from "../../../../../Styles/mixin";

export default class ProductListMainFooter extends Component {
  render() {
    const { pageNumClickedAt, gotoHandler } = this.props;
    return (
      <FooterContainer>
        <WrapFooterPageBtn>
          {pageNumClickedAt !== 1 && (
            <FooterNextPrevBtnSvg
              num={-1}
              gotoHandler={gotoHandler}
              btnSvg={ProductListSvg.prevBtnImg}
            />
          )}
          {tempData.map((el) => (
            <ProductListPageBtn
              pageNum={el}
              key={el}
              pageNumClickedAt={pageNumClickedAt}
              gotoHandler={gotoHandler}
            />
          ))}
          {pageNumClickedAt !== tempData[tempData.length - 1] && (
            <FooterNextPrevBtnSvg
              num={1}
              gotoHandler={gotoHandler}
              btnSvg={ProductListSvg.nextBtnImg}
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
