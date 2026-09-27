import Image from "next/image";

import Dumbbell from "@/assets/logo.png"

const Footer = () => {
  return (
    <footer className="border-t border-[#20242b] bg-[#0b0d0f]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
      
        <div className="flex items-center gap-3">
          
  <Image
            src={Dumbbell}
            alt="FitLog"
            width={22}
            height={22}
         />

          <span className="text-lg font-black uppercase tracking-wide text-white">
            FITLOG
          </span>
        </div>

        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
