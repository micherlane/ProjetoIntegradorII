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

const pathStatics = join(__dirname, '..','..', 'uploads');

@Module({
  imports: [UserModule, AuthModule, BCriptyProviderModule, FileUploadModule, PostModule,
    ServeStaticModule.forRoot({
      rootPath: pathStatics,
      serveRoot: "/images",
      serveStaticOptions: {
        index: false
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: ErroHttpFilter,
  },],
})
export class AppModule {}
