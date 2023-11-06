"use client";

import React from "react";
import * as Style from "@/components/video/video.style";
import screenfull from "screenfull";
import { type MovieType } from "@/types";
import Rating from "@/components/rating/rating";
import ArrowIcon from "@/icons/arrow-icon";
import { VideoContainer } from "@/components/video/video.style";
import PlayIcon from "@/icons/play-icon";

type Props = MovieType;

export default function Video(props: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (video === null) return;
    if (!screenfull.isEnabled) return;

    function fullscreen() {
      if (video === null) return;
      video.play().catch(console.error);
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
        <ArrowIcon />
        <span>Back to movies</span>
      </Style.Back>
      <Style.VideoContainer $poster={props.poster}>
        <video ref={videoRef} poster={props.poster} src={`${process.env.NEXT_PUBLIC_STREAM_URL}/watch/${props.id}`} />
        <PlayIcon />
      </Style.VideoContainer>
      <h1>{props.title}</h1>
      <Style.Info>
        <Rating rating={props.rating} />
        <time>{props.year}</time>
      </Style.Info>
      <p>{props.synopsis}</p>
    </Style.Wrapper>
  );
}
