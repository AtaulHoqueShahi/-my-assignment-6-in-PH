"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import { Workout } from "@/types/workout";

type FitLogContextType = {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
};

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

type FitLogProviderProps = {
  children: ReactNode;
};

const getStoredData = <T,>(key: string, fallback: T): T => {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
};

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plan, setPlan] = useState<Workout[]>(() =>
    getStoredData<Workout[]>("fitlog-plan", []),
  );

  const [saved, setSaved] = useState<Workout[]>(() =>
    getStoredData<Workout[]>("fitlog-saved", []),
  );

  const addToPlan = (workout: Workout) => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.info("Workout is already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast.info("Today's plan can contain a maximum of 5 workouts.");
      return;
    }

    const updatedPlan = [...plan, workout];
    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
    toast.success("Added to today's plan.");
  };

  const removeFromPlan = (id: number) => {
    const updatedPlan = plan.filter((workout) => workout.id !== id);
    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
    toast.success("Workout removed from today's plan.");
  };

  const saveWorkout = (workout: Workout) => {
    const alreadyExists = saved.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.info("Workout is already saved.");
      return;
    }

    const updatedSaved = [...saved, workout];
    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));
    toast.success("Workout saved for later.");
  };

  const removeFromSaved = (id: number) => {
    const updatedSaved = saved.filter((workout) => workout.id !== id);
    setSaved(updatedSaved);
    localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));
    toast.success("Workout removed from saved.");
  };

  const markAsDone = (id: number) => {
    const updatedPlan = plan.filter((workout) => workout.id !== id);
    setPlan(updatedPlan);
    localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));
    toast.success("Workout marked as done.");
  };

  const isInPlan = (id: number) => {
    return plan.some((workout) => workout.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((workout) => workout.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeFromSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
