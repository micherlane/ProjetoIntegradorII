/*
  Warnings:

  - You are about to drop the column `biography` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `cover_photo` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `gender` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `profile_picture` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `_FollowerToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FollowerToUser" DROP CONSTRAINT "_FollowerToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FollowerToUser" DROP CONSTRAINT "_FollowerToUser_B_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "biography",
DROP COLUMN "cover_photo",
DROP COLUMN "gender",
DROP COLUMN "profile_picture",
ADD COLUMN     "profile_id" TEXT;

-- DropTable
DROP TABLE "_FollowerToUser";

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gender" TEXT,
    "biography" TEXT,
    "profile_picture" TEXT,
    "cover_photo" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FollowerToProfile" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_FollowerToProfile_AB_unique" ON "_FollowerToProfile"("A", "B");

-- CreateIndex
CREATE INDEX "_FollowerToProfile_B_index" ON "_FollowerToProfile"("B");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowerToProfile" ADD CONSTRAINT "_FollowerToProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "followers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FollowerToProfile" ADD CONSTRAINT "_FollowerToProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
