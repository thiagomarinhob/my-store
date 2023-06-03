/*
  Warnings:

  - You are about to drop the column `userId` on the `permissions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "permissions" DROP CONSTRAINT "permissions_userId_fkey";

-- AlterTable
ALTER TABLE "permissions" DROP COLUMN "userId";
