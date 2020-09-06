import React from "react";
import styled from "styled-components";
import Title from "../ProductDetailComponent/Title";
import List from "./List/List";
import mixin from "../../../Styles/mixin";

function ToKnowList({ rules, healthAndSafety, refundPolicy }) {
  const matchData = {
    "숙소 이용규칙": rules,
    "건강과 안전": healthAndSafety,
    "환불 정책": refundPolicy,
  };
  return (
    <ToKnowListContainer>
      <Title title={"알아두어야 할 사항"} marginBottom={"24px"} />
      <ListWrapper>
        {Object.keys(matchData).map((title) => (
          <List key={title} listTitle={title} listData={matchData[title]} />
        ))}
      </ListWrapper>
    </ToKnowListContainer>
  );
}

export default ToKnowList;

//style
const ToKnowListContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 48px 0;
  border-bottom: ${({ theme }) => theme.borderSet};
`;

const ListWrapper = styled.div`
  ${mixin.flexSet("row", "space-between", "strech")}
`;
