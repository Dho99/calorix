/*
  Warnings:

  - You are about to drop the column `physicalActivities` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `sportIntensity` on the `UserCharacteristics` table. All the data in the column will be lost.
  - You are about to drop the column `stepsGoal` on the `UserGoal` table. All the data in the column will be lost.
  - You are about to drop the `UserTraining` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `workoutsPerWeek` to the `UserCharacteristics` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserTraining" DROP CONSTRAINT "UserTraining_userId_fkey";

-- AlterTable
ALTER TABLE "UserCharacteristics" DROP COLUMN "physicalActivities",
DROP COLUMN "sportIntensity",
ADD COLUMN     "workoutsPerWeek" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserGoal" DROP COLUMN "stepsGoal";

-- DropTable
DROP TABLE "UserTraining";
