import styled from "styled-components";
import { blue } from "@ant-design/colors";

export const LayoutStyled = styled.div`
  display: grid;
  color: #fff;
  grid-template-rows: 10% 80% 10%;
  height: 100vh;
  width: 100vw;
`;

export const HeaderStyled = styled.header`
  background-color: #15395b;
  padding: 1em;
`;

export const ContentStyled = styled.main`
  background-color: #1765ad;
  padding: 1em;
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const FooterStyled = styled.footer`
  padding: 1em;
  background-color: #15395b;
`;
