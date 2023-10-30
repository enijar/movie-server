"use client";

import React from "react";
import * as Style from "@/components/movies-list/movies-list.style";
import { type MoviesListType } from "@/types";
import Search from "@/components/search/search";
import Rating from "@/components/rating/rating";

export default function MoviesList(props: MoviesListType) {
  const [query, setQuery] = React.useState("");
  const [movies, setMovies] = React.useState(props.results);
  const [pagination, setPagination] = React.useState(props.pagination);

  React.useEffect(() => {
    if (query === "") {
      setMovies(props.results);
      setPagination(props.pagination);
      return;
    }
    fetch(`/api/search?query=${query}`)
      .then((res) => res.json())
      .then((res) => {
        setMovies(res.results);
        setPagination(res.pagination);
      })
      .catch(console.error);
  }, [query, props]);

  return (
    <Style.MoviesListWrapper>
      <Search onChange={setQuery} />
      <Style.MoviesListItems>
        {movies.map((movie) => {
          const [year] = movie.year.split("-");
          return (
            <Style.MoviesListItem key={movie.id} href={`/movie/${movie.id}`}>
              <img src={movie.poster} alt="" loading="lazy" />
              <Style.MoviesListItemInfo>
                <Rating rating={movie.rating} />
                <time>{year}</time>
                <h3>{movie.title}</h3>
              </Style.MoviesListItemInfo>
            </Style.MoviesListItem>
          );
        })}
      </Style.MoviesListItems>
    </Style.MoviesListWrapper>
  );
}
