"use client";

import React from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

type Props = {
  children: React.ReactNode;
};

export default function Stylesheet(props: Props) {
  const styledComponentsStyleSheet = React.useMemo(() => {
    return new ServerStyleSheet();
  }, []);

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") {
    return <>{props.children}</>;
  }

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{props.children}</StyleSheetManager>;
}
