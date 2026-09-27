
"use client";

import Image from "next/image";
import Link from "next/link";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

type PlanWorkoutCardProps = {
  workout: Workout;
  isSaved?: boolean;
  onRemove: (id: number) => void;
  onDone?: (id: number) => void;
};

const PlanWorkoutCard = ({
  workout,
  isSaved = false,
  onRemove,
  onDone,
}: PlanWorkoutCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#20242b] bg-[#111418]">

      <div className="grid sm:grid-cols-[180px_1fr]">

        <div className="relative aspect-[4/3] sm:aspect-auto">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 180px"
          />
        </div>

        <div className="p-5">

          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.slice(0, 2).map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-[#343a40] px-2.5 py-1 text-[10px] font-bold uppercase text-[#ccff00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="mt-3 text-xl font-black uppercase text-white">
            {workout.name}
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            {workout.equipment}
          </p>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
            <span>
              <strong className="text-white">
                {workout.duration}
              </strong>{" "}
              min
            </span>

            <span>
              <strong className="text-white">
                {workout.caloriesBurned}
              </strong>{" "}
              kcal
            </span>

            <span>
              <strong className="text-[#ccff00]">
                ★ {workout.rating}
              </strong>
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">

            <Link
              href={`/workouts/${workout.id}`}
              className="rounded-full border border-[#343a40] px-4 py-2 text-[10px] font-black uppercase text-white transition hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              View Details
            </Link>

            {!isSaved && onDone && (
              <button
                onClick={() => onDone(workout.id)}
                className="rounded-full bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase text-black transition hover:bg-[#b8e600]"
              >
                Mark as Done
              </button>
            )}

            <button
              onClick={() => onRemove(workout.id)}
             

              className="flex h-8 w-8 items-center justify-center text-lg font-bold text-blue-50 transition hover:bg-red-950/40"
            >
              ×
            </button>

          </div>
        </div>
      </div>
    </article>
  );
};

export default PlanWorkoutCard;
