import React from "react";
import styled from "styled-components";
import { GuestSection } from "./Guest";
import mixin from "../../../../Styles/mixin";
import SearchBoxSvg from "../SearchBoxSvg";

export default function Location({ filteredInput }) {
  return (
    <LocationSection>
      <LocationList>
        {filteredInput.map((el, idx) => (
          <Destination key={idx}>
            <Pic>{SearchBoxSvg.location}</Pic>
            <Name>{el}</Name>
          </Destination>
        ))}
      </LocationList>
    </LocationSection>
  );
}

const LocationSection = styled(GuestSection)`
  left: 0px;
`;

const LocationList = styled.ul`
  padding: 8px 0 0;
  min-width: 330px;
`;

const Destination = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 0;
  cursor: pointer;
`;

const Pic = styled.div`
  ${mixin.flexSet};
  min-width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundColorGray};
`;

const Name = styled.li`
  padding: 12px 0;
  font-size: 16px;
  line-height: 20px;
`;
