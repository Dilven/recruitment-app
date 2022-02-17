type Item = {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    playlistId: string;
    position: number;
    publishedAt: string;
    resourceId: { kind: string; videoId: string };
    thumbnails: {
      medium?: { url: string; width: number; height: number };
    };
    title: string;
  };
};

export type PlaylistPage = {
  etag: string;
  items: Item[];
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken: string;
  prevPageToken: string;
};
