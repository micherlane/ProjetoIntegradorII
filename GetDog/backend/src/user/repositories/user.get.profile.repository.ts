import { Injectable } from "@nestjs/common";
import prismaClient from "../../prisma";

@Injectable()
export class UserGetProfileRepository {
    public async getProfile(userId: string){
        const profile = prismaClient.profile.findFirst({
            where: {
                userId: userId
            },
            select: {
                id: true,
                gender: true,
                biography: true,
                coverPhoto: true,
                profilePicture: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        address: true,
                        typeUser: true
                    }
                }
            }
        });

        return profile;
    }
}