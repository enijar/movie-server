import { z } from "zod";

export const movieScheme = z.object({
  id: z.number(),
  title: z.string(),
  year: z.string(),
  synopsis: z.string(),
  rating: z.number(),
  poster: z.object({
    url: z.string(),
  }),
});

export type MovieType = z.infer<typeof movieScheme>;
