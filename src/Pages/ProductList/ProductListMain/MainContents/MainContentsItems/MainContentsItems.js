import React, { Component } from "react";
import styled from "styled-components";
import MainItemImgSlide from "./MainItemImgSlide/MainItemImgSlide";
import ProductListSvg from "../../../ProductListSvg/ProductListSvg";
import { BtnSvgContainer } from "./MainItemImgSlide/ImgSlideMoveBtn/ImgSlideMoveBtn";

export default class MainContentsItems extends Component {
  render() {
    return (
      <ItemsContainer>
        <ItemsWrapper>
          <MainItemImgSlide />
          <ItemInfo>
            <InfoHeader>
              <div>
                <InfoSubTitle>인사동의 호텔 객실</InfoSubTitle>
                <InfoTitle>빙고호스텔 인사동점 - 101</InfoTitle>
              </div>
              <span>{ProductListSvg.normalHeart}</span>
            </InfoHeader>
            <DivisionLine />
            <div>
              <InfoDetail>
                최대 인원 1명 · 원룸 · 침대 1개 · 욕실 1개
              </InfoDetail>
              <InfoDetail>에어컨 · 주방 · 무선 인터넷</InfoDetail>
            </div>
            <InfoPrice>
              <ReviewNum>
                <ReviewNumContainer>
                  {ProductListSvg.pinkStar}
                </ReviewNumContainer>
                4.74<ReviewersNum>(77)</ReviewersNum>
              </ReviewNum>
              <ProductItemPrice>
                <div>
                  <OneDayPrice>₩19,277</OneDayPrice>/1박
                </div>
                <TotalPrice>총 요금: ₩269,877</TotalPrice>
              </ProductItemPrice>
            </InfoPrice>
          </ItemInfo>
        </ItemsWrapper>
      </ItemsContainer>
    );
  }
}

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const ItemsWrapper = styled.div`
  display: flex;
  height: 200px;
  cursor: pointer;

  &:hover {
    ${BtnSvgContainer} {
      opacity: 1;
    }
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 16px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoSubTitle = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.fontColorGray};
`;

const InfoTitle = styled.div`
  font-size: 18px;
`;

const DivisionLine = styled.div`
  width: 32px;
  height: 1px;
  margin: 12px 0 12px;
  background-color: #dddddd;
`;

const InfoDetail = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: ${({ theme }) => theme.fontColorGray};
`;

const InfoPrice = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

const ReviewNum = styled.div`
  font-size: 400;
`;

const ReviewNumContainer = styled.span`
  margin-right: 5px;
`;

const ReviewersNum = styled.span`
  margin-left: 2px;
  color: ${({ theme }) => theme.fontColorGray};
`;

const ProductItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: 400;
  font-size: 18px;
`;

const OneDayPrice = styled.span`
  font-weight: 700;
  font-size: 18px;
`;

const TotalPrice = styled.div`
  margin-top: 5px;
  color: ${({ theme }) => theme.fontColorGray};
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;
