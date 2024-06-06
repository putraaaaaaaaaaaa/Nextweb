"use client";
import {
  Button,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-secondary p-2 text-foreground lg:hidden"
      >
        <span className="sr-only">Open menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-40 focus:outline-none"
          onClose={close}
          __demoMode
        >
          <div className="fixed inset-0 transition-all duration-500 ease-in-out">
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
            <div className="fixed inset-0 z-40 flex">
              <TransitionChild
                enter="transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-background pb-12 shadow-xl translate-x-0">
                  <div className="flex flex-row-reverse items-center justify-between p-4">
                    <Button
                      onClick={close}
                      className="text-murky-400 -m-2 inline-flex items-center justify-center rounded-md p-2"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLineJoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <div className="flex">
                      <Link className="relative h-8 w-24" href="/">
                        <span className="sr-only">NUEPEDIA Logo</span>
                        <Image
                          className="object-contain"
                          src="/IMG_1131.webp"
                          fill
                          alt="Nuepedia Logo"
                        ></Image>
                      </Link>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
