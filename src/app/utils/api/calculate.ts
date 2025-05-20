"use server"

import type { StepValues } from "@/app/pages/user/calculate/page";

export const calculateUserData = async (data: StepValues) => {
   const { currentWeight, height, gender, age, activityFactor, targetWeight, targetTime, userMET } = data;
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
  }else{

    deficitPerDay = await calculateDeficitCalories(TDEE, parseInt(String(currentWeight)), parseInt(String(targetWeight)), parseInt(String(targetTime)));
  }

  const stepNeeds = await calculateStepNeeds(deficitPerDay.totalDeficit ?? 0, deficitPerDay.daysLeft ?? 0);

  const calculateUserMET = userMET && Array.isArray(userMET) 
    ? await calculateMET(userMET as { label: string; value: string; duration: string; }[], currentWeight as string) 
    : null;

  return {
    bmi: BMI.toString(),
    bmr: BMR.toString(),
    tdee: TDEE.toString(),
    bodyFatPercentage: bodyFat.toString(),
    hydrationNeeds: waterNeeds,
    ...deficitPerDay,
    stepNeeds: stepNeeds.toString(), //estimated daily steps needed to reach the goal
    userMETValue: calculateUserMET,
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

  const weightDifference = Math.abs(currentWeight - targetWeight);
  
  type Target = {
    goal: string;
    deficitPerDay: string | null;
    daysLeft: string | null;
    totalDeficit: string | null;
    maxDailyCalories: string | null;
  }

  const target: Target = {
    goal: currentWeight > targetWeight ? "deficit" : "surplus",
    deficitPerDay: null,
    daysLeft: null,
    totalDeficit: null,
    maxDailyCalories: null
  };
  
  const currentDate = new Date();
  const targetDate = new Date();
  targetDate.setMonth(currentDate.getMonth() + targetTime);

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  target.daysLeft = await calculateGoalDay(targetTime);
  target.totalDeficit = (weightDifference * 7700).toString();
  if(target.goal === "deficit") {
    
   target.deficitPerDay = ((weightDifference * 7700) / daysDifference).toString(); // 7700 calories per kg of body weight

  } else if(target.goal === "surplus") {
    target.deficitPerDay = ((weightDifference * 7700) / daysDifference).toString(); // 7700 calories per kg of body weight
  } else {
    target.deficitPerDay = tdee.toString();
  }

  target.maxDailyCalories = (tdee - Math.abs(parseFloat(target.deficitPerDay))).toString();

  return target
}


const calculateGoalDay = async (targetTime: number) => {
  const currentDate = new Date();
  const targetDate = new Date();
  targetDate.setMonth(currentDate.getMonth() + targetTime);

  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24); // Convert milliseconds to days
  return Math.ceil(daysDifference).toString();
}

const calculateMET = async(userMET: {label: string, value: string, duration: string}[], currentWeight: string) => {
  let caloriesBurned: number = 0;
  userMET.map((met) => {
    const metValue = parseFloat(met.value);
    caloriesBurned += (metValue * parseFloat(currentWeight) * (parseFloat(met.duration)/60)); // MET value for the activity
  })
  return caloriesBurned.toString();
}

export const calculateStepNeeds = async (totalDeficit: string|number, daysLeft: number|string) => {

  const stepsNeeded = Number(totalDeficit) / 0.045; //use for walk only

  return Math.round(stepsNeeded / Number(daysLeft));

}

// const calculateMaxDailyCalories = async (tdee: number, deficitPerDay: string | null) => {
//   if (!deficitPerDay) {
//     return tdee.toString();
//   }

//   const maxCalories = tdee + Math.abs(parseFloat(deficitPerDay));
//   return maxCalories.toString();
// };