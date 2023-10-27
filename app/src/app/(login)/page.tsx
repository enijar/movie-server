"use client";

import React from "react";
import { useRouter } from "next/navigation";
import * as Style from "@/app/(login)/login.styles";

export default function Login() {
  const [errors, setErrors] = React.useState<string[]>([]);
  const router = useRouter();

  return (
    <Style.Wrapper>
      <Style.Form
        noValidate
        onSubmit={async (event) => {
          event.preventDefault();
          const res = await fetch("/api/login", {
            method: "POST",
            body: new FormData(event.currentTarget),
          });
          const json = await res.json();
          if (json.loggedIn) {
            return router.push("/movies");
          }
          setErrors(json.errors ?? []);
        }}
      >
        <h1>Login</h1>
        <Style.FormErrors>
          {errors.map((error, index) => {
            return <Style.FormError key={index}>{error}</Style.FormError>;
          })}
        </Style.FormErrors>
        <Style.FormField>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" autoFocus />
        </Style.FormField>
        <Style.FormField>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </Style.FormField>
        <button type="submit">Login</button>
      </Style.Form>
    </Style.Wrapper>
  );
}
