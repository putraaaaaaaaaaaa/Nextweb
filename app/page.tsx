import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";
import Banner from "@/components/home/Banner";
import Populer from "@/components/home/Populer";
import TabPanelComponent from "@/components/home/Panel";
export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <div className="flex flex-col gap-y-8 pt-8">
        <Populer />
        <TabPanelComponent />
      </div>
      <div className="mt-12 bg-gradient-to-b from-transparent from-[70%] to-secondary">
<Image src="https://cdn.bangjeff.com/meta/background-footer.png"
alt="" width={700} height={475} className="object-cover object-bottom"/>
</div>
    </main>
  );
}
