import React from "react";

const CloseIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.707"
    height="13.707"
    viewBox="0 0 13.707 13.707"
    {...props}
  >
    <g transform="translate(0.854 0.354)">
      <g transform="translate(-2)">
        <line
          y1="13"
          x2="13"
          transform="translate(1.5)"
          fill="none"
          stroke="#1c1c1c"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <line
          x1="13"
          y1="13"
          transform="translate(1.5)"
          fill="none"
          stroke="#1c1c1c"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
    </g>
  </svg>
);

export default CloseIcon;
