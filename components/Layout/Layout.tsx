import { LayoutStyled } from "./styles";

type Props = Readonly<{
  children: React.ReactNode;
}>;
export const Layout = ({ children }: Props) => (
  <LayoutStyled>{children}</LayoutStyled>
);
