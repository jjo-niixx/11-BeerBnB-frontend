import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  receiveRoomInfo,
  receiveAmenities,
  receiveReviews,
} from "../../modules/ProducDetail/productDetail";
import { ROOM_INFO_API, REVIEWS_API } from "../../config";
import { useReviewModal, useReviewList } from "./hooks/review";
import useBooking from "./hooks/useBooking";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";
import RoomInformation from "./RoomInformation/RoomInformation";
import ToKnowList from "./ToKnowList/ToKnowList";
import Reviews from "./Reviews/Reviews";
import ReviewModal from "./Reviews/ReviewModal/ReviewModal";
import Spinner from "./ProductDetailComponent/Spinner";
import EasterEgg from "./easterEgg/EasterEgg";

export default function ProductDetail({ match }) {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [bookingStat, _, confirmBooking] = useBooking();
  const [modalStatus] = useReviewModal();
  const [__, onGetReviewList] = useReviewList();

  const dispatch = useDispatch();
  const onReceiveRoomInfo = (roomInfo) => dispatch(receiveRoomInfo(roomInfo));
  const onReceiveAmenities = (amenities) =>
    dispatch(receiveAmenities(amenities));
  const onReceiveReviews = (reviews) => dispatch(receiveReviews(reviews));

  useEffect(() => {
    const {
      params: { id },
    } = match;
    fetch(`${ROOM_INFO_API}${id}`)
      .then((res) => res.json())
      .then((res) => {
        onReceiveRoomInfo(res.detail_list[0]);
        onReceiveAmenities(res.amenity_list);
      });

    fetch(`${REVIEWS_API}${id}`)
      .then((res) => res.json())
      .then((res) => onReceiveReviews(res));

    fetch(`${REVIEWS_API}${id}?offset=0&limit=10`)
      .then((res) => res.json())
      .then((res) => onGetReviewList(res));
  }, [match.params.id]);

  return (
    <>
      <Main>
        <RoomIntroduce />
        <RoomInformation />
        <ToKnowList />
        <Reviews />
      </Main>
      {modalStatus && <ReviewModal />}
      {bookingStat === "ATTEMP" ? (
        <Spinner onClick={confirmBooking} fixed />
      ) : bookingStat === "CONFIRM" ? (
        <EasterEgg />
      ) : null}
    </>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
