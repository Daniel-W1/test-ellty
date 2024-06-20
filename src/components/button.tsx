"use client";

import React from "react";

interface CustomButtomProps {
  text: string;
}

const CustomButtom = ({ text }: CustomButtomProps) => {
  const handleDone = () => {
    alert("Way to go!");
  };

  return (
    <button
      className="bg-button-primary w-full max-w-[340px] h-[40px] grid place-items-center mx-auto cursor-pointer active:opacity-80 text-primary"
      style={{
        borderRadius: "4px",
      }}
      onClick={handleDone}
    >
      {text}
    </button>
  );
};

export default CustomButtom;
