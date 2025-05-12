/*
  Warnings:

  - You are about to drop the column `stepsCount` on the `UserActivites` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PhysicalActivityLog" ADD COLUMN     "stepsCount" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "UserActivites" DROP COLUMN "stepsCount";
