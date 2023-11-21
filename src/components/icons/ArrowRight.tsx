import { FC } from "react";

export interface ArrowRightProps {
  className?: string;
}

export const ArrowRight: FC<ArrowRightProps> = ({ className }) => (
  <svg
    className={className}
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_279_13504)">
      <path
        d="M-0.106393 4.87451L10.1475 9.86487L-0.106393 14.8584V4.87451Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_279_13504">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
