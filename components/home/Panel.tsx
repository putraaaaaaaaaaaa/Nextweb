import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
const TabPanelComponent = () => {
  return (
    <TabGroup className="container">
      <div className="relative">
        <TabList>
          <div className="hide-scrollbar -mb-px flex space-x-3 overflow-auto py-8">
            <Tab
              key="Topup"
              className="whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground outline-none duration-300 data-[selected]:bg-primary"
            >
              Topup
            </Tab>
            <Tab
              key="Voucher"
              className="whitespace-nowrap rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground outline-none duration-300 data-[selected]:bg-primary"
            >
              Voucher
            </Tab>
          </div>
        </TabList>
      </div>
      <TabPanels className="mt-3">
        <TabPanel key="Topup">
          <div className="mb-4 grid grid-cols-3 gap-4 sm:mb-8 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-5 xl:grid-cols-6">
            <a
              className="group relative transform overflow-hidden rounded-2xl bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background"
              href="/order/mobile-legends"
            >
              <Image
                alt="banner"
                className="aspect-[4/6] object-cover object-center"
                src="/IMG_1227.png"
                width={192}
                height={288}
              />
              <article className="absolute inset-x-0 -bottom-10 z-10 flex transform flex-col px-3 transition-all duration-300 ease-in-out group-hover:bottom-3 sm:px-4 group-hover:sm:bottom-4">
                <h2 className="truncate text-sm font-semibold text-secondary-200 sm:text-base">
                  Mobile Legends
                </h2>
                <p className="truncate text-xxs text-secondary-400 sm:text-xs">
                  Moonton
                </p>
              </article>
              <div className="absolute inset-0 transform bg-gradient-to-t from-transparent transition-all duration-300 group-hover:from-background"></div>
            </a>
          </div>
        </TabPanel>
        <TabPanel key="Voucher">Voucher</TabPanel>
      </TabPanels>
    </TabGroup>
  );
};

export default TabPanelComponent;
