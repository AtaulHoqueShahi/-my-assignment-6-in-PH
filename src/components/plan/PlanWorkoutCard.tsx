"use client";

import Image from "next/image";
import Link from "next/link";

import { Workout } from "@/types/workout";

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
        {/* Image */}
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

          <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

          {/* Stats */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 8V12L15 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <strong className="text-white">{workout.duration}</strong>
              min
            </span>

            <span className="inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.5 2.5C14 6 11 7.5 11 10C11 11.1 11.7 12 12.7 12.3C12.4 9.7 14.2 8.3 15.3 7.2C17.4 9.1 19 11.5 19 14.2C19 18.2 15.9 21 12 21C8.1 21 5 18.2 5 14.2C5 10.7 7.2 8.1 9.5 6C9.3 8.5 10.5 9.4 11.3 9.8C11 6.7 12.4 4.2 13.5 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong className="text-white">{workout.caloriesBurned}</strong>
              kcal
            </span>

            <span className="inline-flex items-center gap-1.5">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M12 3.5L14.6 8.8L20.5 9.7L16.25 13.8L17.25 19.7L12 16.9L6.75 19.7L7.75 13.8L3.5 9.7L9.4 8.8L12 3.5Z"
                  stroke="#ccff00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <strong className="text-[#ccff00]">{workout.rating}</strong>
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
                type="button"
                onClick={() => onDone(workout.id)}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#ccff00] px-4 py-2 text-[10px] font-black uppercase text-black transition hover:bg-[#b8e600]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12.5L9.5 17L19 7.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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
