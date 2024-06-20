import CustomButtom from "@/components/button";
import PageRow from "@/components/pagerow";
import Separator from "@/components/separator";

export default function Home() {
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
        <PageRow text="All pages" />
        <Separator />
        <PageRow text="Page 1" />
        <PageRow text="Page 2" />
        <PageRow text="Page 3" />
        <PageRow text="Page 4" />
        <Separator />
        <CustomButtom text="Done"/>
      </div>
    </main>
  );
}
