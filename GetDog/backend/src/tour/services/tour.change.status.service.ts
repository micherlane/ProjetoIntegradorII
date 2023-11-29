import { Injectable } from "@nestjs/common";
import { TourChangeStatusRepository } from "../repositories/tour.change.status.repository";
import { TourStatus } from "@prisma/client";

@Injectable()

export class TourChangeStatusService {
    constructor(private readonly tourChangeStatusService: TourChangeStatusRepository){}

    public async execute(status: TourStatus, id: string){
        return await this.tourChangeStatusService.changeStatus(status, id);
    }
}