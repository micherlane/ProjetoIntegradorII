import { Body, Controller, HttpStatus, Injectable, Post, Res, UseGuards } from "@nestjs/common";
import { ReservationCreateService } from "../services/reservation.create.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { ReservationCreateDto } from "../dto/create-reservation.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";

@Injectable()

@ApiTags("Reserva")
@Controller({
    path: "v1"
})

export class ReservationCreateController {
    constructor(private reservationCreateService: ReservationCreateService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post("reservations")

    async createReservation(@Res() res, @Body() reservationCreateDto: ReservationCreateDto){

        if(!reservationCreateDto.address || !reservationCreateDto.appointment || !reservationCreateDto.postId || !reservationCreateDto.userId){
            throw new ExceptionError("Por favor, forneça todos os campos obrigatórios.", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        const reservation = await this.reservationCreateService.execute(reservationCreateDto);

        return res.json(reservation);

    }

}