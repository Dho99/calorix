/*
  Warnings:

  - You are about to drop the column `activityName` on the `PhysicalActivityLog` table. All the data in the column will be lost.
  - You are about to drop the column `metValue` on the `PhysicalActivityLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PhysicalActivityLog` DROP COLUMN `activityName`,
    DROP COLUMN `metValue`;

-- CreateTable
CREATE TABLE `ActivityType` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `metValue` DOUBLE NOT NULL,
    `physicalActivityId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ActivityType` ADD CONSTRAINT `ActivityType_physicalActivityId_fkey` FOREIGN KEY (`physicalActivityId`) REFERENCES `PhysicalActivityLog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
