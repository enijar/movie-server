import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { api } from "@/util";

const schema = z.object({
  email: z.string().min(1, "Email is required").email("Email is invalid"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(Object.fromEntries((await req.formData()).entries()));
    const res = await api("/api/app-users", {
      method: "GET",
      params: [["filters[email][$eq]", `${data.email}`]],
    });
    const json = await res.json();
    if (json.data.length === 0) {
      return NextResponse.json({ errors: ["Invalid login details"] }, { status: 401 });
    }
    console.log(JSON.stringify(json, null, 2));
    return NextResponse.json({ loggedIn2: true });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json({ errors: err.errors.map((error) => error.message) }, { status: 422 });
    }
    console.error(err);
    return NextResponse.json({ errors: ["Internal server error"] }, { status: 500 });
  }
}
