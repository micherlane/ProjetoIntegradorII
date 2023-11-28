import { HttpStatus, Injectable, Logger } from "@nestjs/common";
import { ReservationCreateRepository } from "../repositories/reservation.create.repository";
import { ReservationCreateDto } from "../dto/create-reservation.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";
import { ReservationVerifyExistsRepository } from "../repositories/reservation.verify.exists.repository";
import { ReservationAuthorPostRepository } from "../repositories/reservation.verify.author.post.respository";

@Injectable()
export class ReservationCreateService {

    constructor(private reservationCreateRepository: ReservationCreateRepository, private reservationVerifyExists: ReservationVerifyExistsRepository, private reservationAuthorPostRepository: ReservationAuthorPostRepository){}

    public async execute(reservationCreateDto: ReservationCreateDto){
       
        const appointment = new Date(reservationCreateDto.appointment);
        const reservationCreateDtoUpdate = {...reservationCreateDto, appointment} as ReservationCreateDto;

        const reservationAlreadyExists = await this.reservationVerifyExists.verifyExistsReservation(reservationCreateDto.userId, reservationCreateDto.postId);
            
        if(reservationAlreadyExists){
            throw new ExceptionError("A reserva para esta publicação já existe.", HttpStatus.BAD_REQUEST);
        }

        const authorIdPost = await this.reservationAuthorPostRepository.getAuthorPost(reservationCreateDto.postId);

        console.log(authorIdPost, reservationCreateDto.userId)
        if(reservationCreateDto.userId === authorIdPost){
            throw new ExceptionError("Não é possível reservar a própria publicação.", HttpStatus.BAD_REQUEST);
        }
            
        return await this.reservationCreateRepository.save(reservationCreateDtoUpdate);
    
    }
}