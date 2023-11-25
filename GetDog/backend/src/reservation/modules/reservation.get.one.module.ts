import { Module } from "@nestjs/common";
import { ReservationGetOneController } from "../controllers/reservation.get.one.controller";
import { ReservationGetOneService } from "../services/reservation.get.one.service";
import { ReservationGetOneRepository } from "../repositories/reservation.get.one.repository";

@Module({
    controllers: [ReservationGetOneController],
    providers: [ReservationGetOneService, ReservationGetOneRepository]
})

export class ReservationGetOneModule{}