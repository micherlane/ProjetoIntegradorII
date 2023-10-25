import { Body, Controller, HttpStatus, Injectable, Post, Res } from "@nestjs/common";
import { UserCreateService } from "../services/user.create.service";
import { UserCreateDto } from "../dto/user.create.dto";
import { ApiTags } from "@nestjs/swagger";
import { ExceptionError } from "src/middlewares/exceptions/exception.error";

@ApiTags("Usuario")
@Controller({
    path: "v1"
})

@Injectable()
export class UserCreateController {
    constructor(private readonly userCreateService: UserCreateService){}

    @Post("users")
    async create(@Res() res, @Body() userCreateDto: UserCreateDto){

        if(!userCreateDto.name || !userCreateDto.email || !userCreateDto.password || !userCreateDto.address) {
            throw new ExceptionError("Preencha todas as informações", HttpStatus.BAD_REQUEST);
        }
        
        const user = await this.userCreateService.execute(userCreateDto);

        return res.status(HttpStatus.CREATED).json(user);  
    }
}