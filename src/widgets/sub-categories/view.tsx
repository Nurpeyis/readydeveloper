import { memo } from "react";
import {
  ButtonCircle,
  IconAccessibility,
  IconRun,
  IconWalk,
  ItemRounded,
} from "@/shared";

export const SubCategories = memo(() => {
  return (
    <div className="group relative">
      <div className="relative z-10 mt-5">
        <ButtonCircle icon={<IconAccessibility fontSize={24} />} />
      </div>

      <div className="absolute -bottom-4 -left-3 hidden h-[calc(100vh-112px)] w-[calc(100%+1.5rem)] flex-col items-center rounded-lg bg-white px-2 py-1 drop-shadow-[6px_6px_0px_skyblue] group-hover:flex">
        <ItemRounded icon={<IconAccessibility fontSize={30} />} active />
        <ItemRounded icon={<IconRun fontSize={30} />} />
        <ItemRounded icon={<IconWalk fontSize={30} />} />
      </div>
    </div>
  );
});
