/*
  Warnings:

  - You are about to drop the column `maxDailyCalories` on the `UserGoal` table. All the data in the column will be lost.
  - Added the required column `stepNeeds` to the `UserGoal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserGoal" DROP COLUMN "maxDailyCalories",
ADD COLUMN     "stepNeeds" TEXT NOT NULL;
