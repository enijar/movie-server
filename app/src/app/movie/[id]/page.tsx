import * as Style from "@/app/movie/[id]/movie.style";
import { auth } from "@/util";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

export default async function Movie(props: Props) {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }

  return (
    <Style.Wrapper>
      <>Movie: {props.params.id}</>
    </Style.Wrapper>
  );
}
