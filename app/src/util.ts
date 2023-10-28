import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function api(endpoint: string, init: RequestInit) {
  return fetch(`${process.env.CMS_URL ?? ""}${endpoint}`, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.CMS_API_TOKEN ?? ""}`,
    },
    next: {
      revalidate: 0,
    },
  });
}

export async function auth() {
  const token = cookies().get("jwt")?.value ?? "";
  if (token.trim().length === 0) {
    return false;
  }
  try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET ?? ""));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
