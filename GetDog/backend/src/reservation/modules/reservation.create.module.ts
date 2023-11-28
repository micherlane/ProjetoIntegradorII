import { Module } from "@nestjs/common";
import { ReservationCreateController } from "../controllers/reservation.create.controller";
import { ReservationCreateService } from "../services/reservation.create.service";
import { ReservationCreateRepository } from "../repositories/reservation.create.repository";
import { ReservationVerifyExistsRepository } from "../repositories/reservation.verify.exists.repository";
import { ReservationAuthorPostRepository } from "../repositories/reservation.verify.author.post.respository";

@Module({
    controllers: [ReservationCreateController],
    providers: [ ReservationCreateService, ReservationCreateRepository, ReservationVerifyExistsRepository, ReservationAuthorPostRepository]
})

export class ReservationCreateModule {}