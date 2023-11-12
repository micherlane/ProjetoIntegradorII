import { Controller, Get, Injectable, Req, Res, UseGuards } from "@nestjs/common";
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
    public async getAllReservationPersonal(@Res() res, @Req() req){
        const userId = req['user'].sub;
        const reservationsPersonal = await this.reservationPersonalGetAllService.execute(userId);
        
        return res.json(reservationsPersonal);
    }
}