import React from "react";
import * as Style from "@/components/rating/rating.style";
import StarIcon from "@/icons/star-icon";

type Props = {
  rating: number;
  maxRating?: number;
};

export default function Rating(props: Props) {
  const maxRating = props.maxRating ?? 10;
  const rating = Math.ceil(props.rating);
  return (
    <Style.Wrapper>
      {Array.from({ length: maxRating }).map((_, index) => {
        return (
          <Style.Star key={index} $active={index + 1 <= rating}>
            <StarIcon />
          </Style.Star>
        );
      })}
    </Style.Wrapper>
  );
}
