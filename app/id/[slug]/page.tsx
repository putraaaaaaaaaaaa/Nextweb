"use client"
import { notFound } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Foot from "@/components/foot";
import Nominal from "@/components/order/nominal";
import Input from "@/components/order/input";
import Jumlah from "@/components/order/jumlah";
import Pay from "@/components/order/pay";
import Tag from "@/components/order/tag";
import Deskripsi from "@/components/order/deskripsi";
import { formatIDR } from "@/lib/formatIDR";
import { Option } from "./Option";
import { toast } from 'react-hot-toast';
import React, { MouseEvent } from 'react';
interface PageProps {
  params: {
    slug: string | null;
  };
}
export default function Page({ params }: PageProps) {
  const { slug } = params;
  if (!slug) {
    notFound();
  }
  const validSlugs = ["mobile-legends", "b"];
  if (!validSlugs.includes(slug)) {
    notFound();
  }
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
  };

  const calculatedPrice = selectedOption
    ? selectedOption.harga * quantity
    : null;

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    toast.error('This is an error!');
  };
  return (
    <main className="relative bg-gradient-theme">
      <div className="relative h-56 w-full bg-muted lg:h-[340px]">
        <Image
          alt="Banner"
          src="/IMG_1098.webp"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="bg-title-product flex min-h-32 w-full items-center border-y bg-muted lg:min-h-[160px]">
        <div className="container flex items-center gap-2">
          <div>
            <div className="flex items-start gap-4">
              <div className="product-thumbnail-container relative -top-28">
                <Image
                  alt="Thumbnail"
                  src="/IMG_1227.png"
                  width={300}
                  height={300}
                  className="z-20 -mb-14 aspect-square w-32 rounded-2xl object-cover shadow-2xl md:-mb-20 md:w-60"
                />
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-0">
            <h1 className="text-xs font-bold uppercase leading-7 tracking-wider sm:text-lg">
              Mobile Legends
            </h1>
            <p className="text-xs font-medium sm:text-base/6">Moonton</p>
            <Tag />
          </div>
        </div>
      </div>
      <div className="container relative mt-8 grid grid-cols-3 gap-4 md:gap-8">
      <Deskripsi />
        <form className="col-span-3 col-start-1 flex flex-col gap-4 lg:col-span-2 lg:gap-8">
          <Nominal onSelect={handleSelect} />
          <Input />
          <Jumlah onQuantityChange={handleQuantityChange} />
          <Pay selectedPrice={calculatedPrice} />
          {!selectedOption ? (
            <div className="flex flex-col gap-4">
              <div className="rounded-lg border border-dashed bg-secondary p-4 text-sm text-secondary-foreground">
                <div className="flex items-center justify-center">
                  <div className="text-center">Belum ada item produk yang dipilih.</div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full gap-2"
                onClick={(event) => handleButtonClick(event)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag h-4 w-4"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Pesan Sekarang!</span>
              </button>
              
            </div>
          ) : (
            <div className="sticky bg-secondary/80 backdrop-blur bottom-0 rounded-t-lg pb-4 flex flex-col gap-4">
              <div className="rounded-lg border border-dashed bg-secondary p-4 text-sm text-secondary-foreground">
                <div className="flex items-center gap-4">
                  <div className="aspect-square h-16">
                    <Image
                      alt="Mobile Legends"
                      loading="lazy"
                      width={300}
                      height={300}
                      className="aspect-square h-16 rounded-lg object-cover"
                      src="/IMG_1227.png"
                    />
                  </div>
                  <div>
                    <div className="text-xs">
                      {selectedOption.name} x {quantity} Qty
                    </div>
                    <div className="flex items-center gap-2 pt-0.5 font-semibold">
                      <span className="text-warning">{formatIDR(calculatedPrice)}</span>
                      <span>-</span>
                      <span></span>
                    </div>
                    <div className="text-xxs italic text-muted-foreground">
                      ** Waktu proses instant
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full gap-2"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag h-4 w-4"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Pesan Sekarang!</span>
              </button>
            </div>
          )}
        </form>
      </div>
      <Foot />
    </main>
  );
}
