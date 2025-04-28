-- DropForeignKey
ALTER TABLE "UserActivites" DROP CONSTRAINT "UserActivites_foodLogId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivites" DROP CONSTRAINT "UserActivites_physicalActivityLogId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivites" DROP CONSTRAINT "UserActivites_sleepTrackerId_fkey";

-- DropForeignKey
ALTER TABLE "UserActivites" DROP CONSTRAINT "UserActivites_userHydrationId_fkey";

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_sleepTrackerId_fkey" FOREIGN KEY ("sleepTrackerId") REFERENCES "SleepTracker"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_userHydrationId_fkey" FOREIGN KEY ("userHydrationId") REFERENCES "UserHydration"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_foodLogId_fkey" FOREIGN KEY ("foodLogId") REFERENCES "FoodLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivites" ADD CONSTRAINT "UserActivites_physicalActivityLogId_fkey" FOREIGN KEY ("physicalActivityLogId") REFERENCES "PhysicalActivityLog"("id") ON DELETE CASCADE ON UPDATE CASCADE;
