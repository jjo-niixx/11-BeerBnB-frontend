import React from "react";
import styled from "styled-components";
import Svg from "../../SVG/ProductDetailSvg";
import mixin from "../../../../Styles/mixin";

export default function List({ listTitle, listData }) {
  return (
    <ListContainer>
      <SubTitle>{listTitle}</SubTitle>
      <div>
        {listData?.map((el) => {
          const text = el.replace("자세히 보기", "");
          return (
            <ListItem key={text}>
              {Svg.airBnb}
              <p>{text}</p>
            </ListItem>
          );
        })}
      </div>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 33.3%;
  margin-right: 32px;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontMedium};
  margin-bottom: 12px;
`;

const ListItem = styled.div`
  ${mixin.flexSet("row", "flex-start", "center")}
  margin-bottom: 8px;
  font-weight: ${({ theme }) => theme.fontRegular};
  word-break: keep-all;

  svg {
    flex-shrink: 0;
    margin-right: 12px;
  }
`;
