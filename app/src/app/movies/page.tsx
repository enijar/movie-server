import { redirect } from "next/navigation";
import * as Style from "@/app/movies/movies.styles";
import { auth } from "@/util";

export default async function Movies() {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }
  return (
    <Style.Wrapper>
      <span>wip: movies</span>
    </Style.Wrapper>
  );
}
