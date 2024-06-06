import Image from "next/image";
import {
  Tab,
  Button,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
const TabPanelComponent = () => {
  return (
    <TabGroup className="container">
        <TabList>
        <div className="flex items-center gap-2">
                <div className="block lg:hidden">
          <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-left h-4 w-4 "
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </Button>
        </div>
          <div className="hide-scrollbar -mb-px flex transform items-center gap-2 space-x-3 overflow-auto duration-300 ease-in-out">
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
                  <div className="block lg:hidden">
          <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 w-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right h-4 w-4 "
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        </div>
          </div>
        </TabList>
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
