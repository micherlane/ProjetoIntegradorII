import prismaClient from "src/prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import { reservationGetAllDto } from "../dto/reservation.get.all.dto";

@Injectable()

export class ReservationGetOneRepository {
    private logger = new Logger('ReservationGetOneRepository');

    public async getOneReservation(id: string){
        try {
            const reservation = await prismaClient.dogWalkReservation.findFirst({
                where: {
                    id: id
                },
                select: {
                    ...reservationGetAllDto
                }
            });

            return reservation;
        } catch (error){
            this.logger.error(`Erro ao buscar detalhes da reserva: ${error.message}`)
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}