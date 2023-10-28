import React from "react";

type Props = React.SVGProps<SVGSVGElement>;

export default function StarIcon(props: Props) {
  return (
    <svg enableBackground="new 0 0 16.7 15.9" viewBox="0 0 16.7 15.9" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="m5.7 5.1s-3.2.4-5.3.6c-.1 0-.3.2-.4.4s0 .4.1.5c1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1.1 5.2c0 .2 0 .4.2.5s.4.1.5 0c1.8-1 4.6-2.6 4.6-2.6s2.8 1.6 4.6 2.6c.2.1.4.1.5 0 .2-.1.2-.3.2-.5-.4-2.1-1.1-5.2-1.1-5.2s2.6-2.2 4.1-3.6c.1-.1.2-.3.1-.5s-.2-.3-.4-.3c-2.1-.3-5.2-.7-5.2-.7s-1.3-2.9-2.2-4.8c-.1-.2-.2-.3-.5-.3s-.3.1-.4.3c-.9 1.9-2.2 4.8-2.2 4.8z"
      />
    </svg>
  );
}
