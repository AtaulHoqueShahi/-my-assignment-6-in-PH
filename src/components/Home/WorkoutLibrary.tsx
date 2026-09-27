
"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutSkeleton from "./WorkoutSkeleton";

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

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:3000//fitlog.json");

        if (!response.ok) {
          throw new Error("Failed to load workouts");
        }

        const data: Workout[] = await response.json();

        setWorkouts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load workouts.");
      } finally {
        setLoading(false);
      }
    };

    getWorkouts();
  }, []);

  return (
    <section
      id="library"
      className="bg-[#0b0d0f] px-4 py-16"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              THE LIBRARY
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

        </div>

        {loading && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <WorkoutSkeleton key={index} />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-2xl border border-red-900 bg-red-950/30 p-8 text-center">
            <p className="text-sm text-red-400">
              {error}
            </p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}

        {!loading && !error && workouts.length === 0 && (
          <div className="rounded-2xl border border-[#20242b] bg-[#111418] p-12 text-center">
            <h3 className="text-lg font-black uppercase text-white">
              No workouts found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              There are no workouts available right now.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default WorkoutLibrary;


