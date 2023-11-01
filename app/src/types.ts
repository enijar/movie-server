import { z } from "zod";

export const movieSchema = z.object({
  id: z.number(),
  title: z.string(),
  year: z.number(),
  synopsis: z.string(),
  rating: z.number(),
  poster: z.string(),
  torrents: z.array(
    z.object({
      url: z.string().url(),
      quality: z.string().min(1),
      seeds: z.number(),
      hash: z.string(),
    }),
  ),
});

export type MovieType = z.infer<typeof movieSchema>;

export const moviesListSchema = z.object({
  results: z.array(movieSchema),
  pagination: z.object({
    page: z.number(),
    pageSize: z.number(),
    pageCount: z.number(),
    total: z.number(),
  }),
});

export type MoviesListType = z.infer<typeof moviesListSchema>;
