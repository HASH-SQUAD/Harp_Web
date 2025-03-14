import React from 'react';

interface DownArrowProps {
  color?: string;
}

const DownArrow = ({ color = '#B9BBB9' }: DownArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
    >
      <path
        d="M13.7319 7.5L9.96921 11.25L6.20654 7.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownArrow;
