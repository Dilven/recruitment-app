import { ApiGETItems } from "@/models/api-query";

export const PLAYLIST_ITEM = "PLAYLIST_ITEM";

export const playlistKeys = {
  key: () => PLAYLIST_ITEM,
  list: (filters?: ApiGETItems) => [playlistKeys.key(), filters],
};
