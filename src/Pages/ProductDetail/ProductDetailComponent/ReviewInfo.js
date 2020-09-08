import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Svg from "../SVG/ProductDetailSvg";
import mixin from "../../../Styles/mixin";

function ReviewInfo({ noMargin }) {
  const { reviews } = useSelector(({ productDetail }) => ({
    reviews: productDetail.reviews,
  }));

  const { avg } = reviews;

  const { rate_avg, review } = avg?.[0] || {};

  return (
    <Container>
      <div>{Svg.pinkStar}</div>
      <RateAvg>{rate_avg}</RateAvg>
      <ReviewCount>{`(${review})`}</ReviewCount>
    </Container>
  );
}

export default ReviewInfo;

const Container = styled.div`
  ${mixin.flexSet()}
  ${({ noMargin }) => (noMargin ? "margin-left: 40px;" : "")}
  font-size: 16px;

  div:not(:last-of-type) {
    margin-right: 4px;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

const RateAvg = styled.div`
  font-weight: ${({ theme }) => theme.fontMedium};
`;

const ReviewCount = styled.div`
  color: ${({ theme }) => theme.fontColorGray};
  font-weight: ${({ theme }) => theme.fontRegular};
`;
