"use client";

import React from "react";
import * as Style from "@/components/video/video.style";
import screenfull from "screenfull";
import { type MovieType } from "@/types";
import Rating from "@/components/rating/rating";
import BackIcon from "@/icons/back-icon";

type Props = MovieType;

export default function Video(props: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const [year] = props.year.split("-");

  React.useEffect(() => {
    const video = videoRef.current;
    if (video === null) return;
    if (!screenfull.isEnabled) return;

    function fullscreen() {
      if (video === null) return;
      screenfull.request(video).catch((err) => console.error(err));
    }

    video.addEventListener("click", fullscreen);
    return () => {
      video.removeEventListener("click", fullscreen);
    };
  }, []);

  return (
    <Style.Wrapper>
      <Style.Back href="/movies">
        <BackIcon />
        <span>Back to movies</span>
      </Style.Back>
      <video ref={videoRef} poster={props.poster} />
      <h1>{props.title}</h1>
      <Style.Info>
        <Rating rating={props.rating} />
        <time>{year}</time>
      </Style.Info>
      <p>{props.synopsis}</p>
    </Style.Wrapper>
  );
}
