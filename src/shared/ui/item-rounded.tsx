import { ReactNode, memo, useMemo } from "react";

type Props = {
  active?: boolean;
  icon: ReactNode;
};

export const ItemRounded = memo(({ active, icon }: Props) => {
  const activeClass = useMemo(
    () => (active ? "outline-skyblue/50" : "outline-transparent"),
    [active],
  );

  return (
    <div
      className={`${activeClass} my-2 inline-block cursor-pointer rounded-lg border-2 border-solid border-skyblue-light bg-skyblue-light p-1.5 outline outline-[4px] hover:bg-white`}
    >
      {icon}
    </div>
  );
});
