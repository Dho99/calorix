/*
  Warnings:

  - You are about to drop the column `calories` on the `UserActivites` table. All the data in the column will be lost.
  - You are about to drop the column `heartRate` on the `UserActivites` table. All the data in the column will be lost.
  - You are about to drop the column `steps` on the `UserActivites` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sleepTrackerId]` on the table `UserActivites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userHydrationId]` on the table `UserActivites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[foodLogId]` on the table `UserActivites` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[physicalActivityLogId]` on the table `UserActivites` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "SleepTracker_userId_key";

-- DropIndex
DROP INDEX "UserActivites_userId_key";

-- AlterTable
ALTER TABLE "UserActivites" DROP COLUMN "calories",
DROP COLUMN "heartRate",
DROP COLUMN "steps",
ADD COLUMN     "foodLogId" TEXT,
ADD COLUMN     "physicalActivityLogId" TEXT,
ADD COLUMN     "sleepTrackerId" TEXT,
ADD COLUMN     "userHydrationId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "UserActivites_sleepTrackerId_key" ON "UserActivites"("sleepTrackerId");

-- CreateIndex
CREATE UNIQUE INDEX "UserActivites_userHydrationId_key" ON "UserActivites"("userHydrationId");

-- CreateIndex
CREATE UNIQUE INDEX "UserActivites_foodLogId_key" ON "UserActivites"("foodLogId");

-- CreateIndex
CREATE UNIQUE INDEX "UserActivites_physicalActivityLogId_key" ON "UserActivites"("physicalActivityLogId");

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_sleepTrackerId_fkey" FOREIGN KEY ("sleepTrackerId") REFERENCES "SleepTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_userHydrationId_fkey" FOREIGN KEY ("userHydrationId") REFERENCES "UserHydration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_foodLogId_fkey" FOREIGN KEY ("foodLogId") REFERENCES "FoodLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_physicalActivityLogId_fkey" FOREIGN KEY ("physicalActivityLogId") REFERENCES "PhysicalActivityLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
