import React from "react";
import styled from "styled-components";
import useAverageData from "../../hooks/useAverageData";
import mixin from "../../../../Styles/mixin";

function Average({ title, modal }) {
  const figure = useAverageData(title);
  const numberFigure = Number(figure);
  return (
    <Container modal={modal}>
      <Title>{title}</Title>
      <FigureWrapper>
        <ProgressBarContainer>
          <ProgressBar figure={numberFigure} />
        </ProgressBarContainer>
        <Figure>{figure}</Figure>
      </FigureWrapper>
    </Container>
  );
}

export default Average;

const Container = styled.div`
  ${mixin.flexSet("row", "space-between")}
  width: ${({ modal }) => (modal ? "100%" : "45%")};
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontMedium};
`;

const FigureWrapper = styled.div`
  ${mixin.flexSet("row", "space-between", "center")}
  width: 30%;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background: rgb(221, 221, 221);
  border-radius: 8px;
`;

const ProgressBar = styled.div`
  width: ${({ figure }) => `${(figure / 5) * 100}%`};
  height: 4px;
  background: black;
  border-radius: 8px;
`;

const Figure = styled.div`
  margin-left: 10px;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontBold};
`;
