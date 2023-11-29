/*
  Warnings:

  - You are about to drop the `Tour` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_dogWalkReservationId_fkey";

-- DropTable
DROP TABLE "Tour";

-- CreateTable
CREATE TABLE "tours" (
    "id" TEXT NOT NULL,
    "status" "TourStatus" NOT NULL DEFAULT 'CANCELED',
    "dogWalkReservationId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tours_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tours_dogWalkReservationId_key" ON "tours"("dogWalkReservationId");

-- AddForeignKey
ALTER TABLE "tours" ADD CONSTRAINT "tours_dogWalkReservationId_fkey" FOREIGN KEY ("dogWalkReservationId") REFERENCES "DogWalkReservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
