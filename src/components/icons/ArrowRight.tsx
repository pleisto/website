import { FC } from "react";

export interface ArrowRightProps {
  className?: string;
}

export const ArrowRight: FC<ArrowRightProps> = ({ className }) => (
  <svg
    className={className}
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.91508 3.89941L12.1182 7.8917L3.91508 11.8866V3.89941Z"
      fill="currentColor"
    />
  </svg>
);
