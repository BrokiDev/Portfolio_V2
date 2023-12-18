import React, { FC } from 'react';

interface SvgComponentProps extends React.SVGProps<SVGSVGElement> {
  text: string; // Define the prop for dynamic text
}

const BoxSvgComponent: FC<SvgComponentProps> = ({ text, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={190}
      height={54}
      viewBox="0 0 201 54"
      fill="none"
      {...props}
    >
      <g
        style={{
          mixBlendMode: "lighten"
        }}
      >
        <path
          d="M25 .5h151c13.531 0 24.5 10.969 24.5 24.5v4c0 13.531-10.969 24.5-24.5 24.5H25C11.469 53.5.5 42.531.5 29v-4C.5 11.469 11.469.5 25 .5z"
          fill="#D9D9D9"
        />
        <path
          d="M25 .5h151c13.531 0 24.5 10.969 24.5 24.5v4c0 13.531-10.969 24.5-24.5 24.5H25C11.469 53.5.5 42.531.5 29v-4C.5 11.469 11.469.5 25 .5z"
          stroke="#000"
        />
      </g>
      <text x="69" y="36" fontFamily="Arial" fontSize="20" fill="black">
        {text}
      </text>
    </svg>
  );
};

export default BoxSvgComponent;
