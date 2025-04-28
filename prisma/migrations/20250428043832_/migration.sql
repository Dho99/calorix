/*
  Warnings:

  - You are about to drop the column `sleepTime` on the `SleepTracker` table. All the data in the column will be lost.
  - You are about to drop the column `wakeTime` on the `SleepTracker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SleepTracker" DROP COLUMN "sleepTime",
DROP COLUMN "wakeTime";

-- AlterTable
ALTER TABLE "UserActivites" ADD COLUMN     "effectToBody" TEXT;
