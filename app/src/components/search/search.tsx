"use client";

import React from "react";
import { SearchWrapper } from "@/components/search/search.style";

type Props = {
  onChange: (query: string) => void;
};

export default function Search(props: Props) {
  return (
    <SearchWrapper>
      <input
        placeholder="Search for a movie title..."
        onChange={(event) => {
          props.onChange(event.currentTarget.value.trim());
        }}
      />
    </SearchWrapper>
  );
}
