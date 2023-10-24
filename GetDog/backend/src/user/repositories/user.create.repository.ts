import { Injectable } from "@nestjs/common";
import { UserCreateDto } from "../dto/user.create.dto";

@Injectable()
export class UserCreateRepository {
    public async save(userCreateDto: UserCreateDto){
        return userCreateDto;
    }
}