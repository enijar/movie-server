"use client";

import * as Style from "@/components/video/video.style";
import { MovieType } from "@/types";
import Rating from "@/components/rating/rating";

type Props = MovieType & {
  posterUrl: string;
};

export default function Video(props: Props) {
  const [year] = props.year.split("-");

  return (
    <Style.Wrapper>
      <video poster={props.posterUrl} />
      <h1>{props.title}</h1>
      <Style.Info>
        <Rating rating={props.rating} />
        <time>{year}</time>
      </Style.Info>
      <p>{props.synopsis}</p>
    </Style.Wrapper>
  );
}
