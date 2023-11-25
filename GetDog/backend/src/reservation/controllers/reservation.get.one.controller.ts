import { Controller, Get, HttpStatus, Injectable, Param, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { ReservationGetOneService } from "../services/reservation.get.one.service";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags("Postagem")
@Controller({
    path: "v1"
})

@Injectable()
export class ReservationGetOneController {
    constructor(private readonly reservationGetOneService: ReservationGetOneService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("reservations/:reservationId")

    async getDetailsReservation(@Res() res, @Param("reservationId") reservationId: string){
        const reservation  = await this.reservationGetOneService.execute(reservationId);
        return res.status(HttpStatus.OK).json(reservation);
    }
}