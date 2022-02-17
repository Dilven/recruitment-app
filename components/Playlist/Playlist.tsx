import { MAX_RESULTS_PER_PAGE } from "@/constants/playlist";
import { usePlaylist } from "@/hooks/usePlaylist";
import { Card, Pagination } from "antd";
import React from "react";
import { Container, Img, List, PlaylistHeader } from "./styles";

type Props = Readonly<{
  playlistId: string;
}>;

export const Playlist = ({ playlistId }: Props) => {
  const { data } = usePlaylist({ playlistId });
  const items = data.map((d) => d.items).flat();

  return (
    <Container>
      <PlaylistHeader>Playlist: {playlistId}</PlaylistHeader>
      <Pagination
        defaultCurrent={1}
        showSizeChanger={false}
        total={items.length}
        defaultPageSize={MAX_RESULTS_PER_PAGE}
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card title={item.snippet.title}>
              {item.snippet.thumbnails.medium && (
                <Img
                  src={item.snippet.thumbnails.medium?.url}
                  width={item.snippet.thumbnails.medium.width}
                  height={item.snippet.thumbnails.medium.height}
                />
              )}
            </Card>
          </List.Item>
        )}
      />
    </Container>
  );
};
