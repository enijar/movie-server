"use client";

import styled from "styled-components";

export const Wrapper = styled.main`
  inline-size: 100%;
  block-size: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  display: grid;
  grid-template-columns: minmax(max-content, 15rem);
  grid-template-rows: max-content;
  place-content: center;
  padding: 1rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
