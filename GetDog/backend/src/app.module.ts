import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BCriptyProviderModule } from './providers/EncriptionPassword/module/bcripty.provider.module';
import { AuthModule } from './auth/auth.module';
import { FileUploadModule } from './providers/fileUpload/file.upload.module';
import { APP_FILTER } from '@nestjs/core';
import { ErroHttpFilter } from './middlewares/exceptions/exceptions';
import { PostModule } from './post/post.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ReservationModule } from './reservation/reservation.module';
import { TourModule } from './tour/tour.module';

const pathStatics = join(__dirname, '..','..', 'uploads');

@Module({
  imports: [UserModule, AuthModule, BCriptyProviderModule, FileUploadModule, PostModule, ReservationModule,
    ServeStaticModule.forRoot({
      rootPath: pathStatics,
      serveRoot: "/images",
      serveStaticOptions: {
        index: false
      }
    }),
    ReservationModule,
    TourModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: ErroHttpFilter,
  },],
})
export class AppModule {}
