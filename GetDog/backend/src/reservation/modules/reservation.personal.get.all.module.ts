import { Module } from "@nestjs/common";
import { ReservationPersonalGetAllController } from "../controllers/reservation.personal.get.all.controller";
import { ReservationPersonalGetAllService } from "../services/reservation.personal.get.all.service";
import { ReservationPersonalGetAllRepository } from "../repositories/reservation.personal.get.all..repository";

@Module({
    controllers: [ReservationPersonalGetAllController],
    providers: [ReservationPersonalGetAllService, ReservationPersonalGetAllRepository]
})

export class ReservationPersonalGetAllModule {}