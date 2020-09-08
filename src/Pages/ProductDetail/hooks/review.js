import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  modalChanges,
  getReviewList,
  addReviewList,
} from "../../../modules/ProducDetail/reviewModal";

export function useReviewList() {
  const { reviewList } = useSelector(({ reviewModal }) => ({
    reviewList: reviewModal.reviewList,
  }));

  const dispatch = useDispatch();

  const onGetReviewList = (reviews) => {
    const reviewList = reviews.list[0];
    dispatch(getReviewList(reviewList));
  };

  const onAddReviewList = (reviews) => {
    const reviewList = reviews.list[0];
    dispatch(addReviewList(reviewList));
  };

  return [reviewList, onGetReviewList, onAddReviewList];
}

export function useReviewModal() {
  const { modalStatus } = useSelector(({ reviewModal }) => ({
    modalStatus: reviewModal.modalStatus,
  }));

  const dispatch = useDispatch();

  const onModalChange = () => dispatch(modalChanges());

  return [modalStatus, onModalChange];
}
