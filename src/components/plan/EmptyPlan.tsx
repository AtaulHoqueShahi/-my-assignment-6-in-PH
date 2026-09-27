"use client";

import Link from "next/link";

type EmptyPlanProps = {
  type: "today" | "saved";
};

const EmptyPlan = ({ type }: EmptyPlanProps) => {
  const isToday = type === "today";

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#343a40] bg-[#111418] px-6 py-14 text-center">
    
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#343a40] bg-[#181c20]">
        {isToday ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 6V12L16 14"
              stroke="#ccff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="8" stroke="#ccff00" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 4H18V21L12 17.5L6 21V4Z"
              stroke="#ccff00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>

      <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
        NOTHING HERE YET
      </p>

      <h3 className="mt-2 text-2xl font-black uppercase text-white">
        {isToday ? "Your plan is empty" : "No saved workouts"}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
      >
        Go to workouts
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M5 12H19M13 6L19 12L13 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default EmptyPlan;
