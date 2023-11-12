import { Injectable } from "@nestjs/common";
import { ExternalReservationGetAllRepository } from "../repositories/reservation.external.get.all.repository";

@Injectable()
export class ReservationExternalGetAllService {
    constructor(private reservationExternalGetAllRepository: ExternalReservationGetAllRepository){}

    public async execute(userId: string){
        return await this.reservationExternalGetAllRepository.getAllExternalReservations(userId);
    }
}