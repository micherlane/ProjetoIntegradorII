import { ApiProperty } from "@nestjs/swagger";
import { StatusDogWalkReservation } from "@prisma/client";

export class ReservationChangeStatusDto {
    @ApiProperty()
    status: StatusDogWalkReservation;
    @ApiProperty()
    id: string;
}