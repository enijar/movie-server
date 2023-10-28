import styled from "styled-components";

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  inline-size: 10rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  video {
    display: block;
    inline-size: 100%;
    aspect-ratio: 16 / 9;
    background-color: #333333;
  }

  h1 {
    font-size: 2rem;
  }

  p {
    max-inline-size: 75ch;
    font-size: 0.8rem;
    text-wrap: balance;
  }
`;
