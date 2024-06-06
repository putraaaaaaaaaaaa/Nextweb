import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-secondary print:hidden" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="container py-12 pb-8">
    <p className="text-center text-sm leading-6 text-foreground">
    tempat top up games yang aman, murah dan terpercaya.
    </p>
    <div className="xl:grid xl:gap-8 xl:grid-cols-2">
    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
  <div>
  <h3 className="text-sm font-semibold leading-6 text-primary">Kemitraan</h3>
  <ul role="list" className="mt-6 space-y-4">
    <li>
    <Link
  href="/affiliate"
  className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
  style={{ outline: 'currentcolor' }}
>
  <span>Afiliasi</span>
</Link>
    </li>
  </ul>
  </div>
</div>
</div>
    <div className="mt-16 flex items-center justify-between border-t border-background/50 pt-8 sm:mt-20 lg:mt-24">
    <p className="text-xs leading-5 text-foreground">
© 
2024
CV NUEPEDIA
. All rights reserved.
</p></div>
  </div>
</footer>
  );
};
export default Footer;
