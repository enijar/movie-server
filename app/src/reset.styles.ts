"use client";

import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  :root {
    --color-primary: #3263b9;
    --color-background: #0f0f0f;
    --color-text: #f0f0f0;

    @media (prefers-color-scheme: light) {
      --color-text: #0f0f0f;
      --color-background: #f0f0f0;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    word-break: break-word;
  }

  html, body {
    inline-size: 100%;
    block-size: 100%;
    overflow: hidden;
  }

  html {
    font-family: system-ui, sans-serif;
    font-size: 20px;
    line-height: 1.2;
    color: var(--color-text);
    background-color: var(--color-background);
    color-scheme: light dark;
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
  }
`;
