import { FooterStyled } from "./styles";

type Props = Readonly<{
  children: React.ReactNode;
}>;
export const Footer = ({ children }: Props) => (
  <FooterStyled>{children}</FooterStyled>
);
