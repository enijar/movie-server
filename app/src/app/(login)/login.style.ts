"use client";

import styled from "styled-components";

export const FormError = styled.div`
  color: crimson;
`;

export const FormErrors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 100%;

  input,
  button {
    padding: 0.5rem;
  }

  input {
    border: 1px solid var(--color-primary);
  }

  button {
    background-color: var(--color-primary);
  }
`;

export const Wrapper = styled.main`
  inline-size: 100%;
  block-size: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-gutter: stable;
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
