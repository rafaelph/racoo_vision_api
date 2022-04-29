//nest
import { Injectable } from "@nestjs/common";

//interfaces
import { IResponse, responseToInterface } from "../interfaces/api-interfaces";

@Injectable()
export class ImageService {

  async mappedImage(result: any): Promise<IResponse> {
    return responseToInterface(result);
  }
}
