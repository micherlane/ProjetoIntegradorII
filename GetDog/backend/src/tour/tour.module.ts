import { Module } from '@nestjs/common';
import { TourGetAllModule } from './modules/tour.get.all.module';

@Module({
  imports: [TourGetAllModule],
  controllers: [],
  providers: [],
})
export class TourModule {}
