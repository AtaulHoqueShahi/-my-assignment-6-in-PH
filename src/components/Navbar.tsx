
"use client";

import Image from "next/image";
import Link from "next/link";
import Dumbbell from "@/assets/logo.png"
const Navbar = () => {
  return (
    <header className="border-b border-[#20242b] bg-[#0b0d0f]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
   
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

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase text-gray-300 transition hover:bg-[#1b2015] hover:text-[#ccff00]"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-4 py-2 text-xs font-semibold uppercase text-gray-300 transition hover:bg-[#1b2015] hover:text-[#ccff00]"
          >
            My Plan
          </Link>
        </div>

      
        <div className="flex items-center gap-3">

        
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-300"
          >
            <span>Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black">
              0
            </span>
          </Link>

   
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-300"
          >
            <span>Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#3a4048] px-1.5 text-[10px] font-bold text-gray-300">
              0
            </span>
          </Link>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;