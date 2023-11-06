import type { Metadata } from "next";
import React from "react";
import Stylesheet from "@/stylesheet";
import { Reset } from "@/reset.styles";

export const metadata: Metadata = {
  title: "🍿 Movie Server",
  description: "Watch movies in your browser.",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Stylesheet>
          <Reset />
          <>{props.children}</>
        </Stylesheet>
      </body>
    </html>
  );
}
