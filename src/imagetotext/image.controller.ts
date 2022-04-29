//nestjs
import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

//Swagger
import { ApiBody, ApiConsumes, ApiOperation, ApiResponse } from "@nestjs/swagger";

//Services
import { ImageService } from "./image.service";

//Google API Service
import { GoogleCloudVisionService } from "@nest-excalibur/google-cloud-vision/lib";

@Controller("image")
export class ImageController {
  constructor(private readonly imageService: ImageService, private readonly googleCloudVisionAService: GoogleCloudVisionService) {
  }

  @ApiOperation({
    summary: "Convertir imagen a texto",
    description: "Extraer el texto desde una imagen"
  })
  @ApiResponse({
    status: 200, description: "Success-Response",
    schema: {
      example: {
        result: true,
        text: "Texto desde imagen",
        message: "Success"
      }
    }
  })
  @ApiResponse({
    status: 404, description: "Error-Response",
    schema: {
      example: {
        "result": false,
        "message": "error"
      }
    }
  })
  @ApiConsumes("multipart/form-data")
  @ApiBody({
    schema: {
      type: "object",
      required: ["image"],
      properties: {
        image: { type: "string", format: "binary" }
      }
    }
  })

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const imageBuffer = file.buffer;
    const text: any = await this.googleCloudVisionAService.detectText(imageBuffer);
    return this.imageService.mappedImage(text);
  }
}
