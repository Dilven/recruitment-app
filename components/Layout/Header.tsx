import { HeaderStyled } from "./styles";

type Props = Readonly<{
  children: React.ReactNode;
}>;
export const Header = ({ children }: Props) => (
  <HeaderStyled>{children}</HeaderStyled>
);
