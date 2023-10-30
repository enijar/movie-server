"use client";

import React from "react";
import * as Style from "@/components/movies-list/movies-list.style";
import { moviesListSchema, type MoviesListType } from "@/types";
import Search from "@/components/search/search";
import Rating from "@/components/rating/rating";

async function fetchMovies(query: string, page: number) {
  const res = await fetch(`/api/search?query=${query}&page=${page}`);
  const json = await res.json();
  return moviesListSchema.parse(json);
}

function resetScroll() {
  const main = document.querySelector("main");
  if (main === null) {
    return;
  }
  main.scrollTop = 0;
}

export default function MoviesList(props: MoviesListType) {
  const lastPageRef = React.useRef(props.pagination.page);
  const queryRef = React.useRef("");
  const [movies, setMovies] = React.useState(props.results);
  const [pagination, setPagination] = React.useState(props.pagination);

  React.useEffect(() => {
    if (pagination.page === lastPageRef.current) {
      return;
    }
    lastPageRef.current = pagination.page;
    fetchMovies(queryRef.current, pagination.page).then((data) => {
      setMovies(data.results);
      setPagination(data.pagination);
      resetScroll();
    });
  }, [pagination.page]);

  return (
    <Style.MoviesListWrapper>
      <Search
        pagination={pagination}
        onPrevPage={() => {
          setPagination((pagination) => {
            const page = pagination.page - 1;
            if (page < 1) {
              return pagination;
            }
            return { ...pagination, page };
          });
        }}
        onNextPage={() => {
          setPagination((pagination) => {
            const page = pagination.page + 1;
            if (page > pagination.pageCount) {
              return pagination;
            }
            return { ...pagination, page };
          });
        }}
        onChange={async (query) => {
          queryRef.current = query;
          fetchMovies(queryRef.current, 1).then((data) => {
            setMovies(data.results);
            setPagination(data.pagination);
            resetScroll();
          });
        }}
      />
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
