/*
  Warnings:

  - Added the required column `category` to the `UserActivites` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ACTIVITY_TYPE" AS ENUM ('SLEEP_TRACKER', 'USER_HYDRATION', 'FOOD_LOG', 'PHYSICAL_ACTIVITY');

-- AlterTable
ALTER TABLE "UserActivites" ADD COLUMN     "category" "ACTIVITY_TYPE" NOT NULL;
