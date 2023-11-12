import { Controller, Get, Injectable, Req, Res, UseGuards } from "@nestjs/common";
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
    public async getAll(@Res() res, @Req() req){
        const userId = req['user'].sub;
        const reservations = await this.reservationExternalGetAllService.execute(userId);

        return res.json(reservations);
    }
}