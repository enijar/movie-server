"use client";

import styled from "styled-components";

type StarProps = {
  $active: boolean;
};

export const Star = styled.div<StarProps>`
  opacity: ${(props) => {
    return props.$active ? 1 : 0.2;
  }};

  svg {
    inline-size: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 0.2rem;
`;
