"use client";

import Image from "next/image";
import { useState } from "react";
import WorkoutSpecs from "./WorkoutSpecs";
import WorkoutInstructions from "./WorkoutInstructions";

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

type WorkoutDetailsProps = {
  workout: Workout;
};

const WorkoutDetails = ({ workout }: WorkoutDetailsProps) => {
  const [addedToPlan, setAddedToPlan] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleAddToPlan = () => {
    setAddedToPlan(true);

    
    const existingPlan = JSON.parse(
      localStorage.getItem("fitlog-plan") || "[]"
    );

    const alreadyExists = existingPlan.some(
      (item: Workout) => item.id === workout.id
    );

    if (!alreadyExists) {
      localStorage.setItem(
        "fitlog-plan",
        JSON.stringify([...existingPlan, workout])
      );
    }
  };

  const handleSave = () => {
    setSaved(true);

    const existingSaved = JSON.parse(
      localStorage.getItem("fitlog-saved") || "[]"
    );

    const alreadyExists = existingSaved.some(
      (item: Workout) => item.id === workout.id
    );

    if (!alreadyExists) {
      localStorage.setItem(
        "fitlog-saved",
        JSON.stringify([...existingSaved, workout])
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0d0f]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">

       
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#20242b] bg-[#111418]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

         
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full border border-[#343a40] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#ccff00]"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              {workout.name}
            </h1>

            <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
              {workout.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAddToPlan}
                disabled={addedToPlan}
                className="rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wide text-black transition hover:bg-[#b8e600] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {addedToPlan
                  ? "Added to Today's Plan"
                  : "Add to Today's Plan"}
              </button>

              <button
                onClick={handleSave}
                disabled={saved}
                className="rounded-full border border-[#3a4048] px-6 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-[#ccff00] hover:text-[#ccff00] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saved ? "Saved" : "Save for Later"}
              </button>
            </div>
          </div>
        </div>

   
        <div className="mt-12">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
              WORKOUT INFO
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase text-white">
              SPECIFICATIONS
            </h2>
          </div>

          <WorkoutSpecs
            equipment={workout.equipment}
            difficulty={workout.difficulty}
            sets={workout.sets}
            reps={workout.reps}
            duration={workout.duration}
            caloriesBurned={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>

     
        <div className="mt-12">
          <WorkoutInstructions
            instructions={workout.instructions}
          />
        </div>

      </div>
    </main>
  );
};

export default WorkoutDetails;