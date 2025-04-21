/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `UserCharacteristics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserCharacteristics_userId_key" ON "UserCharacteristics"("userId");
