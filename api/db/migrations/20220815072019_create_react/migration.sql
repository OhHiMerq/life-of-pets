/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `React` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "React_userId_key" ON "React"("userId");
