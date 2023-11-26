import { Injectable } from "@nestjs/common";
import prismaClient from "../../prisma";

@Injectable()
export class AuthUserRepository {
    public async verifyEmailAlready(email: string){
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                address: true,
                password: true,
                typeUser: true,
                profile: true,
            }
        });
        return userAlreadyExists;
    }
}