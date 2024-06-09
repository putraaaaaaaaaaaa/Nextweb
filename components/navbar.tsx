import React from "react";
import Link from "next/link";
import Image from "next/image";
import MyModal from "@/components/menunav";
import { signIn } from "@/auth.ts"
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
                
                <div>
                  <Link href="">Sign In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
