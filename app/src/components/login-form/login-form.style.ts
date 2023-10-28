import styled from "styled-components";

export const Error = styled.div`
  color: crimson;
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Wrapper = styled.form`
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
