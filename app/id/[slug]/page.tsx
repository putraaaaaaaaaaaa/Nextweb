"use client";
import React, { useState, ReactNode, useContext, MouseEvent } from "react";
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
import Image from "next/image";
import Foot from "@/components/foot";
import Tag from "@/components/order/tag";
import Deskripsi from "@/components/order/deskripsi";
import { formatIDR } from "@/lib/formatIDR";
import { toast } from "react-hot-toast";

// Move data arrays to a separate file
import { productCategories } from "@/data/denom";

// Create a context for managing the selected product state
interface ProductContextType {
  selected: null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  };
  setSelected: (selected: null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  }) => void;
}

const ProductContext = React.createContext<ProductContextType | null>(null);

interface PageProps {
  params: {
    slug: string | null;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { slug } = params;
  const isValidSlug = ["mobile-legends", "b"].includes(slug || "");

  if (!isValidSlug) {
    notFound();
    return null; // Early return if slug is invalid
  }

  return (
    <ProductProvider>
      {slug!== null && <Main slug={slug} />}
    </ProductProvider>
  );
};

const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selected, setSelected] = useState<null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  }>(null);

  return (
    <ProductContext.Provider value={{ selected, setSelected }}>
      {children}
    </ProductContext.Provider>
  );
};

const Main: React.FC<{ slug: string }> = ({ slug }) => {
  return (
    <main className="relative bg-gradient-theme">
      <Header slug={slug} />
      <div className="container relative mt-8 grid grid-cols-3 gap-4 md:gap-8">
        <Deskripsi />
        <ProductOptions slug={slug} />
      </div>
      <Foot />
    </main>
  );
};

const Header: React.FC<{ slug: string }> = ({ slug }) => {
  return (
    <>
      <div className="relative h-56 w-full bg-muted lg:h-[340px]"></div>
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
              {slug}
            </h1>
            <p className="text-xs font-medium sm:text-base/6">Moonton</p>
            <Tag />
          </div>
        </div>
      </div>
    </>
  );
};

interface ProductCategoryProps {
  category: {
    emoji: string;
    name: string;
    slug: string;
    products: {
      kode: string;
      name: string;
      harga: number;
      image?: string;
    }[];
  };
  selected: null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  };
  setSelected: (selected: null | {
    name: string;
    kode: string;
    harga: number;
    image?: string;
  }) => void;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, selected, setSelected }) => {
  return (
    <section id={`${category.emoji} ${category.name}`}>
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
            <ProductOption key={denom.kode} denom={denom} />
          ))}
        </div>
      </RadioGroup>
    </section>
  );
};

interface ProductOptionsProps {
  slug: string;
}

  const ProductOptions: React.FC<ProductOptionsProps> = ({ slug }) => {
    const { selected, setSelected } = useContext(ProductContext)?? {};

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!selected) {
      toast.error("Silahkan pilih nominal terlebih dahulu");
      return;
    }

    toast.success(`Item selected: ${selected.name}`);
    // Add any additional logic or actions you want to perform when a product is selected
  };

  const filteredCategories = productCategories.filter(
    (category) => category.slug === slug,
  );

  return (
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
              <ProductCategory
                key={category.name}
                category={category}
                selected={selected?? null} // Add the nullish coalescing operator (??) to default to null if selected is undefined
                setSelected={setSelected?? (() => {})}
              />
            ))}
          </div>
        </div>
      </section>
      <button onClick={handleButtonClick}>Submit</button>
    </form>
  );
};

interface ProductOptionProps {
  denom: {
    kode: string;
    name: string;
    harga: number;
    image?: string;
  };
}

  const ProductOption: React.FC<ProductOptionProps> = ({ denom }) => {
    const { selected, setSelected } = useContext(ProductContext)?? {};

  return (
    <Radio
      as="div"
      value={denom}
      className={`relative flex cursor-pointer rounded-xl border border-transparent bg-foreground/75 p-2.5 text-background shadow-sm outline-none md:p-4 bg-order-variant-background text-order-variant-foreground bg-order-variant-image bg-cover bg-center bg-no-repeat ${
        denom === selected
         ? "ring-2 bj-shadow ring-offset-card ring-offset-2 ring-primary"
          : ""
      }`}
    >
      <span className="flex flex-1">
        <span className="flex flex-col justify-between">
          <span className="block text-xs font-semibold">{denom.name}</span>
          <div>
            <span
              className={`mt-1 flex items-center text-xs font-semibold ${
                denom === selected? "text-primary" : ""
              }`}
            >
              {formatIDR(denom.harga)}
            </span>
          </div>
        </span>
      </span>
      {denom.image? (
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
  );
};

export default Page;