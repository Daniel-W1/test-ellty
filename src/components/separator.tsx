import React from "react";

const Separator = () => {
  return (
    <div className="h-[20px] w-[370px] flex items-center"
        style={{
            padding: "10px 15px 10px 15px",
        }}
    >
      <div
        className="border-gray-200 w-full"
        style={{
          borderWidth: "1px",
        }}
      ></div>
    </div>
  );
};

export default Separator;
