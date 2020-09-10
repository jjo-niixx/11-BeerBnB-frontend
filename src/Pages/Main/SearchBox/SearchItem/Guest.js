import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateGuests } from "../../../../modules/SearchBox/guestCount";
import styled from "styled-components";
import mixin from "../../../../Styles/mixin";
import SearchBoxSvg from "../SearchBoxSvg";

export default function Guest() {
  const dispatch = useDispatch();
  const { guests } = useSelector(({ guestCount: { guests } }) => ({
    guests: guests,
  }));
  const { adult, child, infant } = guests;

  return (
    <GuestSection right="0">
      <GuestInfo>
        <div>
          <GuestTitle>어른</GuestTitle>
          <GuestAge>만 13세 이상</GuestAge>
        </div>
        <GuestCount>
          <button
            disabled={adult > 0 ? false : true}
            onClick={() =>
              dispatch(updateGuests({ ...guests, adult: adult - 1 }))
            }
          >
            {SearchBoxSvg.minusBtn}
          </button>
          <CountNum>{adult}</CountNum>
          <button
            onClick={() =>
              dispatch(updateGuests({ ...guests, adult: adult + 1 }))
            }
          >
            {SearchBoxSvg.plusBtn}
          </button>
        </GuestCount>
      </GuestInfo>
      <GuestInfo>
        <div>
          <GuestTitle>어린이</GuestTitle>
          <GuestAge>2~12세</GuestAge>
        </div>
        <GuestCount>
          <button
            disabled={child > 0 ? false : true}
            onClick={() =>
              dispatch(updateGuests({ ...guests, child: child - 1 }))
            }
          >
            {SearchBoxSvg.minusBtn}
          </button>
          <CountNum>{child}</CountNum>
          <button
            onClick={() =>
              dispatch(updateGuests({ ...guests, child: child + 1 }))
            }
          >
            {SearchBoxSvg.plusBtn}
          </button>
        </GuestCount>
      </GuestInfo>
      <GuestInfo>
        <div>
          <GuestTitle>유아</GuestTitle>
          <GuestAge>2세 미만</GuestAge>
        </div>
        <GuestCount>
          <button
            disabled={infant > 0 ? false : true}
            onClick={() =>
              dispatch(updateGuests({ ...guests, infant: infant - 1 }))
            }
          >
            {SearchBoxSvg.minusBtn}
          </button>
          <CountNum>{infant}</CountNum>
          <button
            onClick={() =>
              dispatch(updateGuests({ ...guests, infant: infant + 1 }))
            }
          >
            {SearchBoxSvg.plusBtn}
          </button>
        </GuestCount>
      </GuestInfo>
    </GuestSection>
  );
}

export const GuestSection = styled.div`
  position: absolute;
  right: ${({ right }) => right};
  top: 100%;
  max-height: calc(100vh - 220px);
  margin-top: 12px;
  padding: 16px 32px;
  border: ${({ theme }) => theme.borderSet};
  border-radius: 32px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 20px;
  background-color: ${({ theme }) => theme.backgroundColorWhite};
  z-index: 1;
`;

const GuestInfo = styled.div`
  ${mixin.flexSet("row", "space-between", "center")}
  min-width: 330px;
  padding: 16px 4px 16px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const GuestTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
`;

const GuestAge = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(113, 113, 113);
`;

const GuestCount = styled.div`
  ${mixin.flexSet("row", "space-between")}
  width: 104px;

  button {
    display: inline-flex;
    ${mixin.flexSet}
    width: 32px;
    height: 32px;
    border: ${({ theme }) => theme.borderSet};
    border-radius: 50%;
    background: rgb(255, 255, 255);
    cursor: pointer;
  }
`;

const CountNum = styled.span``;
