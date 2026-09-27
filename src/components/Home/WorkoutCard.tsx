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
  rating: number;
};

type WorkoutCardProps = {
  workout: Workout;
};

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-[#20242b] bg-[#111418] transition hover:-translate-y-1 hover:border-[#ccff00]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#181c20]">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.slice(0, 2).map((muscle) => (
            <span
              key={muscle}
              className="rounded-full border border-[#343a40] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-black uppercase tracking-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-2 text-xs text-gray-500">{workout.equipment}</p>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#20242b] pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181c20]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="8"
                  stroke="#ccff00"
                  strokeWidth="2"
                />
                <path
                  d="M12 8V12L15 14"
                  stroke="#ccff00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-wide text-gray-500">
                Duration
              </p>
              <p className="mt-0.5 text-xs font-bold text-white">
                {workout.duration} min
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181c20]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.5 2.5C14 6 11 7.5 11 10C11 11.1 11.7 12 12.7 12.3C12.4 9.7 14.2 8.3 15.3 7.2C17.4 9.1 19 11.5 19 14.2C19 18.2 15.9 21 12 21C8.1 21 5 18.2 5 14.2C5 10.7 7.2 8.1 9.5 6C9.3 8.5 10.5 9.4 11.3 9.8C11 6.7 12.4 4.2 13.5 2.5Z"
                  stroke="#ccff00"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-wide text-gray-500">
                Calories
              </p>
              <p className="mt-0.5 text-xs font-bold text-white">
                {workout.caloriesBurned} kcal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#181c20]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-wide text-gray-500">
                Rating
              </p>
              <p className="mt-0.5 text-xs font-bold text-[#ccff00]">
                {workout.rating}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
