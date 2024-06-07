"use client";
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

const special = [
  { name: "Weekly Diamond Pass", harga: "28.000", image: "/IMG_1438.webp" },
  { name: "Twilight Pass", harga: "150.000", image: "/IMG_1439.webp" },
];

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
  let [selected, setSelected] = useState(special[0]);
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
            <div className="mt-4 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:gap-8 sm:text-sm/6">
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-zap h-5 w-5 text-warning"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                </svg>
                <span>Proses Cepat</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-headset h-5 w-5 text-info"
                >
                  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
                  <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
                </svg>
                <span>Layanan Chat 24/7</span>
              </div>
              <div className="flex items-center gap-2">
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
                  className="lucide lucide-earth h-5 w-5 text-success"
                >
                  <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                  <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                  <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span>Region Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative mt-8 grid grid-cols-3 gap-4 md:gap-8">
        <div className="col-span-3 lg:col-span-1">
          <div className="sticky top-[90px] flex flex-col gap-8">
            <div className="space-y-2">
              <Disclosure>
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
                                Beli top up ML diamond Mobile Legends dan Weekly
                                Diamond Pass MLBB harga paling murah, aman,
                                cepat, dan terpercaya hanya di NUEPEDIA.
                              </p>
                              <p>
                                Cara topup MLBB:
                                <br />
                                1) Pilih Nominal
                                <br />
                                2) Masukkan Data Akun
                                <br />
                                3) Tentukan Jumlah Pembelian
                                <br />
                                4) Pilih Pembayaran
                                <br />
                                5) Masukkan Kode Promo (jika ada)
                                <br />
                                6) Isi Detail Kontak
                                <br />
                                7) Klik Pesan Sekarang dan lakukan Pembayaran
                                <br />
                                8) Selesai
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
                <section id="🔥 Special Items">
                  <h3 className="pb-4 text-sm/6 font-semibold text-card-foreground">
                    🔥 Special Items
                  </h3>
                  <RadioGroup by="name" value={selected} onChange={setSelected}>
                    <div
                      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3"
                      role="none"
                    >
                      {special.map((plan) => (
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
                                <span className="mt-1 flex items-center text-xs font-semibold">
                                  Rp. {plan.harga}
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
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="2">
            …
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="3">
            …
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="4">
            …
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="5">
            …
          </section>
          <section className="relative rounded-xl bg-card/50 shadow-2xl" id="6">
            …
          </section>
          <div className="flex flex-col gap-4 bg-background">…</div>
        </form>
      </div>
      <Foot />
    </main>
  );
}
