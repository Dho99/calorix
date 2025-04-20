/*
  Warnings:

  - You are about to drop the column `activity_function` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `activity_level` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `confidence_level` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `current_weight_kg` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `daily_diet` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `diet_experience` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `diet_preferences` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `eating_behavior` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_duration_hour` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_frequency_per_week` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `exercise_intensity` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `goal_priority` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `height_cm` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `hip_cm` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `meal_portion` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `medical_history` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `medication_use` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `motivation_level` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `sleep_hours` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `sleep_quality` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `stress_score` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `target_date` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `target_weight_kg` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `waist_cm` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `water_intake` on the `UserCharacteristics` table. All the data in the column will be lost.
  - Added the required column `activityFactor` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentWeight` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `goal` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `height` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manualCalorieAdjustment` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mealsPerDay` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sleepHours` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetTime` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `targetWeight` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waterIntake` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutDuration` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workoutsPerWeek` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserCharacteristics" DROP COLUMN "activity_function",
DROP COLUMN "activity_level",
DROP COLUMN "confidence_level",
DROP COLUMN "current_weight_kg",
DROP COLUMN "daily_diet",
DROP COLUMN "diet_experience",
DROP COLUMN "diet_preferences",
DROP COLUMN "eating_behavior",
DROP COLUMN "exercise_duration_hour",
DROP COLUMN "exercise_frequency_per_week",
DROP COLUMN "exercise_intensity",
DROP COLUMN "goal_priority",
DROP COLUMN "height_cm",
DROP COLUMN "hip_cm",
DROP COLUMN "meal_portion",
DROP COLUMN "medical_history",
DROP COLUMN "medication_use",
DROP COLUMN "motivation_level",
DROP COLUMN "sleep_hours",
DROP COLUMN "sleep_quality",
DROP COLUMN "stress_score",
DROP COLUMN "target_date",
DROP COLUMN "target_weight_kg",
DROP COLUMN "waist_cm",
DROP COLUMN "water_intake",
ADD COLUMN     "activityFactor" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "currentWeight" INTEGER NOT NULL,
ADD COLUMN     "goal" TEXT NOT NULL,
ADD COLUMN     "height" INTEGER NOT NULL,
ADD COLUMN     "manualCalorieAdjustment" INTEGER NOT NULL,
ADD COLUMN     "mealsPerDay" INTEGER NOT NULL,
ADD COLUMN     "physicalActivities" TEXT[],
ADD COLUMN     "sleepHours" INTEGER NOT NULL,
ADD COLUMN     "targetTime" INTEGER NOT NULL,
ADD COLUMN     "targetWeight" INTEGER NOT NULL,
ADD COLUMN     "waterIntake" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "workoutDuration" INTEGER NOT NULL,
ADD COLUMN     "workoutsPerWeek" INTEGER NOT NULL;
