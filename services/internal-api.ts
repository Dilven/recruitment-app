import axios, { AxiosRequestConfig } from "axios";

import { getConfig } from "@/config/config";
import { paths } from "@/config/paths";
import { getQueryParams } from "@/helpers/get-query-params";
import { ApiGETItems } from "@/models/api-query";
import { PlaylistPage } from "@/models/youtube";

const instanceApi = axios.create({
  timeout: Number(getConfig("NEXT_PUBLIC_INTERNAL_API_TIMEOUT")),
});

const getAxiosConfig = (params: AxiosRequestConfig = {}) => {
  return {
    ...params,
    headers: {
      "Content-Type": "application/json",
      ...params?.headers,
    },
  };
};

export const Api = Object.freeze({
  getPlaylist: async (params: ApiGETItems) => {
    const query = getQueryParams(params);
    const url = `${paths.api.items}/${query}`;
    const { data } = await instanceApi.get<PlaylistPage[]>(
      url,
      getAxiosConfig()
    );
    return data;
  },
});
