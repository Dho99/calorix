"use server"

import type { StepValues } from "@/app/pages/user/calculate/page";

export const calculateUserData = async (data: StepValues) => {
   const { currentWeight, height, gender, age, activityFactor, targetWeight, targetTime } = data;
   const manualCalorieAdjustment = data.manualCalorieAdjustment;

  const BMI = await calculateBMI(parseFloat(String(currentWeight)), parseFloat(String(height)));
  const BMR = await calculateBMR(parseFloat(String(currentWeight)), parseFloat(String(height)), String(gender), parseInt(String(age)));
  const TDEE = await calculateTDEE(BMR, parseFloat(String(activityFactor)));

  const bodyFat = (1.2 * BMI) + (0.23 * parseInt(String(age))) - (gender === "male" ? 16.2 : 5.4) ;
  const waterNeeds = parseFloat(String(currentWeight)) * 0.035;
  
  let deficitPerDay;
  
  if(manualCalorieAdjustment) {
    deficitPerDay = {
      goal: parseFloat(String(manualCalorieAdjustment)) > 0 ? "surplus" : "deficit",
      deficitPerDay: manualCalorieAdjustment,
      daysLeft: null
    }
  }
  deficitPerDay = await calculateDeficitCalories(TDEE, parseInt(String(currentWeight)), parseInt(String(targetWeight)), parseInt(String(targetTime)));

  const stepNeeds = await calculateStepNeeds(currentWeight as string, activityFactor as string, deficitPerDay.deficitPerDay as string);

  return {
    bmi: BMI.toString(),
    bmr: BMR.toString(),
    tdee: TDEE.toString(),
    bodyFatPercentage: bodyFat.toString(),
    hydrationNeeds: waterNeeds.toString(),
    ...deficitPerDay,
    stepsGoal: stepNeeds, //estimated daily steps needed to reach the goal
  }
} 

const calculateBMI = async (weight: number, height: number) => {
  const heightInMeters = height / 100; // Convert height from cm to meters
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}

const calculateBMR = async (weight: number, height: number, gender: string, age: number) => {
  let bmr;

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  return bmr;
}

const calculateTDEE = async (bmr: number, activityLevel: number) => {
  return (bmr * activityLevel);
}

const calculateDeficitCalories = async (tdee: number, currentWeight: number, targetWeight: number, targetTime: number) => {

  let weightDifference = Math.abs(currentWeight - targetWeight);
  
  type Target = {
    goal: string;
    deficitPerDay: string | null;
    daysLeft: string | null;
  }

  let target: Target = {
    goal: currentWeight > targetWeight ? "deficit" : "surplus",
    deficitPerDay: null,
    daysLeft: null
  };
  
  const currentDate = new Date();
  const targetDate = new Date();
  targetDate.setMonth(currentDate.getMonth() + targetTime);

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  target.daysLeft = Math.ceil(daysDifference).toString();
  if(target.goal === "deficit") {
   target.deficitPerDay = ((weightDifference * 7700) / daysDifference).toString(); // 7700 calories per kg of body weight
  } else if(target.goal === "surplus") {
    target.deficitPerDay = ((weightDifference * 7700) / daysDifference).toString(); // 7700 calories per kg of body weight
  } else {
    target.deficitPerDay = tdee.toString();
  }

  return target
}

const calculateStepNeeds = async (currentWeight: string, activityFactor: string, deficitPerDay: string) => {
  const caloriesPerStep = (parseFloat(activityFactor) * parseFloat(currentWeight) * 3.5) / (200 * 60); // MET value for walking
  return (Math.abs(parseFloat(deficitPerDay)) / caloriesPerStep).toString();
}

const calculateGoalDay = async (targetTime: number) => {
  const currentDate = new Date();
  const targetDate = new Date();
  targetDate.setMonth(currentDate.getMonth() + targetTime);

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  return Math.ceil(daysDifference).toString();
}
