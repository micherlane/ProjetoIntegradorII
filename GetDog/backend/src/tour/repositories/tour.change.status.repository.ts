import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { TourStatus } from "@prisma/client";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import prismaClient from "src/prisma";
import { tourGetAllDto } from "../dto/tour.get.all.dto";

@Injectable()

export class TourChangeStatusRepository {
    private logger = new Logger('Tour Change Status Repository');

    public async changeStatus(status: TourStatus, id: string){
        try {
            const tour = await prismaClient.tour.update({
                where: {
                    id: id
                },
                data: {
                    status: status
                },
                select: {
                    ...tourGetAllDto
                }
            });

            return tour;
        } catch (error){
            this.logger.error('Erro ao mudar o status da reserva. ', error);
            throw new ExceptionError("Erro Interno do Servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}