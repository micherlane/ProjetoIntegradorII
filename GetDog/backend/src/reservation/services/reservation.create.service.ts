import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ReservationCreateRepository } from "../repositories/reservation.create.repository";
import { ReservationCreateDto } from "../dto/create-reservation.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import { ReservationVerifyExistsRepository } from "../repositories/reservation.verify.exists.repository";

@Injectable()
export class ReservationCreateService {

    constructor(private reservationCreateRepository: ReservationCreateRepository, private reservationVerifyExists: ReservationVerifyExistsRepository){}

    public async execute(reservationCreateDto: ReservationCreateDto){
       
        const appointment = new Date(reservationCreateDto.appointment);
        const reservationCreateDtoUpdate = {...reservationCreateDto, appointment} as ReservationCreateDto;

        const reservationAlreadyExists = await this.reservationVerifyExists.verifyExistsReservation(reservationCreateDto.userId, reservationCreateDto.postId);
            
        if(reservationAlreadyExists){
            throw new ExceptionError("A reserva para esta publicação já existe.", HttpStatus.BAD_REQUEST);
        }
            
        return await this.reservationCreateRepository.save(reservationCreateDtoUpdate);
    
    }
}