/*
  Warnings:

  - You are about to drop the column `botResponse` on the `Chatbot` table. All the data in the column will be lost.
  - You are about to drop the column `userQuery` on the `Chatbot` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Chatbot" DROP COLUMN "botResponse",
DROP COLUMN "userQuery",
ADD COLUMN     "payload" TEXT;
