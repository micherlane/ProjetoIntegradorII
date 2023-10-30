import prismaClient from "../../prisma";
import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/user.create.dto";

@Injectable()
export class UserCreateRepository {
    public async verifyUserAlreadyExists(email: string){
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });
        return userAlreadyExists;
    }

    private async createProfile(userId: string): Promise<string> {
        const profile = await prismaClient.profile.create({
            data: {
                userId: userId
            }
        });

        return profile.id;
    }

    public async save(userCreateDto: UserCreateDto){            
        
        const user = await prismaClient.user.create({
            data: {
                    name: userCreateDto.name,
                    email: userCreateDto.email,
                    password: userCreateDto.password,
                    address: userCreateDto.address,
                    typeUser: userCreateDto.typeUser
            },
            select: {
                id: true,
                name: true,
                email: true,
                address: true,
                typeUser: true
            }
        });

        const profileId = await this.createProfile(user.id);

        await prismaClient.user.update({
            where: {
                id: user.id
            },
            data: {
                profileId: profileId
            }
        });
        
        return user;
    }
}