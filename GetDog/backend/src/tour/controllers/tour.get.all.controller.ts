import { Controller, Get, Injectable, Query, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { TourGetAllService } from "../services/tour.get.all.service";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags('Passeio')
@Controller({
    path: 'v1'
})

@Injectable()
export class TourGetAllController{
    constructor(private readonly tourGetAllService: TourGetAllService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("tours")
    public async getAll(@Res() res, @Req() req, @Query("page") page: string, @Query("perPage") perPage: string){
        const pageNumber = parseInt(page) || 1;
        const perPageNumber = parseInt(perPage) || 10;
        const offsetNumber = (pageNumber - 1) * perPageNumber;

        const userId = req['user'].sub;

        const tours = await this.tourGetAllService.execute(userId, perPageNumber, offsetNumber);

        return res.json(tours);
    }
}