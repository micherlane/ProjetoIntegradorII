import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import prismaClient from "src/prisma";

@Injectable()
export class AuthUserRepository {
    public async verifyEmailAlready(email: string): Promise<User>{
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        return userAlreadyExists;
    }
}