import { redirect } from "next/navigation";
import { z } from "zod";
import * as Style from "@/app/movies/movies.style";
import { api, auth } from "@/util";
import Rating from "@/components/rating/rating";

const hostname = "yts.proxyninja.net";

const schema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      year: z.string(),
      synopsis: z.string(),
      rating: z.number(),
      poster: z.object({
        url: z.string(),
      }),
    }),
  ),
  pagination: z.object({
    page: z.number(),
    pageSize: z.number(),
    pageCount: z.number(),
    total: z.number(),
  }),
});

export default async function Movies() {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }
  const res = await api("/api/movies", { method: "GET" });
  const data = schema.parse(await res.json());
  data.results = data.results.map((result) => {
    let posterUrl = result.poster.url;
    if (result.poster.url.startsWith("http")) {
      const url = new URL(posterUrl);
      url.hostname = hostname;
      if (!url.searchParams.has("v")) {
        url.searchParams.set("v", "1");
      }
      posterUrl = url.toString();
    } else {
      posterUrl = `${process.env.CMS_URL ?? ""}${result.poster.url}`;
    }
    return {
      ...result,
      poster: { ...result.poster, url: posterUrl },
    };
  });
  return (
    <Style.Wrapper>
      <Style.MovieCards>
        {data.results.map((movie) => {
          const [year] = movie.year.split("-");
          return (
            <Style.MovieCard key={movie.id} href={`/movie/${movie.id}`}>
              <img src={movie.poster.url} alt="" loading="lazy" />
              <Style.MovieCardInfo>
                <Rating rating={movie.rating} />
                <time>{year}</time>
                <h3>{movie.title}</h3>
              </Style.MovieCardInfo>
            </Style.MovieCard>
          );
        })}
      </Style.MovieCards>
    </Style.Wrapper>
  );
}
