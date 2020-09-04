import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RoomIntroduce from "./RoomIntroduce/RoomIntroduce";
import RoomInformation from "./RoomInformation/RoomInformation";

export default function ProductDetail() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data/ProductDetailData.json")
      .then((res) => res.json())
      .then((res) => setData(res.detail_list[0]));
  }, []);

  const {
    id,
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
    amenity,
    latitude,
    longitude,
    rules_of_use,
    health_and_safety,
    refund_policy,
  } = data;

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
      />
    </Main>
  );
}

const Main = styled.main`
  max-width: 1280px;
  height: 100%;
  margin: auto;
`;
