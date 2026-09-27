"use client";

import Image from "next/image";
import Link from "next/link";

type Workout = {
  id: string;
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

      
        <p className="mt-2 text-xs text-gray-500">
          {workout.equipment}
        </p>

       
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#20242b] pt-4">
          <div>
            <p className="text-[10px] uppercase text-gray-500">Duration</p>
            <p className="mt-1 text-xs font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase text-gray-500">Calories</p>
            <p className="mt-1 text-xs font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase text-gray-500">Rating</p>
            <p className="mt-1 text-xs font-bold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default WorkoutCard;