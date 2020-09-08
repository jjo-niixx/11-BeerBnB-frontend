import React from "react";
import useReviewData from "../ReviewModule/useReviewData";
import styled, { css } from "styled-components";
import Svg from "../../SVG/ProductDetailSvg";
import mixin from "../../../../Styles/mixin";

function ReviewTitle({ size = 22 }) {
  const [reviewNum, reviewAvg] = useReviewData();

  return (
    <Title size={size}>
      <div>{Svg.pinkStar}</div>
      <RateAvg>{`${reviewAvg}점`}</RateAvg>
      <ReviewCount>{`(후기 ${reviewNum}개)`}</ReviewCount>
    </Title>
  );
}

export default ReviewTitle;

const Title = styled.h2`
  ${mixin.flexSet("row", "flex-start")}
  margin-bottom: 20px;
  font-size: ${({ size }) => `${size}px;`}
  font-weight: 600;

  svg {
    ${({ size }) => css`
      width: ${size - 4}px;
      height: ${size - 4}px;
    `}
  }
`;

const RateAvg = styled.div`
  margin-left: 8px;
  font-weight: ${({ theme }) => theme.fontMedium};
`;

const ReviewCount = styled.div`
  margin-left: 4px;
  color: ${({ theme }) => theme.fontColorGray};
  font-weight: ${({ theme }) => theme.fontRegular};
`;
