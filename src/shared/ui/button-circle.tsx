import { ButtonHTMLAttributes, ReactNode, memo } from "react";

export const ButtonCircle = memo(
  ({
    icon,
    label,
  }: Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    icon: ReactNode;
    label?: string;
  }) => {
    return (
      <button className="group flex cursor-pointer select-none items-center  text-white hover:text-skyblue-light">
        <div className="flex rounded-full border border-solid border-skyblue bg-white p-2.5 text-white drop-shadow-[3px_3px_0px_skyblue] group-hover:bg-skyblue-light group-active:drop-shadow-none">
          {icon}
        </div>

        {label && <span className="ml-4 text-inherit">{label}</span>}
      </button>
    );
  },
);
