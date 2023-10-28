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

  const hostname = "yts.proxyninja.net";
  let posterUrl = video.poster.url;
  if (video.poster.url.startsWith("http")) {
    const url = new URL(posterUrl);
    url.hostname = hostname;
    if (!url.searchParams.has("v")) {
      url.searchParams.set("v", "1");
    }
    posterUrl = url.toString();
  } else {
    posterUrl = `${process.env.CMS_URL ?? ""}${video.poster.url}`;
  }

  return (
    <Style.Wrapper>
      <Style.Container>
        <Video {...video} posterUrl={posterUrl} />
      </Style.Container>
    </Style.Wrapper>
  );
}
