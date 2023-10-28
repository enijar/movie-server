"use client";

import * as Style from "@/components/login-form/login-form.style";
import React from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [errors, setErrors] = React.useState<string[]>([]);
  const router = useRouter();

  return (
    <Style.Wrapper
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
      <Style.Errors>
        {errors.map((error, index) => {
          return <Style.Error key={index}>{error}</Style.Error>;
        })}
      </Style.Errors>
      <Style.Field>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" autoFocus />
      </Style.Field>
      <Style.Field>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </Style.Field>
      <button type="submit">Login</button>
    </Style.Wrapper>
  );
}
