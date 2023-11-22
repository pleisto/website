import { FC, MouseEventHandler } from "react";

export interface CloseProps {
  className?: string;
  onClick?: MouseEventHandler;
}

export const Close: FC<CloseProps> = ({ className, onClick, ...restProps }) => (
  <svg
    className={className}
    onClick={onClick}
    {...restProps}
    width="1em"
    height="1em"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.55806 4.55806C4.80214 4.31398 5.19786 4.31398 5.44194 4.55806L25.4419 24.5581C25.686 24.8021 25.686 25.1979 25.4419 25.4419C25.1979 25.686 24.8021 25.686 24.5581 25.4419L4.55806 5.44194C4.31398 5.19786 4.31398 4.80214 4.55806 4.55806Z"
      fill="#424242"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.4419 4.55806C25.686 4.80214 25.686 5.19786 25.4419 5.44194L5.44194 25.4419C5.19786 25.686 4.80214 25.686 4.55806 25.4419C4.31398 25.1979 4.31398 24.8021 4.55806 24.5581L24.5581 4.55806C24.8021 4.31398 25.1979 4.31398 25.4419 4.55806Z"
      fill="#424242"
    />
  </svg>
);
