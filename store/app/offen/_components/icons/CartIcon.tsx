import React from "react";

const CartIcon: React.FC<JSX.IntrinsicElements["svg"]> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.275"
    height="16.003"
    viewBox="0 0 13.275 16.003"
    {...props}
  >
    <g transform="translate(-336.53 -30.393)">
      <path
        d="M12.775,17.284V7.933H.5v9.351a1.56,1.56,0,0,0,1.561,1.561h9.154A1.56,1.56,0,0,0,12.775,17.284Z"
        transform="translate(336.53 27.051)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
      <path
        d="M7,4.591V2.545A2.044,2.044,0,0,1,9.05.5h1.023a2.045,2.045,0,0,1,2.046,2.045V4.591"
        transform="translate(333.606 30.393)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export default CartIcon;
