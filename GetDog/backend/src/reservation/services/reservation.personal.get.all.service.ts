import { Injectable } from "@nestjs/common";
import { ReservationPersonalGetAllRepository } from "../repositories/reservation.personal.get.all..repository";

@Injectable()
export class ReservationPersonalGetAllService {
    constructor(private reservationPersonalGetAllRespository: ReservationPersonalGetAllRepository){}

    public async execute(userId: string, perPage: number, offset: number){
        return await this.reservationPersonalGetAllRespository.getAllReservationPersonal(userId, perPage, offset);
    }
}