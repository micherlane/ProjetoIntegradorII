import { Injectable } from "@nestjs/common";
import { ReservationGetOneRepository } from "../repositories/reservation.get.one.repository";

@Injectable()
export class ReservationGetOneService {
    constructor(private readonly reservationGetOneRepository: ReservationGetOneRepository){}

    public async execute(id: string){
        return await this.reservationGetOneRepository.getOneReservation(id);
    }
}