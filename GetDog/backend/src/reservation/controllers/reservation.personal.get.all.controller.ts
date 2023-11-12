import { Controller, Get, Injectable, Query, Req, Res, UseGuards } from "@nestjs/common";
import { ReservationPersonalGetAllService } from "../services/reservation.personal.get.all.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../../auth/auth.guard";

@ApiTags("Reserva")
@Controller({
    path: "v1"
})

@Injectable()
export class ReservationPersonalGetAllController {
    constructor(private reservationPersonalGetAllService: ReservationPersonalGetAllService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("reservations/personal")
    public async getAllReservationPersonal(@Res() res, @Req() req, @Query("page") page: string, @Query("perPage") perPage: string, ){
        const pageNumber = parseInt(page) || 1;
        const perPageNumber = parseInt(perPage) || 10;
        const offsetNumber = (pageNumber - 1) * perPageNumber;

        const userId = req['user'].sub;
        const reservationsPersonal = await this.reservationPersonalGetAllService.execute(userId, perPageNumber, offsetNumber);
        
        return res.json(reservationsPersonal);
    }
}