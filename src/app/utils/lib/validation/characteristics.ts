import z from 'zod';

export const characteristicsSchema = z.object({
    gender: z.string({ message: "Gender is required." }),
    age: z.string({ message: "Age is required." }),
    height: z.string({ message: "Height is required." }),
    currentWeight: z.string({ message: "Current weight is required." }),
    targetWeight: z.string({ message: "Target weight is required." }),
    targetTime: z.string({ message: "Target time is required." }),
    physicalActivities: z.string({ message: "Physical activities are required." }),
    goal: z.string({ message: "Goal is required." }),
    activityFactor: z.string({ message: "Activity factor is required." }),
    mealsPerDay: z.string({ message: "Meals per day are required." }),
    sleepHours: z.string({ message: "Sleep hours are required." }),
    workoutDuration: z.string({ message: "Workout duration is required." }),
});