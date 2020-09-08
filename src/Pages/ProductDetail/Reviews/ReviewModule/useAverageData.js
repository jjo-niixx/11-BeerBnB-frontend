import React from "react";
import { useSelector } from "react-redux";

export default function useAverageData(title) {
  const { reviews } = useSelector(({ productDetail }) => ({
    reviews: productDetail.reviews,
  }));

  const { avg } = reviews;

  const {
    cleanliness_score_avg,
    communication_score_avg,
    check_in_score_avg,
    accuracy_score_avg,
    location_score_avg,
    satisfaction_score_avg,
  } = avg?.[0] || {};

  const matchAverageData = {
    청결도: cleanliness_score_avg,
    의사소통: communication_score_avg,
    체크인: check_in_score_avg,
    정확성: accuracy_score_avg,
    위치: location_score_avg,
    "가격 대비 만족도": satisfaction_score_avg,
  };

  return matchAverageData[title];
}
