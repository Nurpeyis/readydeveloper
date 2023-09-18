import { memo } from "react";
import { Category } from "./ui";
import { IconAccessibility, IconPalette } from "@/shared";

export const Categories = memo(() => {
  return (
    <div className="flex items-center px-8">
      <Category
        icon={<IconAccessibility fontSize={30} />}
        label="Poses"
        active
      />
      <Category icon={<IconPalette fontSize={30} />} label="Colors" />
      <Category icon={<div className="h-[30px] w-[30px]"></div>} label="Hair" />
      <Category icon={<div className="h-[30px] w-[30px]"></div>} label="Bird" />
      <Category
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Faces"
      />
      <Category icon={<div className="h-[30px] w-[30px]"></div>} label="Hats" />
      <Category icon={<div className="h-[30px] w-[30px]"></div>} label="Logo" />
      <Category
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Lights"
      />
    </div>
  );
});
