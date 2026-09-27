"use client";

import { useMemo, useState } from "react";

import PlanSummary from "@/components/plan/PlanSummary";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";
import SortDropdown, { SortOption } from "@/components/plan/SortDropdown";

import { useFitLog } from "@/context/FitLogContext";
import { calculateTotalCalories, calculateTotalMinutes } from "@/lib/utils";

type PlanTab = "today" | "saved";

const MyPlanPage = () => {
  const { plan, saved, removeFromPlan, removeFromSaved, markAsDone } =
    useFitLog();

  const [activeTab, setActiveTab] = useState<PlanTab>("today");

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const totalMinutes = calculateTotalMinutes(plan);
  const totalCalories = calculateTotalCalories(plan);

  const currentWorkouts = useMemo(() => {
    const workouts = activeTab === "today" ? [...plan] : [...saved];

    return workouts.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [activeTab, plan, saved, sortBy]);

  return (
    <main className="min-h-screen bg-[#0b0d0f]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            YOUR WORKOUTS
          </p>

          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            MY PLAN
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Build your daily workout plan and keep your favorite exercises saved
            for later.
          </p>
        </div>

        <PlanSummary
          exercises={plan.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

        <div className="mt-10 flex flex-col gap-4 border-b border-[#20242b] pb-4 sm:flex-row sm:items-center sm:justify-between">
          <PlanTabs activeTab={activeTab} onChange={setActiveTab} />

          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <div className="mt-6">
          {currentWorkouts.length === 0 ? (
            <EmptyPlan type={activeTab} />
          ) : (
            <div className="space-y-4">
              {currentWorkouts.map((workout) => (
                <PlanWorkoutCard
                  key={workout.id}
                  workout={workout}
                  isSaved={activeTab === "saved"}
                  onRemove={
                    activeTab === "today" ? removeFromPlan : removeFromSaved
                  }
                  onDone={activeTab === "today" ? markAsDone : undefined}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
