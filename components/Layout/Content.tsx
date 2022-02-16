import { ContentStyled } from "./styles";

type Props = Readonly<{
  children: React.ReactNode;
}>;
export const Content = ({ children }: Props) => (
  <ContentStyled>{children}</ContentStyled>
);
