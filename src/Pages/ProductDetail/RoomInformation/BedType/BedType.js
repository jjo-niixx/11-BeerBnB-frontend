import React, { useState } from "react";
import styled from "styled-components";
import Title from "../../ProductDetailComponent/Title";
import Svg from "../../SVG/ProductDetailSvg";
import mixin from "../../../../Styles/mixin";

function BedType({ bedType, bedRoom }) {
  const [appearCardIdx, setAppearCardIdx] = useState(0);
  const moveValue = -appearCardIdx * 33.3;
  return bedType ? (
    <BedTypeContainer>
      <Title marginBottom={"24px"} title={"침대 / 침구유형"} />
      <Contents>
        <SliderContainer>
          <SliderWrapper moveValue={moveValue}>
            {bedType.map((el, idx) => (
              <ItemWrapper key={el}>
                <Item>
                  {bed}
                  <BedRoom>{el}</BedRoom>
                  <BedInfo>{bedRoom[idx]}</BedInfo>
                </Item>
              </ItemWrapper>
            ))}
          </SliderWrapper>
          {bedType.length > 3 && (
            <>
              {appearCardIdx !== 0 && (
                <Btn left onClick={() => setAppearCardIdx(appearCardIdx - 1)}>
                  {prevBtn}
                </Btn>
              )}
              {appearCardIdx < bedType.length - 3 && (
                <Btn right onClick={() => setAppearCardIdx(appearCardIdx + 1)}>
                  {nextBtn}
                </Btn>
              )}
            </>
          )}
        </SliderContainer>
      </Contents>
    </BedTypeContainer>
  ) : null;
}

export default BedType;

const { prevBtn, nextBtn, bed } = Svg;

const BedTypeContainer = styled.article`
  padding: 48px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const Contents = styled.div`
  position: relative;
`;

const SliderContainer = styled.div`
  overflow: hidden;
`;

const SliderWrapper = styled.div`
  ${mixin.flexSet("row", "flex-start")}
  transform: ${({ moveValue }) => `translateX(${moveValue}%)`};
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const ItemWrapper = styled.div`
  flex: 1 0 33.3%;
  max-width: 33.3%;
  padding: 0 5px;
`;

const Item = styled.div`
  padding: 24px;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 12px;

  svg {
    margin-bottom: 16px;
  }
`;

const BedRoom = styled.p`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontMedium};
`;

const BedInfo = styled.p`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontRegular};
`;

const Btn = styled.button`
  ${mixin.flexSet()}
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.backgroundColorWhite};
  box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
  ${({ left }) => left && "left: -16px;"}
  ${({ right }) => right && "right: -16px;"}
`;
