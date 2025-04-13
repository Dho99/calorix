/*
  Warnings:

  - Added the required column `sender` to the `Chatbot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SENDER" AS ENUM ('USER', 'BOT');

-- AlterTable
ALTER TABLE "Chatbot" ADD COLUMN     "sender" "SENDER" NOT NULL;
