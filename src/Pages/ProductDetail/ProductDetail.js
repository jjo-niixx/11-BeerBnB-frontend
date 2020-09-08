import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";
import RoomInformation from "./RoomInformation/RoomInformation";
import ToKnowList from "./ToKnowList/ToKnowList";

export default function ProductDetail() {
  const [roomInfo, setRoomInfo] = useState({});

  useEffect(() => {
    fetch("/data/ProductDetailData.json")
      .then((res) => res.json())
      .then((res) => setRoomInfo(res.detail_list[0]));
  }, []);

  const {
    address,
    image_url,
    title,
    sub_title,
    max_personnal,
    bed_room,
    bed,
    bath_room,
    tag_title,
    tag_detail,
    description,
    bedroom,
    bedtype,
    amenity_list,
    latitude,
    longitude,
    rules_of_use,
    health_and_safety,
    refund_policy,
  } = roomInfo;

  return (
    <Main>
      <RoomIntroduce title={title} address={address} imgUrl={image_url} />
      <RoomInformation
        title={sub_title}
        subTitle={[max_personnal, bed_room, bed, bath_room]}
        tagTitle={tag_title}
        tagDetail={tag_detail}
        description={description}
        bedRoom={bedroom}
        bedType={bedtype}
        amenities={amenity_list}
      />
      <ToKnowList
        rules={rules_of_use}
        healthAndSafety={health_and_safety}
        refundPolicy={refund_policy}
      />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
