import { ReactNode, memo, useMemo } from "react";

type Props = {
  active?: boolean;
  icon: ReactNode;
  label: string;
  variant?: "circle" | "rounded";
};

export const Category = memo(
  ({ active, icon, label, variant = "circle" }: Props) => {
    const activeClass = useMemo(
      () => (active ? "outline-skyblue/25" : "outline-transparent"),
      [active],
    );

    const variantClass = useMemo(
      () => (variant === "circle" ? "rounded-full" : "rounded-lg"),
      [variant],
    );

    return (
      <label className="group flex cursor-pointer flex-col items-center">
        <span className="mb-2.5 text-xs text-white group-hover:text-skyblue-light">
          {label}
        </span>

        <div
          className={`mx-2 flex ${activeClass} ${variantClass} border-transparent bg-white p-1.5 outline outline-[4px] group-hover:bg-skyblue-light`}
        >
          {icon}
        </div>
      </label>
    );
  },
);
