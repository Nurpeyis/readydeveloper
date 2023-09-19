import { memo } from "react";
import { IconAccessibility, IconPalette, ItemCircle } from "@/shared";

export const Categories = memo(() => {
  return (
    <div className="mr-8 flex flex-1 items-center overflow-x-auto sm:justify-end">
      <ItemCircle
        icon={<IconAccessibility fontSize={30} />}
        label="Poses"
        active
      />
      <ItemCircle icon={<IconPalette fontSize={30} />} label="Colors" />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Hair"
      />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Bird"
      />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Faces"
      />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Hats"
      />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Logo"
      />
      <ItemCircle
        icon={<div className="h-[30px] w-[30px]"></div>}
        label="Lights"
      />
    </div>
  );
});
