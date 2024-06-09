"use client";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import clsx from "clsx";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import { formatIDR } from "@/lib/formatIDR";
import { PayProps } from "./PayProps";
const special = [
  { name: "QRIS", admin: "0.7", image: "/IMG_1051.webp" },
  { name: "Go-Pay", admin: "2", image: "/IMG_1052.webp" },
];
const Pay = ({ selectedPrice }: PayProps) => {
  let [selected, setSelected] = useState(null);
  return (
    <section className="relative rounded-xl bg-card/50 shadow-2xl" id="2">
      <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
        <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
          4
        </div>
        <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
          Pilih Pembayaran
        </h2>
      </div>
      <div className="p-4">
        <dl className="flex w-full flex-col space-y-4">
          <div
            className="flex w-full transform flex-col justify-between rounded-xl bg-background/50 text-left text-sm font-medium duration-300 focus:outline-none"
            data-headlessui-state
          >
            <Disclosure>
              {({ open }) => (
                <>
                  <div>
                    <DisclosureButton className="w-full rounded-t-xl bg-card text-card-foreground disabled:opacity-75">
                      <div className="flex w-full items-center justify-between px-4 py-2">
                        <span className="transform text-sm/6 font-medium leading-7 duration-300">
                          E-Wallet
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={clsx("w-5", open && "rotate-180")}
                          />
                        </span>
                      </div>
                    </DisclosureButton>
                    <div className="overflow-hidden">
                      <DisclosurePanel className="px-4 pb-4 pt-2 text-sm">
                        <RadioGroup value={selected} onChange={setSelected}>
                          <div
                            className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3"
                            role="none"
                          >
                            {special.map((plan) => (
                              <Radio
                                as="div"
                                key={plan.name}
                                value={plan}
                                className={`relative ${
                                  plan === selected
                                    ? "flex cursor-pointer rounded-xl border border-transparent p-2.5 shadow-sm outline-none md:p-3 bj-shadow bg-foreground ring-2 ring-primary ring-offset-2 ring-offset-foreground/75"
                                    : "flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 shadow-sm outline-none md:p-3"
                                }`}
                              >
                                <span className="flex w-full">
                                  <span className="flex w-full flex-col justify-between">
                                    <div>
                                      <img
                                        alt="Logo"
                                        src={plan.image}
                                        className="max-h-5"
                                      />
                                    </div>
                                    <div className="flex w-full items-center justify-between">
                                      <div className="mt-2 w-full">
                                        <div className="mt-1.5 flex items-center gap-2">
                                          <div className="relative z-30 text-xs font-semibold leading-4 text-background">
                                            {selectedPrice &&
                                              formatIDR(selectedPrice)}
                                          </div>
                                        </div>
                                        <div className="mt-0.5 h-px w-full bg-border"></div>
                                        <div>
                                          <span className="block text-xxs italic text-background">
                                            Biaya Layanan +{plan.admin}%
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </span>
                              </Radio>
                            ))}
                          </div>
                        </RadioGroup>
                      </DisclosurePanel>
                      <div className="w-full rounded-b-xl bg-foreground/50 px-4 py-3">
                        <div className="flex justify-end gap-x-2">
                          <div className="relative aspect-[6/2] w-10">
                            <Image
                              alt="Logo"
                              className="object-scale-down"
                              src="/IMG_1051.webp"
                              fill
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </Disclosure>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Pay;
