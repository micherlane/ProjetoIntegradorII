import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ReservationCreateDto } from "../dto/create-reservation.dto";
import { ExceptionError } from "../../middlewares/exceptions/exception.error";
import prismaClient from "../../prisma";

@Injectable()

export class ReservationCreateRepository {
    private logger = new Logger('Reservation Create Repository');

    public async save(reservationCreateDto: ReservationCreateDto){
        try{
            const reservation = await prismaClient.dogWalkReservation.create({
                data: {
                    ...reservationCreateDto
                }
            });

            return reservation;

        } catch (error){
            this.logger.error(`Erro ao criar uma reserva: ${error.message}`);
            throw new ExceptionError("Erro Interno do Servicor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}