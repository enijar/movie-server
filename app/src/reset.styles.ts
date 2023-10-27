"use client";

import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
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
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  html {
    font-family: system-ui, sans-serif;
    font-size: 20px;
    color: #f0f0f0;
    background-color: #0f0f0f;
  }
`;
