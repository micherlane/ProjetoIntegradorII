import { HttpStatus, Injectable } from "@nestjs/common";
import prismaClient from "src/prisma";
import { UserUpdateProfileDto } from "../dto/user.update.profile.dto";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";

@Injectable()
export class UserUpdateProfileRepository {

    public async saveProfile(userId: string, userUpdateProfileDto: UserUpdateProfileDto, profilePicture: string, coverPhoto: string) {

        try {

            const profile = await prismaClient.profile.update({
                where: {
                    userId: userId
                },
                data: {
                    gender: userUpdateProfileDto.gender,
                    biography: userUpdateProfileDto.biography,
                    profilePicture: profilePicture,
                    coverPhoto: coverPhoto
                }
            });

            return profile;
        } catch (error) {
            throw new ExceptionError("Erro interno do servidor.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}