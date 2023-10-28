import { redirect } from "next/navigation";
import { auth } from "@/util";

export default async function Movies() {
  const authenticated = await auth();
  if (!authenticated) {
    return redirect("/");
  }
  return <main>wip: movies</main>;
}
