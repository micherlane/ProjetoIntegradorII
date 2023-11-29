import { ApiProperty } from "@nestjs/swagger";
import { TourStatus } from "@prisma/client";

export class TourChangeStatusDto {
    @ApiProperty()
    status: TourStatus;
    @ApiProperty()
    id: string;
}