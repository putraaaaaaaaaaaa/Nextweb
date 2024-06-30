import { Button } from '@/components/ui/button';
import { auth, signIn, signOut } from '@/lib/auth';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";
import { CircleUser, LogIn } from "lucide-react";
export async function User() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <form
        action={async () => {
          'use server';
          await signIn('github');
        }}
      >
        <Button variant="outline">Masuk</Button>
      </form>
    );
  }

  return (
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
        as="div"
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-muted rounded-md bg-background shadow-lg ring-1 ring-muted ring-opacity-5 focus:outline-none transition ease-in duration-75 transform opacity-100 scale-100"
      >
        <div className="py-1">
          <MenuItem>
            <button className="text-foreground group flex w-full items-center px-4 py-2 text-sm">
              <Link className="ml-4" href="/sign-in">
                Masuk
              </Link>
            </button>
          </MenuItem>
          <MenuItem>
            <form
              action={async () => {
                'use server';
                await signOut();
              }}
            >
              <Button variant="outline">Keluar</Button>
            </form>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}