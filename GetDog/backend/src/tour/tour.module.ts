import { Module } from '@nestjs/common';
import { TourGetAllModule } from './modules/tour.get.all.module';
import { TourChangeStatusModule } from './modules/tour.change.status.module';

@Module({
  imports: [TourGetAllModule, TourChangeStatusModule],
  controllers: [],
  providers: [],
})
export class TourModule {}
