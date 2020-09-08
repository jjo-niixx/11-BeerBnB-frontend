import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeHover } from "../../../../../modules/ProductList/productList";
import { useHistory } from "react-router-dom";
import moment from "moment";
import MainItemImgSlide from "./MainItemImgSlide/MainItemImgSlide";
import ProductListSvg from "../../../SVG/ProductListSvg";
import { BtnSvgContainer } from "./MainItemImgSlide/ImgSlideMoveBtn/ImgSlideMoveBtn";
import { REVIEWS_API } from "../../../../../config";
import mixin from "../../../../../Styles/mixin";
export default function MainContentsItems({ roomInfo }) {
  const [reviewData, setReviewData] = useState({});
  const dispatch = useDispatch();
  const { review, rate_avg } = reviewData?.avg?.[0] || {};
  const { dateRange } = useSelector(({ dayPicker: { dateRange } }) => ({
    dateRange: dateRange,
  }));
  const { startDate, endDate } = dateRange;
  const nights = moment(endDate).diff(startDate, "days");
  const {
    image_url,
    price,
    address,
    title,
    id,
    host,
    max_personnal,
    bed,
    bed_room,
    bath_room,
    amenity,
  } = roomInfo;
  const newAmenity = amenity.slice(0, 4).join(" · ");
  const newPrice = price * nights + price * 0.06 + price * 0.07;
  const history = useHistory();
  useEffect(() => {
    fetch(`${REVIEWS_API}/${id}`)
      .then((res) => res.json())
      .then((res) => setReviewData(res));
  }, []);
  return (
    <ItemsContainer
      onMouseEnter={() => dispatch(changeHover(id))}
      onMouseLeave={() => dispatch(changeHover(null))}
    >
      <ItemsWrapper>
        {host && <SuperHost>슈퍼호스트</SuperHost>}
        <MainItemImgSlide image_url={image_url} />
        <ItemInfo onClick={() => history.push(`/productDetail/${id}`)}>
          <div>
            <InfoHeader>
              <div>
                <InfoSubTitle>{address}</InfoSubTitle>
                <InfoTitle>{title}</InfoTitle>
              </div>
              <span>{ProductListSvg.normalHeart}</span>
            </InfoHeader>
            <DivisionLine />
            <div>
              <InfoDetail>
                {max_personnal} · {bed_room} · {bed} · {bath_room}
              </InfoDetail>
              <InfoDetail>{newAmenity}</InfoDetail>
            </div>
          </div>
          <InfoPrice>
            <ReviewNum>
              <ReviewNumContainer>{ProductListSvg.pinkStar}</ReviewNumContainer>
              {rate_avg}
              <ReviewersNum>{`(${review})`}</ReviewersNum>
            </ReviewNum>
            <ProductItemPrice>
              <div>
                <OneDayPrice>₩{(price * 1).toLocaleString()}</OneDayPrice>/1박
              </div>
              <TotalPrice>총 요금: ₩{newPrice.toLocaleString()}</TotalPrice>
            </ProductItemPrice>
          </InfoPrice>
        </ItemInfo>
      </ItemsWrapper>
    </ItemsContainer>
  );
}
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;
const ItemsWrapper = styled.div`
  position: relative;
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
  ${mixin.flexSet("column", "space-between", "space-between")}
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
const SuperHost = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: 1000;
  width: 72px;
  height: 26px;
  padding: 7px 8px 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
`;
