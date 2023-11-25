import { Module } from "@nestjs/common";
import { ReservationChangeStatusController } from "../controllers/reservation.change.status.controller";
import { ReservationChangeStatusService } from "../services/reservation.change.status.service";
import { ReservationChangeStatusRepository } from "../repositories/reservation.change.status.repository";

@Module({
    controllers: [ReservationChangeStatusController],
    providers: [ReservationChangeStatusService, ReservationChangeStatusRepository]
})

export class ReservationChangeStatusModule {}