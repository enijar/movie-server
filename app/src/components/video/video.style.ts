import styled from "styled-components";
import Link from "next/link";

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  inline-size: 10rem;
`;

export const Back = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    inline-size: 1rem;
  }
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
    cursor: pointer;
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
