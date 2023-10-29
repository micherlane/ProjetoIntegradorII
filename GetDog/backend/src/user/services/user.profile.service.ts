import { Injectable } from "@nestjs/common";
import { UserGetProfileRepository } from "../repositories/user.get.profile.repository";

@Injectable()
export class UserGetProfileService{
    constructor(private userGetProfileRepository: UserGetProfileRepository){}

    public async execute(userId: string){
        const profile = await this.userGetProfileRepository.getProfile(userId);

        return profile;
    }
}