"use client";

import { useEffect, useState } from "react";

import WorkoutCard from "./WorkoutCard";
import WorkoutSkeleton from "./WorkoutSkeleton";

import { getWorkouts } from "@/lib/api";
import { Workout } from "@/types/workout";

const WorkoutLibrary = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getWorkouts();

        setWorkouts(data);
      } catch (error) {
        console.error("Workout fetch error:", error);

        setError("Unable to load workouts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section id="library" className="bg-[#0b0d0f] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h2 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
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
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {!loading && !error && workouts.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
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
