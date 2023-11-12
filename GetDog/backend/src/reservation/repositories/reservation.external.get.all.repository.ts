import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import prismaClient from "../../prisma";
import { reservationGetAllDto } from "../dto/reservation.get.all.dto";

@Injectable()
export class ExternalReservationGetAllRepository{
    private logger = new Logger();
    
    public async getAllExternalReservations(userId: string, perPage: number, offset: number){
        try {
            const externalReservations = await prismaClient.dogWalkReservation.findMany({
                where: {
                    post: {
                        authorId: userId
                    }
                },
                select: {
                    ...reservationGetAllDto
                },
                take: perPage,
                skip: offset
            });
            return externalReservations;
        } catch (error){
            this.logger.error(`Erro ao buscar todas as reservas do usuário: ${error.message}`);
            throw new ExceptionError("Erro interno do servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}