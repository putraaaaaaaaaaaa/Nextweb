import React from "react";
import Link from "next/link";
import Image from "next/image";
import MyModal from "@/components/menunav";
import Drop from "@/components/drop";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { CircleUser, LogIn } from 'lucide-react';
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full flex-none border-b border-border/50 bg-secondary/80 backdrop-blur print:hidden">
      <div className="container">
        <div className="flex h-[60px] items-center">
          <MyModal />
          <div className="ml-3 mr-2 flex items-center lg:ml-0">
            <Link href="/">
              <Image
                alt="Logo"
                width={150}
                height={43}
                className="h-8 w-auto"
                src="/IMG_1131.webp"
              />
            </Link>
          </div>
          <div className="hidden lg:ml-10 lg:block lg:self-stretch">
            <div className="flex h-full space-x-6">
              <Link
                className="relative z-10 -mb-px flex items-center space-x-2 border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-primary-500 text-primary-500"
                href="/"
                style={{ outline: "currentcolor" }}
              >
                <span>Beranda</span>
              </Link>
            </div>
          </div>
          <div className="ml-auto flex h-full items-center space-x-2 lg:space-x-6">
            <div className="flex flex-row-reverse items-center gap-x-2">
              <div className="relative inline-block text-left">
                <Menu>
                  <MenuButton className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-border/50 bg-transparent py-2 pl-4 pr-3 text-sm font-semibold uppercase text-foreground duration-300 ease-in-out hover:bg-muted/50">
                    <CircleUser size={20} />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </MenuButton>
                  <MenuItems
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-muted rounded-md bg-background shadow-lg ring-1 ring-muted ring-opacity-5 focus:outline-none transition ease-in duration-75 transform opacity-100 scale-100"
                    >
                    <div className="py-1">
                      <MenuItem
                        className="text-foreground group flex w-full items-center px-4 py-2 text-sm"
                        >
                         
                        <Link className="ml-4"
                          href="/sign-in">
                          Masuk</Link>
                      </MenuItem>
                      <MenuItem
                        className="text-foreground group flex w-full items-center px-4 py-2 text-sm"
                        >

                        <Link className="ml-4"
                          href="/sign-Up">
                          Daftar</Link>
                      </MenuItem>
                    </div>
                    
                  
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
