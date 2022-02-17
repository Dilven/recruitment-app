import styled from "styled-components";
import { Button, Form as FormAntd } from "antd";

export const FormStyled = styled(FormAntd)`
  display: flex;
  flex-direction: column;
` as typeof FormAntd;

export const ButtonStyled = styled(Button)``;

export const ButtonsContainer = styled(FormStyled.Item)`
  ${ButtonStyled} {
    margin-right: 10px;
  }
`;
