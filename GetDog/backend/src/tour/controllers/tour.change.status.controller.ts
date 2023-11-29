import { Body, Controller, HttpStatus, Injectable, Post, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { TourChangeStatusService } from "../services/tour.change.status.service";
import { AuthGuard } from "src/auth/auth.guard";
import { TourChangeStatusDto } from "../dto/tour.change.status.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";

@Injectable()
@ApiTags('Passeio')
@Controller({
    path: "v1"
})

export class TourChangeStatusController {
    constructor(private readonly tourChangeStatusService: TourChangeStatusService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post('tours/status')

    async changeStatusTours(@Res() res, @Body() tourChangeStatusDto: TourChangeStatusDto){
        if(!tourChangeStatusDto.id || !tourChangeStatusDto.status){
            throw new ExceptionError("Por favor, forneça todos os campos obrigatórios.", HttpStatus.UNPROCESSABLE_ENTITY);
        }

        const tour = await this.tourChangeStatusService.execute(tourChangeStatusDto.status, tourChangeStatusDto.id);

        return res.status(HttpStatus.OK).json(tour);
    }
}