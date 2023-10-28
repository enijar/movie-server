"use client";

import styled, { keyframes } from "styled-components";
import Link from "next/link";

const imageLoading = keyframes`
  0%, 100% {
    background-color: #333333;
  }
  50% {
    background-color: #666666;
  }
`;

export const MovieCardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-template-rows: repeat(2, max-content);
  place-content: space-between;
  font-size: 0.7rem;
  gap: 0.5rem;

  h3 {
    grid-column: 1 / -1;
    font-size: 0.8rem;
    text-wrap: balance;
  }
`;

export const MovieCard = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content max-content;
  gap: 0.5rem;

  img {
    user-select: none;
    pointer-events: none;
    inline-size: 100%;
    object-fit: cover;
    aspect-ratio: 500 / 750;
    background-color: #333333;
    animation: ${imageLoading} 1500ms linear infinite;
  }
`;

export const MovieCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: max-content;
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 1rem;
  inline-size: 100%;
  max-inline-size: 60rem;
  margin-inline: auto;
`;

export const Wrapper = styled.main`
  inline-size: 100%;
  block-size: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable;
`;
