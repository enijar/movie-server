import { type NextRequest, NextResponse } from "next/server";
import RangeParser from "range-parser";
import pump from "pump";
import Torrent from "@/services/torrent";
import { api } from "@/util";
import { movieSchema } from "@/types";

type Data = {
  params: {
    id: string;
  };
};

export async function GET(req: NextRequest, data: Data) {
  const apiResponse = await api(`/api/movie/${data.params.id}`, {
    method: "GET",
  });
  const movie = movieSchema.parse(await apiResponse.json());
  const torrent = await Torrent.download(movie);
  if (torrent === null) {
    return NextResponse.next({ status: 404 });
  }
  const headerRange = req.headers.get("range") ?? "";
  const fileSize = torrent.file.length;
  const parsedRange = headerRange ? RangeParser(fileSize, headerRange) : null;
  const range = Array.isArray(parsedRange) ? parsedRange[0] : null;

  const res = NextResponse.next();

  let status = 200;

  res.headers.set("Accept-Ranges", "bytes");
  res.headers.set("Content-Type", "video/mp4");
  res.headers.set("Content-Length", fileSize.toString());

  if (range !== null) {
    const bytes = `bytes ${range.start}-${range.end}/${fileSize}`;
    status = 206;
    res.headers.set("Content-Range", bytes);
  }

  // todo: confirm we should return early for range = null
  if (req.method === "HEAD" || range === null) {
    return res;
  }

  pump(torrent.file.createReadStream(range), () => {
    torrent.file.deselect();
  });

  return NextResponse.next({ status });
}
