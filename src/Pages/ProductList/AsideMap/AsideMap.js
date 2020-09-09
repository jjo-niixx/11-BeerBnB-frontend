import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { apiKey } from "./Key";
import { useDispatch } from "react-redux";
import { useGetItemData } from "../hooks/useGetRoomsData";
import {
  changeLabel,
  mapOpenToggle,
} from "../../../modules/ProductList/productList";
import LabelContent from "./LabelContent/LabelContent";
import ProductListSvg from "../SVG/ProductListSvg";
import mixin from "../../../Styles/mixin";

export default function AsideMap() {
  const dispatch = useDispatch();
  const { roomsInfo } = useGetItemData("roomsInfo");
  const { rooms_list } = roomsInfo;

  const MarkerLabel = ({ newPrice, roomData }) => (
    <LabelContent newPrice={newPrice} roomData={roomData} />
  );

  return (
    <MapWrapper onClick={() => dispatch(changeLabel(null))}>
      <CloseButton
        onClick={(e) => {
          if (!e.target) return;
          dispatch(mapOpenToggle(false));
        }}
      >
        <span>{ProductListSvg.closeBtn}</span>
      </CloseButton>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={{ lat: 33.39572, lng: 126.49461 }}
        defaultZoom={11}
      >
        {rooms_list?.map((roomData) => {
          const { longitude, latitude, price, id } = roomData;
          const newPrice = `₩${Number(price).toLocaleString()}`;

          return (
            <MarkerLabel
              key={id + longitude}
              lat={latitude}
              lng={longitude}
              newPrice={newPrice}
              roomData={roomData}
            />
          );
        })}
      </GoogleMapReact>
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.div`
  ${mixin.flexSet};
  position: absolute;
  top: 15px;
  left: 15px;
  z-index: 1000;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 20px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
`;
