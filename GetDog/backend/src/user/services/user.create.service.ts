import { Injectable } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";
import { UserCreateDto } from "../dto/user.create.dto";
import { BCryptProvider } from "src/providers/EncriptionPassword/bcripty.provider";

@Injectable()
export class UserCreateService {

    constructor(private userCreateRepository: UserCreateRepository, private bcryptProvider: BCryptProvider){}

    public async execute(userCreateDto: UserCreateDto){
        return await this.userCreateRepository.save(userCreateDto, this.bcryptProvider);
    }
}