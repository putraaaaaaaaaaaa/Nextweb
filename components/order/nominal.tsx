"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
const special = [
  { name: "Weekly Diamond Pass", harga: " 28000", image: "/IMG_1438.webp" },
  { name: "Twilight Pass", harga: " 150000", image: "/IMG_1439.webp" },
];
const topup = [
  { name: "5 Diamonds", harga: " 1500", image: "/IMG_1441.webp" },
  { name: "10 Diamonds", harga: " 3000", image: "/IMG_1441.webp" },
];
import { formatIDR } from "@/lib/formatIDR";
import { NominalProps } from "./NominalProps";
import { Option } from "./Option";
const Nominal = ({ onSelect }: NominalProps) => {
  let [selected, setSelected] = useState<Option>({ name: "", harga: 0, image: "" });
  const handleSelect = (option: Option) => {
    setSelected(option);
    onSelect(option);
  };
  return (
    <section className="relative rounded-xl bg-card/50 shadow-2xl" id="1">
      <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
        <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
          1
        </div>
        <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
          Pilih Nominal
        </h2>
      </div>
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          <section id="🔥 Special Items">
            <h3 className="pb-4 text-sm/6 font-semibold text-card-foreground">
              🔥 Special Items
            </h3>
            <RadioGroup value={selected} onChange={(value) => handleSelect(value)}>
              <div
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
                role="none"
              >
                {special.map((plan) => (
                  <Radio
                    as="div"
                    key={plan.name}
                    value={plan}
                    className={`relative ${
                      plan === selected
                        ? "flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bj-shadow ring-2 ring-primary ring-offset-2 ring-offset-card bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat"
                        : "flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat"
                    }`}
                  >
                    <span className="flex flex-1">
                      <span className="flex flex-col justify-between">
                        <span className="block text-xs font-semibold">
                          {plan.name}
                        </span>
                        <div>
                          <span
                            className={`mt-1 flex items-center text-xs font-semibold ${
                              plan === selected ? "text-primary" : "" // Apply text-primary class if plan is selected
                            }`}
                          >
                            {formatIDR(plan.harga)}
                          </span>
                        </div>
                      </span>
                    </span>

                    <div className="flex aspect-square w-8 items-center">
                      <Image
                        alt="logo"
                        src={plan.image}
                        width={300}
                        height={300}
                        className="object-contain object-right"
                      />
                    </div>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </section>
          <section id="✨ Top Up Instant">
            <h3 className="pb-4 text-sm/6 font-semibold text-card-foreground">
              ✨ Top Up Instant
            </h3>
            <RadioGroup value={selected} onChange={(value) => handleSelect(value)}>
              <div
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
                role="none"
              >
                {topup.map((plan) => (
                  <Radio
                    as="div"
                    key={plan.name}
                    value={plan}
                    className={`relative flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat ${
                      plan === selected
                        ? "ring-2 bj-shadow ring-offset-card ring-offset-2 ring-primary"
                        : ""
                    }`}
                  >
                    <span className="flex flex-1">
                      <span className="flex flex-col justify-between">
                        <span className="block text-xs font-semibold">
                          {plan.name}
                        </span>
                        <div>
                          <span
                            className={`mt-1 flex items-center text-xs font-semibold ${
                              plan === selected ? "text-primary" : "" // Apply text-primary class if plan is selected
                            }`}
                          >
                            {formatIDR(plan.harga)}
                          </span>
                        </div>
                      </span>
                    </span>

                    <div className="flex aspect-square w-8 items-center">
                      <Image
                        alt="logo"
                        src={plan.image}
                        width={300}
                        height={300}
                        className="object-contain object-right"
                      />
                    </div>
                  </Radio>
                ))}
              </div>
            </RadioGroup>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Nominal;
