import { Controller, Get, Injectable, Query, Req, Res, UseGuards } from "@nestjs/common";
import { ReservationExternalGetAllService } from "../services/reservation.external.get.all.service";
import { AuthGuard } from "src/auth/auth.guard";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("Reserva")
@Controller({
    path: "v1"
})

@Injectable()
export class ReservationExternalGetAllController {
    constructor(private reservationExternalGetAllService: ReservationExternalGetAllService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("reservations/external")
    public async getAll(@Res() res, @Req() req, @Query("page") page: string, @Query("perPage") perPage: string,){
        const pageNumber = parseInt(page) || 1;
        const perPageNumber = parseInt(perPage) || 10;
        const offsetNumber = (pageNumber - 1) * perPageNumber;

        const userId = req['user'].sub;
        const reservations = await this.reservationExternalGetAllService.execute(userId, perPageNumber, offsetNumber);

        return res.json(reservations);
    }
}