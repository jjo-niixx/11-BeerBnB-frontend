import React from "react";
import styled from "styled-components";
import Title from "../../ProductDetailComponent/Title";
import mixin from "../../../../Styles/mixin";
import iconMatch from "../../IconMatch/IconMatch";

function Amenities({ amenities }) {
  const { useable, unuseable } = amenities || {};
  return (
    <AmenitiesContianer>
      <Title marginBottom={"24px"} title={"편의시설"} />
      <AmenityContents>
        {useable?.map((el) => {
          return (
            <Item key={el}>
              {iconMatch[el] || iconMatch.default}
              {el}
            </Item>
          );
        })}
        {unuseable?.map((el) => {
          const firstIdx = el.indexOf(":") + 2;
          const lastIdx = el.indexOf("\n");
          const parsedText = el.slice(firstIdx, lastIdx);
          return (
            <Item key={parsedText} unuseable>
              {iconMatch[parsedText] || iconMatch.default}
              {parsedText}
            </Item>
          );
        })}
      </AmenityContents>
    </AmenitiesContianer>
  );
}

export default Amenities;

const AmenitiesContianer = styled.section`
  padding: 48px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const AmenityContents = styled.div`
  ${mixin.flexSet("row", "flex-start", "center")};
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex-basis: 50%;
  ${mixin.flexSet("row", "flex-start", "center")}
  margin-bottom: 10px;
  ${({ unuseable }) => (unuseable ? "text-decoration:line-through;" : "")}

  svg {
    margin-right: 16px;
    ${({ unuseable }) => (unuseable ? "opacity: 0.4;" : "")}
  }
`;
