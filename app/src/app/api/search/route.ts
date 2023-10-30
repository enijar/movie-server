import { NextRequest, NextResponse } from "next/server";
import { api } from "@/util";

export async function GET(req: NextRequest) {
  try {
    const res = await api(`/api/movies/search?${req.nextUrl.searchParams.toString()}`, {
      method: "GET",
    });
    return NextResponse.json(await res.json());
  } catch (err) {
    console.error(err);
    return NextResponse.json({ results: [], pagination: { page: 1, pageSize: 10, pageCount: 1, total: 0 } });
  }
}
