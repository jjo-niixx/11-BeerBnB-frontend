import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ProductListSvg from "../../../SVG/ProductListSvg";
import { REVIEWS_API } from "../../../../../config";
import mixin from "../../../../../Styles/mixin";

export default function MiniContents({ roomInfo }) {
  const [reviewData, setReviewData] = useState({});
  const { review, rate_avg } = reviewData?.avg?.[0] || {};
  const { image_url, address, title, host, id, price } = roomInfo;
  const newPrice = `₩${Number(price).toLocaleString()}`;
  const history = useHistory();

  useEffect(() => {
    fetch(`${REVIEWS_API}/${id}`)
      .then((res) => res.json())
      .then((res) => setReviewData(res));
  }, []);

  return (
    <Content onClick={() => history.push(`/productDetail/${id}`)}>
      <picture>
        {host && <SuperHost>슈퍼호스트</SuperHost>}
        <img alt="roomImg" src={image_url[0]} />
      </picture>
      <DescriptionBox>
        <Review>
          <PinkStar>{ProductListSvg.pinkStar}</PinkStar>
          {rate_avg}{" "}
          <Reviewers>{`${review ? `(${review})` : "후기 없음"}`}</Reviewers>
        </Review>
        <Title>{address}</Title>
        <Dscription>{title}</Dscription>
        <Price>
          {newPrice}
          <span>/1박</span>
        </Price>
      </DescriptionBox>
    </Content>
  );
}
const Content = styled.div`
  display: inline-block;
  width: 274px;
  height: 300px;
  margin: 20px 10px;
  background-color: white;
  cursor: pointer;

  picture {
    position: relative;

    img {
      width: 274px;
      height: 182px;
      object-fit: cover;
      border-radius: 8px;
    }
  }
`;

const DescriptionBox = styled.div`
  ${mixin.flexSet("column", "space-around", "flex-start")}
  padding: 10px 15px;
`;

const Title = styled.div`
  font-size: 16px;
  width: 130px;
  padding: 5px 5px;
  padding-left: 0;
  margin: 4px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.8);
`;

const Dscription = styled.div`
  font-size: 16px;
  width: 250px;
  padding: 5px 5px;
  padding-left: 0;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.8);
`;

const Price = styled.div`
  ${mixin.flexSet("row", "flex-start")};
  font-size: 16px;
  font-weight: 500;

  span {
    margin-left: 5px;
    font-size: 17px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const SuperHost = styled.div`
  position: absolute;
  left: 15px;
  bottom: 152px;
  z-index: 100;
  width: 72px;
  height: 26px;
  padding: 5px 8px 4px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  font-weight: 500;
`;

const Review = styled.div`
  ${mixin.flexSet("row", "flex-start")};
  font-size: 14px;
`;

const PinkStar = styled.span`
  margin: 2px 5px 0 0;
`;

const Reviewers = styled.span`
  margin-left: 5px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 14px;
`;
