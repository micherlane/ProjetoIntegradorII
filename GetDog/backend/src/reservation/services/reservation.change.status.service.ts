import { Injectable } from "@nestjs/common";
import { StatusDogWalkReservation } from "@prisma/client";
import { ReservationChangeStatusRepository } from "../repositories/reservation.change.status.repository";

@Injectable()

export class ReservationChangeStatusService {
    constructor(private readonly reservationChangeStatusRepository: ReservationChangeStatusRepository){}

    public async execute(status: StatusDogWalkReservation, id: string){
        return await this.reservationChangeStatusRepository.changeStatus(status, id);
    }
}