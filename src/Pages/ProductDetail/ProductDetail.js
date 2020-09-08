import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  receiveRoomInfo,
  receiveAmenities,
  receiveReviews,
} from "../../modules/ProducDetail/productDetail";
import { ROOM_INFO_API, REVIEWS_API } from "../../config";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";
import RoomInformation from "./RoomInformation/RoomInformation";
import ToKnowList from "./ToKnowList/ToKnowList";

export default function ProductDetail({ match }) {
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
  }, [match.params.id]);

  return (
    <Main>
      <RoomIntroduce />
      <RoomInformation />
      <ToKnowList />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
