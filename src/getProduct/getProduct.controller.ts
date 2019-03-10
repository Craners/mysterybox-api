import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Put,
  Param,
  Query,
} from '@nestjs/common';
import { GetProductService } from './getProduct.service';

@Controller('get')
export class GetProductController {
  constructor(private readonly getDataService: GetProductService) {}

  @Get('product')
  async getproduct(@Query() queryParams): Promise<string> {
    return await this.getDataService.getProducts(queryParams);
  }
}
