-- DropForeignKey
ALTER TABLE "tours" DROP CONSTRAINT "tours_dogWalkReservationId_fkey";

-- AddForeignKey
ALTER TABLE "tours" ADD CONSTRAINT "tours_dogWalkReservationId_fkey" FOREIGN KEY ("dogWalkReservationId") REFERENCES "DogWalkReservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
