import { redirect } from "next/navigation";
import * as Style from "@/app/movies/movies.style";
import { api, auth } from "@/util";
import { moviesListSchema } from "@/types";
import MoviesList from "@/components/movies-list/movies-list";

export default async function Movies() {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }
  const res = await api("/api/movies", { method: "GET" });
  const data = moviesListSchema.parse(await res.json());
  return (
    <Style.Wrapper>
      <MoviesList {...data} />
    </Style.Wrapper>
  );
}
