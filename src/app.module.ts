import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageService } from "./imagetotext/image.service";
import { ImageController } from "./imagetotext/image.controller";
import { GoogleCloudVisionModule } from '@nest-excalibur/google-cloud-vision/lib';

@Module({
  imports: [GoogleCloudVisionModule],
  controllers: [AppController, ImageController],
  providers: [AppService, ImageService],
})
export class AppModule {}
