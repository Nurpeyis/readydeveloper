import { ButtonCircle, IconVideoCamera } from "@/shared";
import { memo } from "react";

export const CameraNav = memo(() => {
  return (
    <ul className="absolute left-6 top-1/2 -translate-y-1/2 sm:left-12">
      <li className="my-4">
        <ButtonCircle icon={<IconVideoCamera fontSize={16} />} label="Front" />
      </li>
      <li className="my-4">
        <ButtonCircle icon={<IconVideoCamera fontSize={16} />} label="Side" />
      </li>
      <li className="my-4">
        <ButtonCircle
          icon={<IconVideoCamera fontSize={16} />}
          label="Closeup"
        />
      </li>
    </ul>
  );
});
