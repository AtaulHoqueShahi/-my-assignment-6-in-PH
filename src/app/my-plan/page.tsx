
"use client";

import { useState } from "react";
import PlanSummary from "@/components/plan/PlanSummary";
import PlanTabs from "@/components/plan/PlanTabs";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyPlan from "@/components/plan/EmptyPlan";
import SortDropdown, {
  SortOption,
} from "@/components/plan/SortDropdown";

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

type PlanTab = "today" | "saved";

const getStoredWorkouts = (key: string): Workout[] => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedData = localStorage.getItem(key);

    if (!storedData) {
      return [];
    }

    const parsedData = JSON.parse(storedData);

    return Array.isArray(parsedData) ? parsedData : [];
  } catch (error) {
    console.error(`Failed to load ${key}:`, error);
    return [];
  }
};

const MyPlanPage = () => {
  const [plan, setPlan] = useState<Workout[]>(() =>
    getStoredWorkouts("fitlog-plan")
  );

  const [saved, setSaved] = useState<Workout[]>(() =>
    getStoredWorkouts("fitlog-saved")
  );

  const [activeTab, setActiveTab] =
    useState<PlanTab>("today");

  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const removeFromPlan = (id: number) => {
    const updatedPlan = plan.filter(
      (workout) => workout.id !== id
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );
  };

  const removeFromSaved = (id: number) => {
    const updatedSaved = saved.filter(
      (workout) => workout.id !== id
    );

    setSaved(updatedSaved);

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updatedSaved)
    );
  };

  const markAsDone = (id: number) => {
    const updatedPlan = plan.filter(
      (workout) => workout.id !== id
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan)
    );
  };

  const currentWorkouts =
    activeTab === "today" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort(
    (a, b) => {
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
    }
  );

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

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
          Cap of live lifts for today.Finish them,then load more.
          </p>
        </div>

        <PlanSummary
          exercises={plan.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />

   
        <div className="mt-10">
          <PlanTabs
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

  
        {currentWorkouts.length > 0 && (
          <div className="mt-6 flex justify-end">
            <SortDropdown
              value={sortBy}
              onChange={setSortBy}
            />
          </div>
        )}

  
        {sortedWorkouts.length === 0 ? (
          <div className="mt-6">
            <EmptyPlan type={activeTab} />
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {sortedWorkouts.map((workout) => (
              <PlanWorkoutCard
                key={workout.id}
                workout={workout}
                isSaved={activeTab === "saved"}
                onRemove={
                  activeTab === "today"
                    ? removeFromPlan
                    : removeFromSaved
                }
                onDone={
                  activeTab === "today"
                    ? markAsDone
                    : undefined
                }
              />
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default MyPlanPage;
