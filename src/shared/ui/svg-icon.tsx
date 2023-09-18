import { CSSProperties, FC, ReactNode, memo } from "react";

export const SVGIcon: FC<{
  children: ReactNode;
  style: CSSProperties;
}> = memo(({ children, style }) => (
  <svg
    className="inline-block h-[1em] w-[1em] shrink-0 select-none fill-none"
    focusable="false"
    height="24"
    style={style}
    viewBox="0 -960 960 960"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
));
