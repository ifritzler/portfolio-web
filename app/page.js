import { MainHeader } from "@/components/MainHeader";
import { Presentation } from "@/components/Presentation";
import { ProyectsHeader } from "@/components/ProyectsHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto lg:gap-10 justify-around mt-[-35px]">
        <MainHeader />
        <Presentation />
      </div>
      <ProyectsHeader />
    </>
  );
}
