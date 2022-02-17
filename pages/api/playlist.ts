import { methodHandler } from "@/helpers/api/method-handler";
import { withAsync } from "@/helpers/api/with-async";
import { withValidation } from "@/helpers/api/with-validation";
import { PlaylistPage } from "@/models/youtube";
import { ApiGETItemsSchema } from "@/schemas/api-query";
import { YoutubeApi } from "@/services/youtube";

export default methodHandler({
  get: withAsync(
    withValidation({
      query: ApiGETItemsSchema,
    })((_req, _res): Promise<PlaylistPage[]> => {
      return YoutubeApi.fetchPlaylistItems();
    })
  ),
});
