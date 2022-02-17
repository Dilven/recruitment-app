import { z } from "zod";

export const ApiGETItemsSchema = z.object({
  playlistId: z.string(),
});
