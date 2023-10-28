"use client";

import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
  :root {
    --color-primary: #3263b9;
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
    color: #f0f0f0;
    background-color: #0f0f0f;
    color-scheme: light dark;

    @media (prefers-color-scheme: light) {
      color: #0f0f0f;
      background-color: #f0f0f0;
    }
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
  }
`;
