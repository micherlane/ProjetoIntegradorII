import { Controller, Get, HttpStatus, Injectable, Req, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { UserGetProfileService } from "../services/user.profile.service";
import { AuthGuard } from "src/auth/auth.guard";

@ApiTags("Usuario")
@Controller({
    path: "v1"
})

@Injectable()
export class UserGetProfileController {
    constructor(private readonly userGetProfileService: UserGetProfileService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("users/profile")

    async getProfile(@Res() res, @Req() req){
        const userId = req['user'].sub;

        const profile = await this.userGetProfileService.execute(userId);

        return res.status(HttpStatus.OK).json(profile);
    }
}