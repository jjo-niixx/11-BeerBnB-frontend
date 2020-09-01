import { css } from "styled-components";
const mixin = {
  flexSet: (
    flexDirection = "row",
    justifyContent = "center",
    alignItems = "center"
  ) => css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
};
export default mixin;
