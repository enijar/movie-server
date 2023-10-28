import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { z, ZodError } from "zod";
import { SignJWT } from "jose";
import { api } from "@/util";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(Object.fromEntries((await req.formData()).entries()));
    const res = await api("/api/app-user/login", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (json.data === null) {
      return NextResponse.json({ errors: ["Invalid login details"] }, { status: 401 });
    }
    const iat = Math.floor(Date.now() / 1000);
    const exp = (iat + 60) * 60 * 24 * 30; // 30 days
    const jwt = await new SignJWT({ id: json.id })
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setExpirationTime(exp)
      .setIssuedAt(iat)
      .setNotBefore(iat)
      .sign(new TextEncoder().encode(process.env.JWT_SECRET ?? ""));
    cookies().set("jwt", jwt, { httpOnly: true });
    return NextResponse.json({ loggedIn: true });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ errors: err.errors.map((error) => error.message) }, { status: 422 });
    }
    console.error(err);
    return NextResponse.json({ errors: ["Internal server error"] }, { status: 500 });
  }
}
