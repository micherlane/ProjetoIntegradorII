import { Module } from '@nestjs/common';
import { ReservationCreateModule } from './modules/reservation.create.module';
import { ReservationExternalGetAllModule } from './modules/reservation.external.get.all.module';
import { ReservationPersonalGetAllModule } from './modules/reservation.personal.get.all.module';
import { ReservationGetOneModule } from './modules/reservation.get.one.module';
import { ReservationChangeStatusModule } from './modules/reservation.change.status.module';


@Module({
  imports: [
    ReservationCreateModule,
    ReservationExternalGetAllModule,
    ReservationPersonalGetAllModule,
    ReservationGetOneModule,
    ReservationChangeStatusModule
  ],
  controllers: [],
  providers: [],
})
export class ReservationModule { }
