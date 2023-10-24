import { Injectable } from "@nestjs/common";
import { UserCreateRepository } from "../repositories/user.create.repository";
import { UserCreateDto } from "../dto/user.create.dto";

@Injectable()
export class UserCreateService {
    constructor(private userCreateRepository: UserCreateRepository){}

    public async execute(userCreateDto: UserCreateDto){
        return await this.userCreateRepository.save(userCreateDto);
    }
}