import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import prismaClient from "src/prisma";
import { tourGetAllDto } from "../dto/tour.get.all.dto";

@Injectable()
export class TourGetAllRepository {
    private logger = new Logger();

    public async getAllTours(userId: string, perPage:number, offset: number){
        try{
            const tuors = await prismaClient.tour.findMany({
                where: {
                    dogWalkReservation: {
                        OR: [
                            {
                                userId: userId
                            },
                            {
                                post: {
                                    authorId: userId
                                }
                            }
                        ]
                    }
                },
                select: {
                    ...tourGetAllDto
                },
                take: perPage,
                skip: offset,
                orderBy: {
                    createdAt: 'desc' 
                }
            });
        
            return tuors;
        } catch (error){
            this.logger.error(`Erro ao buscar todos os passeios do usuário: ${error.message}`);
            throw new ExceptionError("Erro interno do servidor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}