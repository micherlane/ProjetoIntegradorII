import { Module } from '@nestjs/common';
import { ReservationCreateModule } from './modules/reservation.create.module';


@Module({
  imports: [ReservationCreateModule],
  controllers: [],
  providers: [],
})
export class ReservationModule {}
