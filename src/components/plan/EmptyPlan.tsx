import Link from "next/link";

type EmptyPlanProps = {
  type: "today" | "saved";
};

const EmptyPlan = ({ type }: EmptyPlanProps) => {
  const isToday = type === "today";

  return (
    <div className="rounded-2xl border border-dashed border-[#343a40] bg-[#111418] px-6 py-14 text-center">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1b2015] text-2xl">
        {isToday ? "＋" : "♡"}
      </div>

      <h3 className="mt-5 text-xl font-black uppercase text-white">
        {isToday
          ? "No saved workouts"
          : "NOTHING HERE YET"}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
        {isToday
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts for later and they will appear here."}
      </p>

      <Link
        href="/#library"
        className="mt-6 inline-flex rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600]"
      >
       Go to workoouts
      </Link>
    </div>
  );
};

export default EmptyPlan;