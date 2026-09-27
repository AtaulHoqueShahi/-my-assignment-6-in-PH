import Image from "next/image";
import Link from "next/link";
import Hero from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="border-b border-[#20242b] bg-[#0b0d0f]">
      <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
            TRAIN WITH INTENT.LOG <br />
            EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark ,no-nonsense gym companinon:pick a lift,lock it
            <br />
            into today's plan, and watch the week's work and up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#library"
              className="rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
            >
              Browse Workouts
            </Link>

            <Link
              href="/my-plan"
              className="rounded-full border border-[#3a4048] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              My Plan
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-2xl border border-[#20242b]">
            <Image
              src={Hero}
              alt="Workout training"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
