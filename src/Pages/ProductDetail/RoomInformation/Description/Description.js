import React from "react";
import styled from "styled-components";

function Description({ description }) {
  return (
    <DescriptionContainer>
      {description &&
        description.split("\n").map((el, idx) => (
          <Text key={idx}>
            {el}
            <br />
          </Text>
        ))}
    </DescriptionContainer>
  );
}

export default Description;

const DescriptionContainer = styled.div`
  border-bottom: ${({ theme }) => theme.borderSet};
  padding: 48px 0;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontRegular};
  line-height: 24px;
`;
