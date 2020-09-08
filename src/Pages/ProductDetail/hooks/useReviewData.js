import { useSelector } from "react-redux";

function useReviewData(props) {
  const { reviews } = useSelector(({ productDetail }) => ({
    reviews: productDetail.reviews,
  }));

  const { avg } = reviews;

  const { review, rate_avg } = avg?.[0] || {};

  return [review, rate_avg];
}

export default useReviewData;
