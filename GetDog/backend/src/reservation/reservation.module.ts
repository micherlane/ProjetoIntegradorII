import { Module } from '@nestjs/common';
import { ReservationCreateModule } from './modules/reservation.create.module';
import { ReservationExternalGetAllModule } from './modules/reservation.external.get.all.module';


@Module({
  imports: [ReservationCreateModule, ReservationExternalGetAllModule],
  controllers: [],
  providers: [],
})
export class ReservationModule {}
