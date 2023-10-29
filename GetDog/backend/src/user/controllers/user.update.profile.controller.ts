import { Body, Controller, HttpStatus, Injectable, Put, Req, Res, UseGuards } from "@nestjs/common";
import { UserUpdateProfileService } from "../services/user.update.profile.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserUpdateProfileDto } from "../dto/user.update.profile.dto";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags("Usuario")
@Controller({
    path: "v1"
})

@Injectable()
export class UserUpdateProfileController {
    constructor(private readonly userUpdateProfileServices: UserUpdateProfileService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Put("users/profile")

    async updateProfile(@Res() res, @Req() req, @Body() userUpdateProfileDto: UserUpdateProfileDto){
        const userId = req['user'].sub;

        const profile = await this.userUpdateProfileServices.execute(userId, userUpdateProfileDto);

        return res.status(HttpStatus.OK).json(profile);
    }
}