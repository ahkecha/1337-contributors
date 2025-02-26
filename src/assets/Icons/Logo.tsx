import React from "react";

export const Logo: React.FC<{ color?: string }> = ({ color = "black" }) => (
  <svg
    width="76"
    height="20"
    viewBox="0 0 76 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_4_19)">
      <path
        d="M2.8333 17.6623H5.92418V2.33766H2.31816V5.45455H0V0H8.75748V17.6623H11.8484V20H2.8333V17.6623Z"
        fill={color}
      />
      <path
        d="M21.3785 17.6623H30.6512V10.9091H22.1513V8.57143H30.6512V2.33766H21.3785V0H33.4845V20H21.3785V17.6623Z"
        fill={color}
      />
      <path
        d="M42.2419 17.6623H51.5146V10.9091H43.0147V8.57143H51.5146V2.33766H42.2419V0H54.3479V20H42.2419V17.6623Z"
        fill={color}
      />
      <path
        d="M72.6355 2.33766H64.9084V7.27273H62.5902V0H75.2113V20H72.6355V2.33766Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_4_19">
        <rect width="76" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
