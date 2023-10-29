import { Injectable } from "@nestjs/common";
import { UserUpdateProfileRepository } from "../repositories/user.update.profile.respository";
import { UserUpdateProfileDto } from "../dto/user.update.profile.dto";

@Injectable()
export class UserUpdateProfileService {
    constructor(private userUpdateProfileRepository: UserUpdateProfileRepository){}

    public async execute(userId: string, userUpdateProfileDto: UserUpdateProfileDto){
        const profile = await this.userUpdateProfileRepository.saveProfile(userId, userUpdateProfileDto);
        return profile;
    }
}