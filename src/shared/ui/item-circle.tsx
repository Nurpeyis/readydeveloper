import { ReactNode, memo, useMemo } from "react";

type Props = {
  active?: boolean;
  icon: ReactNode;
  label: string;
};

export const ItemCircle = memo(({ active, icon, label }: Props) => {
  const activeClass = useMemo(
    () => (active ? "outline-skyblue/25" : "outline-transparent"),
    [active],
  );

  return (
    <label className="group flex cursor-pointer flex-col items-center">
      {label && (
        <span className="mb-2.5 text-xs text-white group-hover:text-skyblue-light">
          {label}
        </span>
      )}

      <div
        className={`${activeClass} mx-2 flex  rounded-full border-transparent bg-white p-1.5 outline outline-[4px] group-hover:bg-skyblue-light`}
      >
        {icon}
      </div>
    </label>
  );
});
