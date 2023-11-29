import { Module } from "@nestjs/common";
import { TourGetAllController } from "../controllers/tour.get.all.controller";
import { TourGetAllService } from "../services/tour.get.all.service";
import { TourGetAllRepository } from "../repositories/tour.get.all.repository";

@Module({
    controllers: [TourGetAllController],
    providers: [TourGetAllService, TourGetAllRepository]
})

export class TourGetAllModule{}