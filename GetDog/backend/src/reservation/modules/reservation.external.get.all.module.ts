import { Module } from "@nestjs/common";
import { ReservationExternalGetAllController } from "../controllers/reservation.external.get.all.controller";
import { ReservationExternalGetAllService } from "../services/reservation.external.get.all.provider";
import { ExternalReservationGetAllRepository } from "../repositories/reservation.external.get.all.repository";

@Module({
    controllers: [ReservationExternalGetAllController],
    providers: [ReservationExternalGetAllService, ExternalReservationGetAllRepository]
})

export class ReservationExternalGetAllModule {}