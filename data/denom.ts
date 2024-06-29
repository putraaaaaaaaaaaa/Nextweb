export const productCategories: {
  name: string;
  emoji: string;
  slug: string;
  products: {
    name: string;
    kode: string;
    harga: number;
    image?: string;
    promo?: boolean;
    available?: boolean;
  }[];
}[] = [
  {
    name: "Special Items",
    emoji: "🔥",
    slug: "mobile-legends",
    products: [
      {
        name: "Weekly Diamond Pass",
        kode: "WDP",
        harga: 28000,
        image: "/IMG_1438.webp",
        promo: false,
      },
      {
        name: "Weekly Diamond Pass 2X",
        kode: "WDP2",
        harga: 56000,
        image: "/IMG_1438.webp",
        promo: false,
      },
    ],
  },
  {
    name: "Blessing of the Welkin Moon",
    emoji: "🔥",
    slug: "genshin-impact",
    products: [
      {
        name: "Blessing of the Welkin Moon",
        kode: "BWM",
        harga: 57000,
        image: "/IMG_1438.webp",
        promo: false,
      },
      {
        name: "Blessing of the Welkin Moon 2X",
        kode: "BWM2",
        harga: 115000,
        image: "/IMG_1438.webp",
        promo: false,
      },
    ],
  },
  {
    name: "Topup Instants",
    emoji: "✨",
    slug: "mobile-legends",
    products: [
      {
        name: "3 Diamonds",
        kode: "ML3",
        harga: 1500,
        image: "/IMG_1441.webp",
        promo: false,
        available: true,
      },
    ],
  },
];
