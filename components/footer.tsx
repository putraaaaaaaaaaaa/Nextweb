import Link from "next/link";
import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";
const Footer = () => {
  return (
    <footer className="bg-secondary print:hidden" aria-labelledby="footer-heading">
     <h2 id="footer-heading" className="sr-only">Footer</h2>
     <div className="container py-12 pb-8">
       <p className="text-center text-sm leading-6 text-foreground">
         No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24 Jam dengan payment terlengkap Indonesia
       </p>
       <div className="xl:grid xl:gap-8 xl:grid-cols-2">
         <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2">
           <div>
             <h3 className="text-sm font-semibold leading-6 text-primary">Kemitraan</h3>
             <ul role="list" className="mt-6 space-y-4">
               <li>
                 <Link
                   href="https://api.whatsapp.com/send/?phone=62895360841074&text=Halo%2C+Saya+tertarik+membuat+web+top+up+game&type=phone_number&app_absent=0"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Web Topup</span>
                 </Link>
               </li>
             </ul>
           </div>
           <div>
             <h3 className="text-sm font-semibold leading-6 text-primary">Peta Situs</h3>
             <ul role="list" className="mt-6 space-y-4">
               <li>
                 <Link
                   href="/"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Beranda</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="/sign-in"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Masuk</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="/sign-up"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Daftar</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="/invoices"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Cek Transaksi</span>
                 </Link>
               </li>
             </ul>
           </div>
           <div>
             <h3 className="text-sm font-semibold leading-6 text-primary">Dukungan</h3>
             <ul role="list" className="mt-6 space-y-4">
               <li>
                 <Link
                   href="wa.me/62895360841074"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Whatsapp</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="https://t.me/mikeneko766"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Telegram</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="instagram.com/sptra.re"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Instagram</span>
                 </Link>
               </li>
             </ul>
           </div>
           <div>
             <h3 className="text-sm font-semibold leading-6 text-primary">Legalitas</h3>
             <ul role="list" className="mt-6 space-y-4">
               <li>
                 <Link
                   href="/privacy-policy"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Kebijakan Pribadi</span>
                 </Link>
               </li>
               <li>
                 <Link
                   href="/terms-and-condition"
                   className="flex items-center gap-2 text-sm leading-6 text-foreground hover:text-primary/75"
                   style={{ outline: 'currentcolor' }}
                 >
                   <span>Syarat & Ketentuan</span>
                 </Link>
               </li>
             </ul>
           </div>
         </div>
       </div>
       <div className="mt-16 flex items-center justify-between border-t border-background/50 pt-8 sm:mt-20 lg:mt-24">
         <p className="text-xs leading-5 text-foreground">
           © 2024 CV NUEPEDIA. All rights reserved.
         </p>
         <ModeToggle />
       </div>
     </div>
   </footer>
  );
};

export default Footer;