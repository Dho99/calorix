/*
  Warnings:

  - The `hydrationNeeds` column on the `UserGoal` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "UserGoal" DROP COLUMN "hydrationNeeds",
ADD COLUMN     "hydrationNeeds" DOUBLE PRECISION;
