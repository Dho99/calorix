/*
  Warnings:

  - Changed the type of `age` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `height` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `currentWeight` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `targetWeight` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `targetTime` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `physicalActivities` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `goal` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `activityFactor` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `mealsPerDay` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `waterIntake` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `sleepHours` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `workoutsPerWeek` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `workoutDuration` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `manualCalorieAdjustment` on the `UserCharacteristics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserCharacteristics" DROP COLUMN "age",
ADD COLUMN     "age" DOUBLE PRECISION NOT NULL,
DROP COLUMN "height",
ADD COLUMN     "height" DOUBLE PRECISION NOT NULL,
DROP COLUMN "currentWeight",
ADD COLUMN     "currentWeight" DOUBLE PRECISION NOT NULL,
DROP COLUMN "targetWeight",
ADD COLUMN     "targetWeight" DOUBLE PRECISION NOT NULL,
DROP COLUMN "targetTime",
ADD COLUMN     "targetTime" DOUBLE PRECISION NOT NULL,
DROP COLUMN "physicalActivities",
ADD COLUMN     "physicalActivities" DOUBLE PRECISION NOT NULL,
DROP COLUMN "goal",
ADD COLUMN     "goal" DOUBLE PRECISION NOT NULL,
DROP COLUMN "activityFactor",
ADD COLUMN     "activityFactor" DOUBLE PRECISION NOT NULL,
DROP COLUMN "mealsPerDay",
ADD COLUMN     "mealsPerDay" DOUBLE PRECISION NOT NULL,
DROP COLUMN "waterIntake",
ADD COLUMN     "waterIntake" DOUBLE PRECISION NOT NULL,
DROP COLUMN "sleepHours",
ADD COLUMN     "sleepHours" DOUBLE PRECISION NOT NULL,
DROP COLUMN "workoutsPerWeek",
ADD COLUMN     "workoutsPerWeek" DOUBLE PRECISION NOT NULL,
DROP COLUMN "workoutDuration",
ADD COLUMN     "workoutDuration" DOUBLE PRECISION NOT NULL,
DROP COLUMN "manualCalorieAdjustment",
ADD COLUMN     "manualCalorieAdjustment" DOUBLE PRECISION NOT NULL;
