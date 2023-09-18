import { memo } from "react";

export const AppLogo = memo(() => {
  return (
    <div className="before relative cursor-pointer select-none before:absolute before:-right-1 before:top-1/2 before:z-0 before:block before:h-8 before:w-8 before:-translate-y-1/2 before:rounded-full before:bg-skyblue">
      <span className="relative z-10 text-white">readydeveloper.me</span>
    </div>
  );
});
