import { playlistKeys } from "@/constants/query-keys";
import { ApiGETItems } from "@/models/api-query";
import { Api } from "@/services/internal-api";
import { useQuery } from "react-query";

export const usePlaylist = (params: ApiGETItems) => {
  const { data = [], ...rest } = useQuery(playlistKeys.list(params), () =>
    Api.getPlaylist(params)
  );

  return { data, ...rest };
};
