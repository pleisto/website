export default function IconMenu({
  width = 30,
  height = 30,
  className,
  ...restProps
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 6C4 5.72386 4.22386 5.5 4.5 5.5H20.5C20.7761 5.5 21 5.72386 21 6C21 6.27614 20.7761 6.5 20.5 6.5H4.5C4.22386 6.5 4 6.27614 4 6Z"
        fill="#424242"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 12.5C4 12.2239 4.22386 12 4.5 12H20.5C20.7761 12 21 12.2239 21 12.5C21 12.7761 20.7761 13 20.5 13H4.5C4.22386 13 4 12.7761 4 12.5Z"
        fill="#424242"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 19C4 18.7239 4.22386 18.5 4.5 18.5H20.5C20.7761 18.5 21 18.7239 21 19C21 19.2761 20.7761 19.5 20.5 19.5H4.5C4.22386 19.5 4 19.2761 4 19Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.68195 9.31783C7.87721 9.51309 7.87722 9.82967 7.68196 10.0249L5.2071 12.4998L7.68196 14.9747C7.87722 15.17 7.87721 15.4866 7.68195 15.6818C7.48669 15.8771 7.1701 15.8771 6.97484 15.6818L4.14644 12.8534C3.95119 12.6581 3.95119 12.3415 4.14644 12.1463L6.97484 9.31784C7.1701 9.12257 7.48669 9.12257 7.68195 9.31783Z"
        fill="black"
      />
    </svg>
  );
}
