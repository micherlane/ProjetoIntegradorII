import { Body, Controller, HttpStatus, Injectable, Post, Res } from "@nestjs/common";
import { UserCreateService } from "../services/user.create.service";
import { UserCreateDto } from "../dto/user.create.dto";

@Controller({
    version: "1"
})

@Injectable()
export class UserCreateController {
    constructor(private readonly userCreateService: UserCreateService){}

    @Post("users")
    async create(@Res() res, @Body() userCreateDto: UserCreateDto){
        return res.status(HttpStatus.OK).json({});
    }
}