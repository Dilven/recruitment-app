import { playlistItems } from "data/playlist-items";


const fetchPlaylistItems = async () => {
  return playlistItems;
};

export const YoutubeApi = {
  fetchPlaylistItems,
};
