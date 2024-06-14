import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";
import Banner from "@/components/home/Banner";
import Populer from "@/components/home/Populer";
import Foot from "@/components/foot";
import TabPanelComponent from "@/components/home/Panel";
export default function Home() {
  return (
    <main className="relative bg-background">
      <Banner />
      <div className="flex flex-col gap-y-8 pt-8">
        <Populer />
        <TabPanelComponent />
      </div>
      <Foot />
    </main>
  );
}
