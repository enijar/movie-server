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

export const VideoContainer = styled.div<{ $poster: string }>`
  display: block;
  inline-size: 100%;
  aspect-ratio: 16 / 9;
  background-color: #333333;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  overflow: hidden;

  &:after {
    content: "";
    z-index: -1;
    inset: 0;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    background-image: url(${(props) => props.$poster});
    filter: blur(15px);
    transform: scale(1.2);
    inline-size: 100%;
    block-size: 100%;
  }

  video {
    display: block;
    inline-size: 100%;
    aspect-ratio: 16 / 9;
  }

  svg {
    max-inline-size: 100%;
    inline-size: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0 0 1px);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
  }

  p {
    max-inline-size: 75ch;
    font-size: 0.8rem;
    text-wrap: balance;
  }
`;
