import React from "react";

const HamburgerIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.749"
    height="9.88"
    viewBox="0 0 14.749 9.88"
    {...props}
  >
    <g transform="translate(0 0.5)">
      <g transform="translate(0 0)">
        <line
          x1="14.749"
          transform="translate(0 8.88)"
          fill="none"
          stroke="#1c1c1c"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <line
          x1="14.749"
          fill="none"
          stroke="#1c1c1c"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <line
          x1="14.749"
          transform="translate(0 4.44)"
          fill="none"
          stroke="#1c1c1c"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
    </g>
  </svg>
);

export default HamburgerIcon;
