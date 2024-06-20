"use client";

import CustomButtom from "@/components/button";
import PageRow from "@/components/pagerow";
import Separator from "@/components/separator";
import { useState } from "react";

export type PageKey = "page1" | "page2" | "page3" | "page4" | "all";

export default function Home() {
  const [checked, setChecked] = useState({
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleCheck = (page: PageKey) => {
    if (page === "all") {
      const allChecked = Object.values(checked).every(Boolean);
      setChecked({
        page1: !allChecked,
        page2: !allChecked,
        page3: !allChecked,
        page4: !allChecked,
      });
    } else {
      setChecked({
        ...checked,
        [page]: !checked[page],
      });
    }
  };

  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <div
        style={{
          borderRadius: "1px",
          padding: "10px 0",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
        className="flex flex-col border-4 border-gray-100"
      >
        <PageRow
          text="All pages"
          callback={handleCheck}
          type="all"
          checked={Object.values(checked).every(Boolean)}
        />
        <Separator />
        <PageRow
          text="Page 1"
          callback={handleCheck}
          type="page1"
          checked={checked["page1"]}
        />
        <PageRow
          text="Page 2"
          callback={handleCheck}
          type="page2"
          checked={checked["page2"]}
        />
        <PageRow
          text="Page 3"
          callback={handleCheck}
          type="page3"
          checked={checked["page3"]}
        />
        <PageRow
          text="Page 4"
          callback={handleCheck}
          type="page4"
          checked={checked["page4"]}
        />
        <Separator />
        <CustomButtom text="Done" />
      </div>
    </main>
  );
}
