import styled from "styled-components";
import mixin from "../../../Styles/mixin";

export const ModalContainer = styled.div`
  ${mixin.flexSet}
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalWrapper = styled.div`
  width: 100%;
  max-width: 568px;
  max-height: 100%;
  overflow: scroll;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px;
  background: ${({ theme }) => theme.backgroundColorWhite};
`;

export const ModalHeader = styled.div`
  ${mixin.flexSet("row", "space-between")}
  min-height: 64px;
  padding: 0 24px;
  border-bottom: ${({ theme }) => theme.borderSet};
  font-weight: ${({ theme }) => theme.fontBold};
`;

export const ModalContent = styled.div`
  padding: 24px;
  overflow: hidden;
`;

export const FullWideBtn = styled.button`
  ${mixin.flexSet};
  width: 100%;
  margin-bottom: ${({ margin }) => margin};
  padding: 10px 22px;
  line-height: 24px;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontBold};
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: ${({ borderColor }) => borderColor};
  background: ${({ background }) => background};
  color: ${({ color }) => color};
`;

export const OrBorder = styled.div`
  margin: 16px 0;
  text-align: center;

  span {
    position: relative;
    padding: 16px;
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.fontColorGray};

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      width: 100vw;
      border-bottom: ${({ theme }) => theme.borderSet};
    }
    &:before {
      left: 100%;
    }
    &:after {
      right: 100%;
    }
  }
`;
export const InfoSection = styled.div`
  width: 100%;

  div {
    position: relative;
  }
`;

export const InfoInput = styled.input`
  display: inline-block;
  width: 100%;
  margin-bottom: 16px;
  padding: 11px;
  line-height: 24px;
  font-size: 16px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  background-color: ${({ error }) => (error ? "#FFF8F6" : "#ffffff")};

  &:focus {
    border: 1px solid ${({ error }) => (error ? "#FC642D" : "#008489")};
  }
`;

export const ExtraAction = styled.button`
  display: ${({ display }) => display};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-bottom: ${({ noMargin }) => (noMargin ? "0" : "16px")};
  font-size: inherit;
  color: #008489;
`;

export const ExtraSection = styled.div`
  margin-top: 32px;

  button {
    margin-bottom: 0;
  }
`;
