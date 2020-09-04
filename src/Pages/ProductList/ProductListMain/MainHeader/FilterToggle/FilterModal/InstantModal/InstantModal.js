import React from "react";
import styled from "styled-components";
import mixin from "../../../../../../../Styles/mixin";
import MovingButton from "../MovingButton/MovingButton";

export default function InstantModal({
  isInstantChecked,
  onCheckInstantReserve,
}) {
  return (
    <ContentBox>
      <div>
        <Title>즉시 예약</Title>
        <Description>
          호스트 승인을 기다릴 필요 없이 예약할 수 있는 숙소
        </Description>
      </div>
      <MovingButton
        onCheckHandler={onCheckInstantReserve}
        isChecked={isInstantChecked}
      />
    </ContentBox>
  );
}

const ContentBox = styled.div`
  ${mixin.flexSet()};
  width: 356px;
  padding: 12px 4px 20px 0;
`;

const Title = styled.div`
  font-size: 16px;
  margin: 5px 0;
  color: rgba(0, 0, 0, 0.9);
`;

const Description = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.8);
`;
