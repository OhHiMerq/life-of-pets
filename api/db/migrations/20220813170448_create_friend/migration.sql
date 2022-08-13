/*
  Warnings:

  - Added the required column `profileId` to the `Friend` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Friend" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "profileId" INTEGER NOT NULL,
    "userId" INTEGER,
    CONSTRAINT "Friend_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Friend" ("id", "userId") SELECT "id", "userId" FROM "Friend";
DROP TABLE "Friend";
ALTER TABLE "new_Friend" RENAME TO "Friend";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
