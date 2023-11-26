import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import prismaClient from "../../prisma";
import { reservationGetAllDto } from "../dto/reservation.get.all.dto";


@Injectable()
export class ReservationPersonalGetAllRepository {
    private logger = new Logger();
    public async getAllReservationPersonal(userId: string, perPage: number, offset: number){
        try{
            const reservationsPersonal = await prismaClient.dogWalkReservation.findMany({
                where: {
                    userId: userId
                },
                select: {
                   ...reservationGetAllDto
                },
                take: perPage,
                skip: offset,
                orderBy: {
                    createdAt: 'desc' 
                }
            });

            return reservationsPersonal;
            
        } catch(error){
            this.logger.error(`Erro ao buscar todas as reservas: ${error.message}`);
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}