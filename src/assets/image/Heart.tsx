// Heart.tsx
import React from 'react';
import { theme } from 'lib/utils/style/theme';

interface HeartProps {
  isFilled?: boolean;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
  width?: string;
  height?: string;
}

const Heart = ({ isFilled, onClick, width = '24', height = '24' }: HeartProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.87187 11.5983C1.79887 8.24832 3.05287 4.41932 6.56987 3.28632C8.41987 2.68932 10.4619 3.04132 11.9999 4.19832C13.4549 3.07332 15.5719 2.69332 17.4199 3.28632C20.9369 4.41932 22.1989 8.24832 21.1269 11.5983C19.4569 16.9083 11.9999 20.9983 11.9999 20.9983C11.9999 20.9983 4.59787 16.9703 2.87187 11.5983Z"
      stroke="#7A7A7A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={isFilled ? `${theme.sub.red}` : 'none'}
    />
  </svg>
);

export default Heart;