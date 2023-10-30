"use client";

import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  padding-block: 1rem;
  margin-block: -1rem;
  background-color: var(--color-background);

  button {
    display: block;
    inline-size: 1rem;
    background-color: transparent;
    border: none;
    padding: 0;

    &:last-child {
      svg {
        transform: rotate(180deg);
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  input {
    display: block;
    inline-size: 100%;
    max-inline-size: 15rem;
    border: 1px solid var(--color-primary);
    padding: 0.5rem;
  }
`;
