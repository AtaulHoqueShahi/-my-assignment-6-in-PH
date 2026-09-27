"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dumbbell from "@/assets/logo.png"
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  const workoutActive = pathname === "/" || pathname.startsWith("/workouts");

  const planActive = pathname.startsWith("/my-plan");

  return (
    <header className="border-b border-[#20242b] bg-[#0b0d0f]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image
            src={Dumbbell}
            alt="FitLog"
            width={22}
            height={22}
          />

          <span className="text-lg font-black uppercase tracking-wide">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase transition ${
              workoutActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:bg-[#1b2015] hover:text-[#ccff00]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase transition ${
              planActive
                ? "bg-[#ccff00] text-black"
                : "text-gray-400 hover:bg-[#1b2015] hover:text-[#ccff00]"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-300"
          >
            <span className="hidden xs:inline">Plan</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ccff00] px-1.5 text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 text-xs text-gray-300"
          >
            <span className="hidden xs:inline">Saved</span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[#3a4048] px-1.5 text-[10px] font-bold text-gray-300">
              {saved.length}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
