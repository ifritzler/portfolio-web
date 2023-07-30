import { MainHeader } from "@/components/MainHeader";
import { Presentation } from "@/components/Presentation";
import { ProyectsHeader } from "@/components/ProyectsHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col flex-1 gap-10 lf:gap-20">
        <MainHeader />
        <Presentation />
      </div>
      <ProyectsHeader />
    </>
  );
}
