import { reservationGetAllDto } from "src/reservation/dto/reservation.get.all.dto";

export const tourGetAllDto = {
    id: true,
    status: true,
    dogWalkReservation: {
        select: {
            ...reservationGetAllDto
        }
    }
}