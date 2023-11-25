import { Controller, Get, HttpStatus, Injectable, Param, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "src/auth/auth.guard";
import { PostGetOneService } from "../services/post.get.one.service";

@ApiTags("Postagem")
@Controller({
    path: "v1"
})

@Injectable()
export class PostGetOneController {
    constructor(private readonly postGetOneService: PostGetOneService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("posts/:postId")

    async getPost(@Res() res, @Param("postId") postId: string){
        const post = await this.postGetOneService.execute(postId);
        return res.status(HttpStatus.OK).json(post);
    }
}