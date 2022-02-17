import styled from "styled-components";
import Image from "next/image";
import { List as ListAntd } from "antd";

export const Container = styled.section``;
export const PlaylistHeader = styled.h2`
  color: #fff;
`;

export const Img = styled(Image)`
  object-fit: cover;
  width: 100%;
`;

export const List = styled(ListAntd)`
  margin-top: 10px;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: unset;
` as typeof ListAntd;
