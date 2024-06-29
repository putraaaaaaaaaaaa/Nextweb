// app/[slug]/ClientPage.tsx
'use client';

import React, { useState, useEffect, useContext, MouseEvent } from "react";
import { notFound } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  Dialog,
  DialogPanel,
  DialogTitle,
  DisclosurePanel,
  Description,
  Input,
  Transition,
  TransitionChild,
  Field,
  Label,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { PhoneInput, DialCodePreview } from "react-international-phone";
import "react-international-phone/style.css";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Foot from "@/components/foot";
import Tag from "@/components/order/tag";
import Deskripsi from "@/components/order/deskripsi";
import Pay from "@/components/order/pay";
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
const special = [
  { name: "QRIS", admin: "0.7", image: "/IMG_1051.webp" },
  { name: "Go-Pay", admin: "2", image: "/IMG_1052.webp" },
];

interface ClientPageProps {
  slug: string;
  name: string;
}

export default function ClientPage({ slug, name, sub_name, banner, thumbnail }: ClientPageProps) {
  const [selected, setSelected] = useState<null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  }>(null);
  let [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [game, setGame] = useState("");
  const [id, setId] = useState("");
  const [server, setServer] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pay, setPay] = useState<null | {
    name: string;
    admin: string;
    image?: string;
  }>(null);
  const [phone, setPhone] = useState("");

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    calculateTotalPrice(newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      calculateTotalPrice(newQuantity);
    }
  };

  const calculateTotalPrice = (newQuantity: number) => {
    if (selected) {
      const newTotalPrice = newQuantity * selected.harga;
      setTotalPrice(newTotalPrice);
    } else {
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity, selected]);

  const isValidPhoneNumber = (number: string): boolean => {
    return number.length >= 11 && number.length <= 15;
  };

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
      toast.error("Data akun tidak boleh kosong");
      return;
    }

    if (!pay) {
      toast.error("Silahkan pilih metode pembayaran");
      return;
    }

    if (!phone) {
      toast.error("Nomer Whatsapp tidak boleh kosong");
      return;
    }

    if (!isValidPhoneNumber(phone)) {
      toast.error("Masukan nomer Whatsapp yang valid");
      return;
    }

    setId(id.value);
    setServer(server.value);

    fetch(
      `https://api.isan.eu.org/nickname/ml?id=${id.value}&zone=${server.value}`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setUsername(data.name);
          setGame(data.game);
          setIsOpen(true);
        } else {
          toast.error(`Akun tidak dapat ditemukan`);
        }
      });
  };

  const filteredCategories = productCategories.filter(
    (category) => category.slug === slug,
  );
  return (
    <main className="relative bg-gradient-theme">
      <div className="relative h-56 w-full bg-muted lg:h-[340px]"></div>
      <div className="bg-title-product flex min-h-32 w-full items-center border-y bg-muted lg:min-h-[160px]">
        <div className="container flex items-center gap-2">
          <div>
            <div className="flex items-start gap-4">
              <div className="product-thumbnail-container relative -top-28">
                <Image
                  alt="Thumbnail"
                  src={thumbnail}
                  width={300}
                  height={300}
                  className="z-20 -mb-14 aspect-square w-32 rounded-2xl object-cover shadow-2xl md:-mb-20 md:w-60"
                />
              </div>
            </div>
          </div>
          <div className="py-4 sm:py-0">
            <h1 className="text-xs font-bold uppercase leading-7 tracking-wider sm:text-lg">
              {name}
            </h1>
            <p className="text-xs font-medium sm:text-base/6">{sub_name}</p>
            <Tag />
          </div>
        </div>
      </div>
      <div className="container relative mt-8 grid grid-cols-3 gap-4 md:gap-8">
        <div className="col-span-3 lg:col-span-1">
          <div className="sticky top-[90px] flex flex-col gap-8">
            <div className="space-y-2">
              <Disclosure defaultOpen={true}>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex w-full items-center justify-between rounded-lg bg-card/75 px-4 py-2 text-left text-xs font-medium text-card-foreground focus:outline-none">
                      <span>Deskripsi dan cara melakukan transaksi</span>
                      <ChevronDownIcon
                        className={clsx("w-5", open && "rotate-180")}
                      />
                    </DisclosureButton>
                    <Transition
                      enter="duration-200 ease-out"
                      enterFrom="opacity-0 -translate-y-6"
                      enterTo="opacity-100 translate-y-0"
                      leave="duration-300 ease-out"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-6"
                    >
                      <DisclosurePanel className="origin-top transition">
                        <div className="rounded-xl bg-card/50 px-4 pb-4 pt-2 shadow-2xl">
                          <div className="prose prose-sm text-xs text-foreground">
                            <div>
                              <p>
                                Beli & top up {name} harga paling murah, aman, cepat,
                                dan terpercaya hanya di NUEPEDIA.
                              </p>
                              <p>
                                Cara topup {name}:
                                <br />
                                1) Pilih Nominal
                                <br />
                                2) Masukkan Data Akun
                                <br />
                                3) Tentukan Jumlah Pembelian
                                <br />
                                4) Pilih Pembayaran
                                <br />
                                5) Isi Detail Kontak
                                <br />
                                6) Klik Pesan Sekarang dan lakukan Pembayaran
                                <br />
                                7) Selesai
                              </p>
                            </div>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
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
                            className={`relative ${
                              denom === selected
                                ? "flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bj-shadow ring-2 ring-primary ring-offset-2 ring-offset-card bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat"
                                : "flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat"
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
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="3">
            <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
              <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
                3
              </div>
              <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
                Masukan Jumlah Pembelian
              </h2>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-x-4">
                <div className="flex-1">
                  <div className="flex flex-col items-start">
                    <input
                      className="relative block w-full appearance-none rounded-lg border border-border bg-input px-3 py-2 text-xs text-foreground placeholder-muted-foreground focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-75"
                      type="number"
                      name="quantity"
                      value={quantity}
                      onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (!isNaN(value) && value >= 1) {
                          setQuantity(value);
                          calculateTotalPrice(value);
                        }
                      }}
                      min="1"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-9"
                    type="button"
                    onClick={incrementQuantity}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-9"
                    type="button"
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="4">
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
                              <RadioGroup value={pay} onChange={setPay}>
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
                                        plan === pay
                                          ? "flex cursor-pointer rounded-xl border border-transparent p-2.5 shadow-sm outline-none md:p-3 neko-shadow bg-foreground ring-2 ring-primary ring-offset-2 ring-offset-foreground/75"
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
                                                  {totalPrice &&
                                                    formatIDR(totalPrice)}
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
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="5">
            <div className="flex items-center overflow-hidden rounded-t-xl bg-card">
              <div className="flex h-10 w-10 items-center justify-center bg-primary font-semibold text-primary-foreground">
                5
              </div>
              <h2 className="px-4 py-2 text-sm/6 font-semibold text-card-foreground">
                Detail Kontak
              </h2>
            </div>
            <div className="p-4">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="block text-xs font-medium text-foreground">
                    No. WhatsApp
                  </label>
                  <div>
                    <PhoneInput
                      defaultCountry="id"
                      value={phone}
                      onChange={(phone) => {
                        const cleanedPhone = phone.startsWith("+")
                          ? phone.slice(1)
                          : phone;

                        const digitsOnly = cleanedPhone.replace(/\D/g, "");
                        setPhone(digitsOnly);
                      }}
                      forceDialCode={true}
                      placeholder="XXXXXXXXXXX"
                    />
                  </div>
                  <span className="text-xxs italic text-card-foreground">
                    **Nomor ini akan dihubungi jika terjadi masalah
                  </span>
                </div>
                <p className="flex items-center gap-2 rounded-md bg-card px-4 py-2.5 text-xs/6 text-card-foreground">
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
                    className="lucide lucide-info h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                  <span>
                    Jika ada kendala, kami akan menghubungi nomor WA kamu diatas
                  </span>
                </p>
              </div>
            </div>
          </section>
          {selected ? (
            <div className="shad sticky bottom-0 rounded-t-lg pb-4 flex flex-col gap-4 bg-background">
              <div className="rounded-lg border border-dashed bg-secondary p-4 text-sm text-secondary-foreground">
                <div className="flex items-center gap-4">
                  <div className="aspect-square h-16">
                    <Image
                      alt="banner"
                      src={thumbnail}
                      className="aspect-square h-16 rounded-lg object-cover"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <div className="text-xs">
                      {selected.name} x {quantity} Qty
                    </div>
                    <div className="flex items-center gap-2 pt-0.5 font-semibold">
                      <span className="text-warning">
                        {formatIDR(totalPrice)}
                      </span>
                      <span>-</span>
                      {pay ? <span>{pay.name}</span> : <span></span>}
                    </div>
                    <div className="text-xxs italic text-muted-foreground">
                      ** Waktu proses instan
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full gap-2"
                onClick={handleButtonClick}
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
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Pesan Sekarang</span>
              </button>
              <Transition appear show={isOpen}>
                <Dialog
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  className="relative z-50 font-sans"
                >
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        enter="backdrop-blur-sm opacity-100"
                        enterFrom="backdrop-blur-0 opacity-0"
                        enterTo="backdrop-blur-sm opacity-100"
                        leave="backdrop-blur-sm opacity-100"
                        leaveFrom="backdrop-blur-sm opacity-100"
                        leaveTo="backdrop-blur-0 opacity-0"
                      >
                        <div className="fixed inset-0 bg-background/25" />
                      </Transition.Child>
                      <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <DialogPanel
                          className="relative transform overflow-hidden rounded-lg bg-background px-4 pb-4 pt-5 text-left text-foreground shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 opacity-100 translate-y-0 sm:scale-100
                      "
                        >
                          <div>
                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-success"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </div>
                            <div className="mt-3 text-center text-sm sm:mt-5">
                              <DialogTitle className="text-lg font-semibold leading-6 text-foreground">
                                Buat Pesanan
                              </DialogTitle>
                              <Description className="pt-1">
                                Pastikan data akun Anda dan produk yang Anda
                                pilih valid dan sesuai.
                              </Description>
                              <div className="mt-2">
                                <div className="my-4 grid grid-cols-3 gap-3 rounded-md bg-secondary/50 p-4 text-left text-sm text-secondary-foreground">
                                  <div>Username</div>
                                  <div className="col-span-2">: {username}</div>
                                  <div>ID</div>
                                  <div className="col-span-2">: {id}</div>
                                  <div>Server</div>
                                  <div className="col-span-2">: {server}</div>
                                  <div>Item</div>
                                  <div className="col-span-2">
                                    : {selected.name}
                                  </div>
                                  <div>Price</div>
                                  <div className="col-span-2">
                                    : {formatIDR(totalPrice)}
                                  </div>
                                  <div>Product</div>
                                  <div className="col-span-2">: {game}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full">
                              Pesan Sekarang!
                            </button>
                            <button
                              className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 rounded-md px-3 w-full"
                              onClick={() => setIsOpen(false)}
                            >
                              Batalkan
                            </button>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          ) : (
            <div className="flex flex-col gap-4 bg-background">
              <div className="rounded-lg border border-dashed bg-secondary p-4 text-sm text-secondary-foreground">
                <div className="text-center">
                  Belum ada item produk yang dipilih.
                </div>
              </div>

              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full gap-2"
                onClick={handleButtonClick}
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
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Pesan Sekarang</span>
              </button>
            </div>
          )}
          {selected && pay ? (
            <Transition appear show={isOpen}>
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-50 font-sans"
              >
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                      enter="backdrop-blur-sm opacity-100"
                      enterFrom="backdrop-blur-0 opacity-0"
                      enterTo="backdrop-blur-sm opacity-100"
                      leave="backdrop-blur-sm opacity-100"
                      leaveFrom="backdrop-blur-sm opacity-100"
                      leaveTo="backdrop-blur-0 opacity-0"
                    >
                      <div className="fixed inset-0 bg-background/25" />
                    </Transition.Child>
                    <TransitionChild
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      enterTo="opacity-100 translate-y-0 sm:scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                      <DialogPanel
                        className="relative transform overflow-hidden rounded-lg bg-background px-4 pb-4 pt-5 text-left text-foreground shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 opacity-100 translate-y-0 sm:scale-100
              "
                      >
                        <div>
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/50">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-6 w-6 text-success"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <div className="mt-3 text-center text-sm sm:mt-5">
                            <DialogTitle className="text-lg font-semibold leading-6 text-foreground">
                              Buat Pesanan
                            </DialogTitle>
                            <Description className="pt-1">
                              Pastikan data akun Anda dan produk yang Anda pilih
                              valid dan sesuai.
                            </Description>
                            <div className="mt-2">
                              <div className="my-4 grid grid-cols-3 gap-3 rounded-md bg-secondary/50 p-4 text-left text-sm text-secondary-foreground">
                                <div>Username</div>
                                <div className="col-span-2">: {username}</div>
                                <div>ID</div>
                                <div className="col-span-2">: {id}</div>
                                <div>Server</div>
                                <div className="col-span-2">: {server}</div>
                                <div>Item</div>
                                <div className="col-span-2">
                                  : {selected.name}
                                </div>
                                <div>Price</div>
                                <div className="col-span-2">
                                  : {formatIDR(totalPrice)}
                                </div>
                                <div>Product</div>
                                <div className="col-span-2">: {game}</div>
                                <div>Payment</div>
                                <div className="col-span-2">: {pay.name}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                          <button className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 w-full">
                            Pesan Sekarang!
                          </button>
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 rounded-md px-3 w-full"
                            onClick={() => setIsOpen(false)}
                          >
                            Batalkan
                          </button>
                        </div>
                      </DialogPanel>
                    </TransitionChild>
                  </div>
                </div>
              </Dialog>
            </Transition>
          ) : (
            <span></span>
          )}
        </form>
      </div>
      <Foot />
    </main>
  );
}
