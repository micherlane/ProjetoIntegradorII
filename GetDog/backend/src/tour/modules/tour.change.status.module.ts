import { Module } from "@nestjs/common";
import { TourChangeStatusController } from "../controllers/tour.change.status.controller";
import { TourChangeStatusService } from "../services/tour.change.status.service";
import { TourChangeStatusRepository } from "../repositories/tour.change.status.repository";

@Module({
    controllers: [TourChangeStatusController],
    providers: [TourChangeStatusService, TourChangeStatusRepository]
})

export class TourChangeStatusModule{}