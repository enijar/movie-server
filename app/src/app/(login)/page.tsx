import React from "react";
import * as Style from "@/app/(login)/login.style";
import LoginForm from "@/components/login-form/login-form";
import { auth } from "@/util";
import { redirect } from "next/navigation";

export default async function Login() {
  const authenticated = await auth();
  if (authenticated) {
    return redirect("/movies");
  }

  return (
    <Style.Wrapper>
      <LoginForm />
    </Style.Wrapper>
  );
}
