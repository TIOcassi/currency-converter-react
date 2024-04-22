import { createGlobalStyle } from "styled-components";
import background from "./money.jpg";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  font-family: Lato, sans-serif;
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("${background}");
  background-size: cover;
}
`;