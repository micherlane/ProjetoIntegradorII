import { Injectable } from "@nestjs/common";
import { Profile } from "@prisma/client";
import prismaClient from "src/prisma";

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
                        address: true
                    }
                }
            }
        });

        return profile;
    }
}