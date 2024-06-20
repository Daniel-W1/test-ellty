import React from "react";
import CustomCheckbox from "./checkbox";

interface PageRowProps {
    text: string
}

const PageRow = (
    { text }: PageRowProps
) => {
  return (
    <div
      className="w-[370px] h-[42px] flex justify-between"
      style={{
        padding: "8px 15px 8px 22px",
      }}
    >
        <span className="text-primary">{text}</span>
        <CustomCheckbox checked={true} callback={() => console.log("Hello")} />
    </div>
  );
};

export default PageRow;
