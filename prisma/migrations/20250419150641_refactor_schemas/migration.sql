/*
  Warnings:

  - You are about to drop the `ActivitySession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CalorieEstimation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HeartRateLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActivitySession" DROP CONSTRAINT "ActivitySession_userId_fkey";

-- DropForeignKey
ALTER TABLE "CalorieEstimation" DROP CONSTRAINT "CalorieEstimation_activityId_fkey";

-- DropForeignKey
ALTER TABLE "HeartRateLog" DROP CONSTRAINT "HeartRateLog_activityId_fkey";

-- DropTable
DROP TABLE "ActivitySession";

-- DropTable
DROP TABLE "CalorieEstimation";

-- DropTable
DROP TABLE "HeartRateLog";

-- CreateTable
CREATE TABLE "UserCharacteristics" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "height_cm" INTEGER NOT NULL,
    "current_weight_kg" INTEGER NOT NULL,
    "target_weight_kg" INTEGER NOT NULL,
    "target_date" TIMESTAMP(3) NOT NULL,
    "activity_level" TEXT NOT NULL,
    "meal_portion" TEXT NOT NULL,
    "daily_diet" JSONB NOT NULL,
    "eating_behavior" JSONB NOT NULL,
    "exercise_frequency_per_week" INTEGER NOT NULL,
    "exercise_duration_hour" DOUBLE PRECISION NOT NULL,
    "exercise_intensity" TEXT NOT NULL,
    "activity_function" TEXT NOT NULL,
    "sleep_hours" INTEGER NOT NULL,
    "water_intake" TEXT NOT NULL,
    "stress_score" INTEGER NOT NULL,
    "sleep_quality" TEXT NOT NULL,
    "medical_history" JSONB NOT NULL,
    "medication_use" JSONB NOT NULL,
    "diet_experience" TEXT NOT NULL,
    "diet_preferences" JSONB NOT NULL,
    "waist_cm" INTEGER NOT NULL,
    "hip_cm" INTEGER NOT NULL,
    "goal_priority" TEXT NOT NULL,
    "motivation_level" INTEGER NOT NULL,
    "confidence_level" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCharacteristics_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCharacteristics" ADD CONSTRAINT "UserCharacteristics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
