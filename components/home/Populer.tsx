import Image from "next/image";
import Link from "next/link";
const Populer = () => {
  return (
    <div className="container">
      <div className="mb-5 text-foreground">
        <h3 className="text-lg font-semibold uppercase leading-relaxed tracking-wider">
          🔥 POPULER SEKARANG!
        </h3>
        <p className="pl-6 text-xs">
          Berikut adalah beberapa produk yang paling populer saat ini.
        </p>
      </div>
      <ul
        className="grid grid-cols-2 gap-4 md:grid-cols-3"
        style={{ opacity: 1, transform: "none" }}
      >
        <li
          className="[--card-padding:theme(spacing.2)] [--card-radius:theme(borderRadius.2xl)]"
          style={{ opacity: 1, transform: "none" }}
        >
          <Link
            className="flex items-center gap-x-2 rounded-[--card-radius] bg-muted duration-300 ease-in-out hover:shadow-2xl hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background md:gap-x-3 bg-popular-background text-popular-foreground bg-popular-image bg-cover bg-center bg-no-repeat"
            href="/id/mobile-legends"
          >
            <div className="flex items-center gap-3 p-[--card-padding]">
              <Image
                alt="banner"
                className="aspect-square h-14 w-14 rounded-[calc(var(--card-radius)-var(--card-padding))] object-cover object-center ring-1 ring-background md:h-20 md:w-20"
                src="/IMG_1227.png"
                width={56}
                height={56}
              />
              <div className="relative flex w-full flex-col">
                <h2 className="w-[100px] truncate text-xxs font-semibold text-foreground sm:w-[125px] md:w-[150px] md:text-base lg:w-[175px]">
                  Mobile Legends
                </h2>
                <p className="text-xxs text-foreground md:text-sm">Moonton</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Populer;
