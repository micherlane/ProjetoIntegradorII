-- CreateEnum
CREATE TYPE "TourStatus" AS ENUM ('SCHEDULED', 'CONCLUDED', 'IN_PROGRESS', 'CANCELED');

-- AlterTable
ALTER TABLE "DogWalkReservation" ADD COLUMN     "tourId" TEXT;

-- CreateTable
CREATE TABLE "Tour" (
    "id" TEXT NOT NULL,
    "status" "TourStatus" NOT NULL DEFAULT 'CANCELED',
    "dogWalkReservationId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tour_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tour_dogWalkReservationId_key" ON "Tour"("dogWalkReservationId");

-- AddForeignKey
ALTER TABLE "Tour" ADD CONSTRAINT "Tour_dogWalkReservationId_fkey" FOREIGN KEY ("dogWalkReservationId") REFERENCES "DogWalkReservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
