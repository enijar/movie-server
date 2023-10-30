"use client";

import React from "react";
import { SearchWrapper } from "@/components/search/search.style";
import { MoviesListType } from "@/types";
import ArrowIcon from "@/icons/arrow-icon";

type Props = {
  pagination: MoviesListType["pagination"];
  onPrevPage: () => void;
  onNextPage: () => void;
  onChange: (query: string) => void;
};

export default function Search(props: Props) {
  return (
    <SearchWrapper>
      <button disabled={props.pagination.page === 1} onClick={props.onPrevPage} title="Previous Page">
        <ArrowIcon />
      </button>
      <input
        placeholder="Search for a movie title..."
        onChange={(event) => {
          props.onChange(event.currentTarget.value.trim());
        }}
      />
      <button
        disabled={props.pagination.page === props.pagination.pageCount}
        onClick={props.onNextPage}
        title="Next Page"
      >
        <ArrowIcon />
      </button>
    </SearchWrapper>
  );
}
