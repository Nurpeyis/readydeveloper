import { AppLogo, ButtonRectangle } from "@/shared";
import { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="absolute top-0 flex w-full items-center justify-between px-6 py-6 sm:px-12 sm:py-8">
      <a href="/">
        <AppLogo />
      </a>

      <ButtonRectangle>Export</ButtonRectangle>
    </header>
  );
});
