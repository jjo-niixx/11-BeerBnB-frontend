import React, { useState } from "react";
import styled from "styled-components";
import mixin from "../../../../../../../../Styles/mixin";

export default function MinMaxPrice({ title, initialNum }) {
  const [text, setText] = useState(initialNum);
  return (
    <PriceWrapper>
      <Title>{title}</Title>
      <InputWrapper>
        ₩
        <InputPrice
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </InputWrapper>
    </PriceWrapper>
  );
}

const PriceWrapper = styled.div`
  margin: 0 10px;
  padding: 5px 10px;
  padding-bottom: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const InputWrapper = styled.div`
  ${mixin.flexSet("row", "flex-start")}
`;

const Title = styled.div`
  margin: 5px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.fontColorGray};
`;
const InputPrice = styled.input`
  height: 20px;
  width: 130px;
  border: none;
  font-size: 16px;
`;
