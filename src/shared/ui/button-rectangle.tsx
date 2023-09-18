import { ButtonHTMLAttributes, memo } from "react";

export const ButtonRectangle = memo(
  ({ children }: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button className="select-none rounded-full bg-skyblue px-4 py-1.5 text-white drop-shadow-strict hover:bg-skyblue-dark active:drop-shadow-none">
        {children}
      </button>
    );
  },
);
