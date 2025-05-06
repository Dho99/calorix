/*
  Warnings:

  - You are about to drop the column `caloriesBurned` on the `UserTraining` table. All the data in the column will be lost.
  - You are about to drop the column `trainingType` on the `UserTraining` table. All the data in the column will be lost.
  - Added the required column `METValue` to the `UserTraining` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTraining" DROP COLUMN "caloriesBurned",
DROP COLUMN "trainingType",
ADD COLUMN     "METValue" TEXT NOT NULL;
