import { Injectable } from "@nestjs/common";
import { TourGetAllRepository } from "../repositories/tour.get.all.repository";

@Injectable()
export class TourGetAllService{
    constructor(private tourGetAllRepository: TourGetAllRepository){}

    public async execute(userId: string, perPage: number, offset: number){
        return await this.tourGetAllRepository.getAllTours(userId, perPage, offset);
    }
}