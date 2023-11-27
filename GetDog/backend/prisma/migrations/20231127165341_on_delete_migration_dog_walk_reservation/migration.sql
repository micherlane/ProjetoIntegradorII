-- DropForeignKey
ALTER TABLE "DogWalkReservation" DROP CONSTRAINT "DogWalkReservation_postId_fkey";

-- DropForeignKey
ALTER TABLE "DogWalkReservation" DROP CONSTRAINT "DogWalkReservation_userId_fkey";

-- AddForeignKey
ALTER TABLE "DogWalkReservation" ADD CONSTRAINT "DogWalkReservation_postId_fkey" FOREIGN KEY ("postId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DogWalkReservation" ADD CONSTRAINT "DogWalkReservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
