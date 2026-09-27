"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";
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

type SortOption = "duration" | "calories" | "rating";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("duration");
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

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

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

        
          {!loading && !error && (
            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />
          )}

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
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}

      
        {!loading && !error && sortedWorkouts.length === 0 && (
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