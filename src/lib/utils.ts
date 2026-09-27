import { Workout } from "@/types/workout";

export const calculateTotalMinutes = (
  workouts: Workout[]
) => {
  return workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );
};

export const calculateTotalCalories = (
  workouts: Workout[]
) => {
  return workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );
};