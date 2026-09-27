type WorkoutSpecsProps = {
  equipment: string;
  difficulty: string;
  sets: number;
  reps: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
};

const WorkoutSpecs = ({
  equipment,
  difficulty,
  sets,
  reps,
  duration,
  caloriesBurned,
  rating,
}: WorkoutSpecsProps) => {
  const specs = [
    {
      label: "Equipment",
      value: equipment,
    },
    {
      label: "Difficulty",
      value: difficulty,
    },
    {
      label: "Sets",
      value: sets,
    },
    {
      label: "Reps",
      value: reps,
    },
    {
      label: "Duration",
      value: `${duration} min`,
    },
    {
      label: "Calories",
      value: `${caloriesBurned} kcal`,
    },
    {
      label: "Rating",
      value: `★ ${rating}`,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="rounded-xl border border-[#20242b] bg-[#111418] p-4"
        >
          <p className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
            {spec.label}
          </p>

          <p className="mt-2 text-sm font-bold text-white">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutSpecs;