import { PageKey } from "@/app/page";
import React from "react";

interface CustomCheckboxProps {
  checked: boolean;
  callback: (pagetype: PageKey) => void;
  type: PageKey;
}

const CustomCheckbox = ({ checked, callback, type }: CustomCheckboxProps) => {
  return (
    <div>
      <input
        type="checkbox"
        className="w-[25px] h-[25px] rounded-checkbox"
        onChange={() => callback(type)}
        checked={checked}
      />
    </div>
  );
};

export default CustomCheckbox;
