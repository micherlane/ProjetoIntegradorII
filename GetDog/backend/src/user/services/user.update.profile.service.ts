import { Injectable } from "@nestjs/common";
import { UserUpdateProfileRepository } from "../repositories/user.update.profile.respository";
import { UserUpdateProfileDto } from "../dto/user.update.profile.dto";

interface FileProps { 
    pictureProfile?: Express.Multer.File[]; 
    coverPhoto?: Express.Multer.File[] 
}

@Injectable()
export class UserUpdateProfileService {
    constructor(private userUpdateProfileRepository: UserUpdateProfileRepository) { }

    public async execute(userId: string, userUpdateProfileDto: UserUpdateProfileDto, files: FileProps) {
        const pictureProfile = files.pictureProfile![0].filename;
        const coverPhoto = files.coverPhoto![0].filename;

        const profile = await this.userUpdateProfileRepository.saveProfile(userId, userUpdateProfileDto, pictureProfile, coverPhoto);
        return profile;
    }
}