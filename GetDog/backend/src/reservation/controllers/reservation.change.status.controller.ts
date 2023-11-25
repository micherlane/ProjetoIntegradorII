import { Body, Controller, HttpStatus, Injectable, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ReservationChangeStatusService } from "../services/reservation.change.status.service";
import { AuthGuard } from "src/auth/auth.guard";
import { ReservationChangeStatusDto } from "../dto/reservation.change.status.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";


@Injectable()
@ApiTags("Reserva")
@Controller({
    path: "v1"
})

export class ReservationChangeStatusController {
    constructor(private readonly reservationChangeStatusService: ReservationChangeStatusService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post("reservations/status")

    async changeStatusReservation(@Res() res, @Body() reservationChangeStatusDto: ReservationChangeStatusDto){
        if(!reservationChangeStatusDto.id || !reservationChangeStatusDto.status){
            throw new ExceptionError("Por favor, forneça todos os campos obrigatórios.", HttpStatus.UNPROCESSABLE_ENTITY);
        }
               
        const reservation = await this.reservationChangeStatusService.execute(reservationChangeStatusDto.status, reservationChangeStatusDto.id);

        return res.status(HttpStatus.OK).json(reservation);
    }
}