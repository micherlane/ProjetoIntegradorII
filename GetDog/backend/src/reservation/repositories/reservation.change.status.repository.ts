import prismaClient from "src/prisma";
import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { reservationGetAllDto } from "../dto/reservation.get.all.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import { StatusDogWalkReservation } from "@prisma/client";

@Injectable()

export class ReservationChangeStatusRepository {
    private logger = new Logger('Reservation Change Status Repository');

    public async changeStatus(status: StatusDogWalkReservation, id: string){
        try {
            let dataUpdate = {
            };

            if(status === StatusDogWalkReservation.ACCEPTED){
                const tour = await prismaClient.tour.create({
                    data: {
                        dogWalkReservationId: id
                    }
                });

                dataUpdate = {
                    statusDogWalkReservation: status,
                    tourId: tour.id
                }
            } else {
                dataUpdate = {
                    statusDogWalkReservation: status
                }
            }

            const reservation = await prismaClient.dogWalkReservation.update({
                where: {
                    id: id
                },
                data: {
                   ...dataUpdate    
                },
                select: {
                    ...reservationGetAllDto
                },
            });

            return reservation;
        } catch (error){
            this.logger.error(`Erro ao mudar o status da reserva: ${error.message}`);
            throw new ExceptionError("Erro Interno do Servicor", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}