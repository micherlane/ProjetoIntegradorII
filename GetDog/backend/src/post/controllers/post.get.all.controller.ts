import { Controller, Get, HttpStatus, Injectable, Query, Res, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { PostGetAllService } from "../services/post.get.all.service";
import { AuthGuard } from "../../auth/auth.guard";

@ApiTags("Postagem")
@Controller({
    path: "v1"
})

@Injectable()
export class PostGetAllController {
    constructor(private readonly postGetAllService: PostGetAllService){}

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Get("posts")
    
    async getAllPosts(@Res() res, @Query("page") page: string, @Query("perPage") perPage: string, @Query("offset") offset: string){
        const pageNumber = parseInt(page) || 1;
        const perPageNumber = parseInt(perPage) || 10;
        const offsetNumber = (pageNumber - 1) * perPageNumber;

        const posts = await this.postGetAllService.execute(perPageNumber, offsetNumber);

        return res.status(HttpStatus.OK).json(posts);

    }
}