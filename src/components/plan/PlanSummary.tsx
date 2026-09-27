type PlanSummaryProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

const PlanSummary = ({
  exercises,
  minutes,
  calories,
}: PlanSummaryProps) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="rounded-2xl border border-[#20242b] bg-[#111418] p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Exercises
        </p>

        <p className="mt-2 text-2xl font-black text-white">
          {exercises}
        </p>
      </div>

      <div className="rounded-2xl border border-[#20242b] bg-[#111418] p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Minutes
        </p>

        <p className="mt-2 text-2xl font-black text-white">
          {minutes}
        </p>
      </div>

      <div className="rounded-2xl border border-[#20242b] bg-[#111418] p-4 sm:p-5">
        <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
          Calories
        </p>

        <p className="mt-2 text-2xl font-black text-[#ccff00]">
          {calories}
        </p>
      </div>
    </div>
  );
};

export default PlanSummary;