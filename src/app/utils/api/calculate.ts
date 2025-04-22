"use server"

import type { StepValues } from "@/app/pages/user/calculate/page"
import axios from "axios";

export const calculateUserData = async (data: StepValues) => {
   const { currentWeight, height, gender, age, activityFactor, manualCalorieAdjustment } = data;
   
  const BMI = await calculateBMI(parseFloat(String(currentWeight)), parseFloat(String(height)));
  const BMR = await calculateBMR(parseFloat(String(currentWeight)), parseFloat(String(height)), String(gender), parseInt(String(age)));
  const TDEE = await calculateTDEE(BMR, parseFloat(String(activityFactor)), parseFloat(String(manualCalorieAdjustment)));

  console.log("BMI: ", BMI);
  console.log("BMR: ", BMR);
  console.log("TDEE: ", TDEE);


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

const calculateTDEE = async (bmr: number, activityLevel: number, manualCalorieAdjustment: number) => {
  return bmr * activityLevel + manualCalorieAdjustment;

}