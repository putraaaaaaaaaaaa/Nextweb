import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  Field,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Deskripsi = () => {
  return (
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
  );
};

export default Deskripsi;
