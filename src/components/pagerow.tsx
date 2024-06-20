import React from "react";
import CustomCheckbox from "./checkbox";
import { PageKey } from "@/app/page";

interface PageRowProps {
    text: string,
    callback: (pagetype: PageKey) => void,
    type: PageKey,
    checked: boolean
}

const PageRow = (
    { text, callback, type, checked }: PageRowProps
) => {
  return (
    <div
      className="w-[370px] h-[42px] flex justify-between"
      style={{
        padding: "8px 15px 8px 22px",
      }}
    >
        <span className="text-primary">{text}</span>
        <CustomCheckbox checked={checked} callback={callback} type={type} />
    </div>
  );
};

export default PageRow;
