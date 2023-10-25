import { Injectable } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";
import { UserCreateDto } from "../dto/user.create.dto";
import { UserAlreadyExistsError } from "../err/user.alreadyExists.error";
import { BCryptProvider } from "src/providers/EncriptionPassword/bcripty.provider";

@Injectable()
export class UserCreateService {

    constructor(private userCreateRepository: UserCreateRepository, private bcryptProvider: BCryptProvider){}

    public async execute(userCreateDto: UserCreateDto){

        const userAlreadyExists = await this.userCreateRepository.verifyUserAlreadyExists(userCreateDto.email);

        if (userAlreadyExists) {
            return new UserAlreadyExistsError();
        }

        const passwordHash = await this.bcryptProvider.encryptPassword(userCreateDto.password);

        userCreateDto.password = passwordHash;

        return await this.userCreateRepository.save(userCreateDto);
    }
}