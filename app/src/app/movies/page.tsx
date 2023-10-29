import { redirect } from "next/navigation";
import { z } from "zod";
import * as Style from "@/app/movies/movies.style";
import { api, auth } from "@/util";
import Rating from "@/components/rating/rating";
import { movieScheme } from "@/types";

const schema = z.object({
  results: z.array(movieScheme),
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
  return (
    <Style.Wrapper>
      <Style.MovieCards>
        {data.results.map((movie) => {
          const [year] = movie.year.split("-");
          return (
            <Style.MovieCard key={movie.id} href={`/movie/${movie.id}`}>
              <img src={movie.poster} alt="" loading="lazy" />
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
