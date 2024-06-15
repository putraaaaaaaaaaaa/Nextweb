"use client";
import React, { useState, useContext, MouseEvent } from "react";
import { notFound } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Description,
  Input,
  Transition,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import Foot from "@/components/foot";
import Tag from "@/components/order/tag";
import Deskripsi from "@/components/order/deskripsi";
import { formatIDR } from "@/lib/formatIDR";
import { toast } from "react-hot-toast";
import { productCategories } from "@/data/denom";

interface ProductContextType {
  selected: null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  };
  setSelected: (
    selected: null | {
      name: string;
      kode: string;
      harga: number;
      image?: string;
    },
  ) => void;
}

const ProductContext = React.createContext<ProductContextType | null>(null);

const Page: React.FC = () => {
  const [selected, setSelected] = useState<null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  }>(null);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!selected) {
      toast.error("Silahkan pilih nominal terlebih dahulu");
      return;
    }

    const id = document.querySelector<HTMLInputElement>('[name="id"]');
    const server = document.querySelector<HTMLInputElement>('[name="server"]');

    if (!id || !server) {
      toast.error("Silahkan isi ID dan Server terlebih dahulu");
      return;
    }

    if (id.value.trim() === "" || server.value.trim() === "") {
      toast.error("ID dan Server tidak boleh kosong");
      return;
    }

    const apiUrl = "https://vip-reseller.co.id/api/game-feature"; // Replace with your API URL
    const data = {
      key: "P7S6yQhfMkl8y4AjprKIMMJ85R61i8SpP5qQCmJa8oYx4UcLo5leoHL4cQQgZo54",
      sign: "a895bd30ee97625749f091612a0d25e2",
      type: "get-nickname",
      code: "mobile-legends",
      target: id.value,
      additional_target: server.value,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    };

    fetch(apiUrl, config).then(async (response) => {
      const data = await response.json();
      const result = data.result;
      if (result === true) {
        toast.success(`Username ${data.data}`);
      } else if (result === false) {
        toast.error(`${data.message}`);
      }
    });
  };

  const filteredCategories = productCategories.filter(
    (category) => category.slug === "mobile-legends",
  );

  return (
    <main className="relative bg-background">
      <div className="relative h-56 w-full bg-muted lg:h-[340px]"></div>
      <div className="bg-title-product flex min-h-32 w-full items-center border-y bg-muted lg:min-h-[160px] bg-order-header-background text-order-header-foreground">
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
                {filteredCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="pb-4 text-sm/6 font-semibold text-card-foreground">
                      {category.emoji} {category.name}
                    </h3>
                    <RadioGroup
                      by="name"
                      value={selected}
                      onChange={setSelected}
                      aria-label={category.name}
                    >
                      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        {category.products.map((denom) => (
                          <Radio
                            as="div"
                            value={denom}
                            key={denom.kode}
                            className={`relative flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bg-order-variant-background  text-order-variant-foreground ${
                              denom === selected
                                ? "ring-2 neko-shadow ring-offset-card ring-offset-2 ring-primary"
                                : ""
                            }`}
                          >
                            <span className="flex flex-1">
                              <span className="flex flex-col justify-between">
                                <span className="block text-xs font-semibold">
                                  {denom.name}
                                </span>
                                <div>
                                  <span
                                    className={`mt-1 flex items-center text-xs font-semibold ${
                                      denom === selected ? "text-primary" : ""
                                    }`}
                                  >
                                    {formatIDR(denom.harga)}
                                  </span>
                                </div>
                              </span>
                            </span>
                            {denom.image ? (
                              <div className="flex aspect-square w-8 items-center">
                                <Image
                                  alt={denom.name}
                                  src={denom.image}
                                  width={300}
                                  height={300}
                                  className="object-contain object-right"
                                />
                              </div>
                            ) : null}
                          </Radio>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="2">
            <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
              <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
                2
              </div>
              <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
                Masukan Data Akun
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <Label className="block text-xs font-medium text-foreground pb-2">
                    ID
                  </Label>
                  <div className="flex flex-col items-start">
                    <Input
                      className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                      type="number"
                      name="id"
                      placeholder="Ketikan ID"
                    />
                  </div>
                </Field>
                <Field>
                  <Label className="block text-xs font-medium text-foreground pb-2">
                    Server
                  </Label>
                  <div className="flex flex-col items-start">
                    <Input
                      className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                      type="number"
                      name="server"
                      placeholder="Ketikan Server"
                    />
                  </div>
                </Field>
              </div>
              <div className="mt-4 text-xs text-card-foreground">
                <div>
                  <p>
                    <em>
                      Untuk menemukan ID & Server akun Anda, klik avatar Anda di
                      pojok kiri atas layar dan buka tab Info Umum. Contoh:
                      12345678 (9864), maka ID adalah 12345678 dan Server adalah
                      9864
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <button onClick={handleButtonClick}>Submit</button>
        </form>
      </div>
      <Foot />
    </main>
  );
};

export default Page;
