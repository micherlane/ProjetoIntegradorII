import { Module } from "@nestjs/common";
import { ReservationCreateController } from "../controllers/reservation.create.controller";
import { ReservationCreateService } from "../services/reservation.create.service";
import { ReservationCreateRepository } from "../repositories/reservation.create.repository";
import { ReservationVerifyExistsRepository } from "../repositories/reservation.verify.exists.repository";

@Module({
    controllers: [ReservationCreateController],
    providers: [ ReservationCreateService, ReservationCreateRepository, ReservationVerifyExistsRepository]
})

export class ReservationCreateModule {}