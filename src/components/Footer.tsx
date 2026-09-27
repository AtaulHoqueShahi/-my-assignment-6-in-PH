
import Image from "next/image";
import Link from "next/link";
import Dumbbell from "@/assets/logo.png"
const Footer = () => {
  return (
    <footer className="border-t border-[#20242b] bg-[#0b0d0f]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">

        <div className="flex items-center gap-2">
           <Link
          href="/"
          className="flex items-center gap-2 text-white"
        >
          <Image
            src={Dumbbell}
            alt="Dumbbell"
            width={22}
            height={22}
          />

          <span className="text-lg font-black uppercase tracking-wide">
            FitLog
          </span>
        </Link>

      
        </div>

        <p className="text-xs text-gray-500">
          © 2026 FitLog -WorkOut Library.Train hard,log Honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;