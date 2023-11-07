import { ApiProperty } from "@nestjs/swagger";

export class PostCreateDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    legend: string;

    @ApiProperty()
    disponibility: Date[];

    @ApiProperty()
    address: string;

    @ApiProperty()
    authorId: string;
}

