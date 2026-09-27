import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout/WorkoutDetails";

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

type WorkoutDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const WorkoutDetailsPage = async ({
  params,
}: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const response = await fetch(
    "http://localhost:3000/fitlog.json",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    notFound();
  }

  const workouts: Workout[] = await response.json();

  const workout = workouts.find(
    (item) => item.id === Number(id)
  );

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
};

export default WorkoutDetailsPage;