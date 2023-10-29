import * as Style from "@/app/movie/[id]/movie.style";
import { api, auth } from "@/util";
import { redirect } from "next/navigation";
import { movieScheme } from "@/types";
import Video from "@/components/video/video";

type Props = {
  params: { id: string };
};

export default async function Movie(props: Props) {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }
  const res = await api(`/api/movie/${props.params.id}`, { method: "GET" });
  const video = movieScheme.parse(await res.json());

  return (
    <Style.Wrapper>
      <Style.Container>
        <Video {...video} />
      </Style.Container>
    </Style.Wrapper>
  );
}
